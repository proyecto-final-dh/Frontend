import { useEffect } from 'react';
import { Loader, Title } from '../../components';
import { withKeycloakAuth } from '../../config';
import { useLazyGetForAdoptionQuery, useLazyGetResquedQuery, useUpdatePetStatusMutation } from '../../store/apis/resqpet.api';
import MyPetCard from '../YourAccount/components/MyPetCard';

const PetsForAdoption = () => {
  const [getForAdoption, { isFetching: isFetchingForAdoption, isLoading: isLoadingForAdoption, data: dataForAdoption }] = useLazyGetForAdoptionQuery();
  const [getResqued, { isFetching: isFetchingResqued, isLoading: isLoadingResqued, data: dataResqued }] = useLazyGetResquedQuery();
  const [updateStatus, { isSuccess }] = useUpdatePetStatusMutation();

  const _isLoading = isFetchingForAdoption || isLoadingForAdoption || isFetchingResqued || isLoadingResqued;

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
      {!_isLoading && dataForAdoption && (
        <>
          <Title variant='h1'>En adopción</Title>
          {dataForAdoption.map((item) => {
            return (
              <MyPetCard
                key={item.pet.id}
                image={item.images[0].url}
                altImage={item.images[0].title}
                petName={item.pet.name}
                breed={item.pet.breed.name}
                species={item.pet.breed.species.name}
                mainAction={() => updateStatus({ id: item.pet.id })}
                mainActionLabel='Adoptado'
              />
            );
          })}
        </>
      )}
      {!_isLoading && dataResqued && (
        <>
          <Title variant='h1'>Adoptados</Title>
          {dataResqued.map((item) => {
            return (
              <MyPetCard
                key={item.pet.id}
                image={item.images[0].url}
                altImage={item.images[0].title}
                petName={item.pet.name}
                breed={item.pet.breed.name}
                species={item.pet.breed.species.name}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default withKeycloakAuth(PetsForAdoption);
