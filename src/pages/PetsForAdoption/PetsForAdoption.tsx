import { useEffect, useState } from 'react';
import { Loader, Title } from '../../components';
import { withKeycloakAuth } from '../../config';
import { useLazyGetForAdoptionQuery, useLazyGetResquedQuery, useUpdatePetStatusMutation } from '../../store/apis/resqpet.api';
import MyPetCard from '../YourAccount/components/MyPetCard';
import { dateFormatter } from '../../utils/dates';
import ModalConfirmAdoption from '../YourAccount/components/ModalConfirmAdoption/ModalConfirmAdoption';
import { APIMyPetsResponse } from '../../contracts/my-pets.contract';

const PetsForAdoption = () => {
  const [getForAdoption, { isFetching: isFetchingForAdoption, isLoading: isLoadingForAdoption, data: dataForAdoption }] = useLazyGetForAdoptionQuery();
  const [getResqued, { isFetching: isFetchingResqued, isLoading: isLoadingResqued, data: dataResqued }] = useLazyGetResquedQuery();
  const [updateStatus, { isSuccess }] = useUpdatePetStatusMutation();

  const _isLoading = isFetchingForAdoption || isLoadingForAdoption || isFetchingResqued || isLoadingResqued;

  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState<APIMyPetsResponse | null>(null);

  useEffect(() => {
    getForAdoption({});
    getResqued({});
  }, []);

  useEffect(() => {
    if (isSuccess) {
      getForAdoption({});
      getResqued({});
    }
  }, [isSuccess]);

  return (
    <div className='w-full'>
      {_isLoading && <Loader opacity={60} />}
      <ModalConfirmAdoption
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedPet(null);
        }}
        petName={selectedPet?.pet.name ?? ''}
        specie={selectedPet?.pet.breed.species.name ?? ''}
        gender={selectedPet?.pet.gender ?? ''}
        size={selectedPet?.pet.size ?? ''}
        image={selectedPet?.images[0].url ?? ''}
        onSubmit={() => {
          if (!selectedPet) return;
          updateStatus({ id: selectedPet.pet.id });
          setShowModal(false);
        }}
      />
      {!_isLoading && dataForAdoption && (
        <>
          <Title className='m-4' variant='h1'>
            En adopción
          </Title>
          <div className='flex flex-col gap-1'>
            {dataForAdoption.map((item) => {
              return (
                <MyPetCard
                  key={item.pet.id}
                  image={item.images[0].url}
                  altImage={item.images[0].title}
                  petName={item.pet.name}
                  breed={item.pet.breed.name}
                  species={item.pet.breed.species.name}
                  mainAction={() => {
                    setShowModal(true);
                    setSelectedPet(item);
                  }}
                  publishDate={dateFormatter(item.dateCreationPet, 'YYYY-MM-DD', 'DD-MM-YYYY')}
                  status={item.pet.status}
                  mainActionLabel='Adoptado'
                />
              );
            })}
          </div>
        </>
      )}
      {!_isLoading && dataResqued && (
        <>
          <Title className='m-4' variant='h1'>
            Adoptados
          </Title>
          <div className='flex flex-col gap-1'>
            {dataResqued.map((item) => {
              return (
                <MyPetCard
                  key={item.pet.id}
                  image={item.images[0].url}
                  altImage={item.images[0].title}
                  petName={item.pet.name}
                  breed={item.pet.breed.name}
                  species={item.pet.breed.species.name}
                  publishDate={dateFormatter(item.dateCreationPet, 'YYYY-MM-DD', 'DD-MM-YYYY')}
                  adoptionDate={dateFormatter(item.dateCreationStatus, 'YYYY-MM-DD', 'DD-MM-YYYY')}
                  status={item.pet.status}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default withKeycloakAuth(PetsForAdoption);
