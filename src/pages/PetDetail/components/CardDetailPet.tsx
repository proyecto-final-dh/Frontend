import React, { useMemo, useState } from 'react';
import { PetWithOwner } from '../../../contracts/pet';
import { TextDetail, Table, Title } from '../../../components';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useAuthProvider } from '../../../config';
import { getUserDetailsByKcId } from '../../../services/user-details.service';
import { useNavigate } from 'react-router-dom';
import ModalAdopConf from './ModalAdopConf';

interface CardProps {
  data: PetWithOwner;
}

const CardDetailPet: React.FC<CardProps> = ({ data }) => {
  const { keycloak } = useAuthProvider();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.pet.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? data.pet.images.length - 1 : prevIndex - 1));
  };

  const handleAdoptClick = () => {
    if (!keycloak.subject) {
      navigate('/register');
      return;
    }
    getUserDetailsByKcId()
      .then(() => setIsModalOpen(true))
      .catch((error) => {
        if ((error as { response: { status: number } }).response.status === 404) {
          navigate('/register');
        } else {
          console.log({ error });
        }
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const rows = useMemo(() => {
    if (!data) return [];
    return [
      { key: 'Raza', value: data.pet.breed.name },
      { key: 'Edad', value: data.pet.age?.toString() ?? '' },
      { key: 'Tamaño', value: data.pet.size },
      { key: 'Género', value: data.pet.gender },
      { key: 'Localización', value: `${data.owner_information?.location?.city ?? ''}-${data.owner_information?.location?.country ?? ''}` },
    ];
  }, [data]);

  const headers = useMemo(() => {
    if (!data) return [];
    return [
      { ref: 'key', label: 'Especie' },
      { ref: 'value', label: data.pet.breed.species.name },
    ];
  }, [data]);

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='mb-4 lg:w-1/2 sm:mb-0 sm:mr-4'>
        <div className='flex justify-center p-5 '>
          <img src={data.pet.images[currentImageIndex].url} alt={data.pet.images[currentImageIndex].title} className='object-cover w-full rounded-lg h-96' />
        </div>
        {data.pet.images.length > 1 && (
          <div className='flex justify-center mt-2 space-x-4'>
            <div className='cursor-pointer'>
              <IconChevronLeft onClick={handlePrevImage} />
            </div>
            <div className='cursor-pointer'>
              <IconChevronRight onClick={handleNextImage} />
            </div>
          </div>
        )}
      </div>

      <article className='mt-4 px-7 lg:pl-0 lg:pr-4 lg:w-1/2'>
        <Title variant='h1' className='mb-6 font-bold'>
          {data.pet.name}
        </Title>
        <TextDetail size='s' weight='regular'>
          {data.pet.description}
        </TextDetail>
        <div className='max-w-xs mx-auto mt-10 lg:max-w-full'>
          <Table headers={headers} data={rows} />
        </div>
        <button onClick={handleAdoptClick} className='w-full p-6 my-10 font-bold bg-primary rounded-3xl lg:max-w-[153px] lg:p-3 float-right'>
          Adoptar
        </button>
        {isModalOpen && <ModalAdopConf data={data} onClose={closeModal} />}
      </article>
    </div>
  );
};

export default CardDetailPet;
