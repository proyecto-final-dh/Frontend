import React, { useMemo, useState } from 'react';
import { Pet } from '../../../contracts/pet';
import { TextDetail, Table, Title } from '../../../components';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import ModalAdopConf from './ModalAdopConf';
interface CardProps {
  pet: Pet;
}

const CardDetailPet: React.FC<CardProps> = ({ pet }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pet.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pet.images.length - 1 : prevIndex - 1));
  };

  const handleAdoptClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const rows = useMemo(() => {
    if (!pet) return [];
    return [
      { key: 'Raza', value: pet.breed.name },
      { key: 'Edad', value: pet.age.toString() },
      { key: 'Tamaño', value: pet.size },
      { key: 'Género', value: pet.gender },
      { key: 'Localización', value: `${pet.userDetails.location.city}-${pet.userDetails.location.country}` },
    ];
  }, [pet]);

  const headers = useMemo(() => {
    if (!pet) return [];
    return [
      { ref: 'key', label: 'Especie' },
      { ref: 'value', label: pet.breed.species.name },
    ];
  }, [pet]);

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='mb-4 lg:w-1/2 sm:mb-0 sm:mr-4'>
        <div className='flex justify-center p-5 '>
          <img src={pet.images[currentImageIndex].url} alt={pet.images[currentImageIndex].alt} className='object-cover w-full rounded-lg h-96' />
        </div>
        {pet.images.length > 1 && (
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
          {pet.name}
        </Title>
        <TextDetail size='s' weight='regular'>
          {pet.description}
        </TextDetail>
        <div className='max-w-xs mx-auto mt-10 lg:max-w-full'>
          <Table headers={headers} data={rows} />
        </div>
        <button onClick={handleAdoptClick} className='w-full p-6 my-10 font-bold bg-primary rounded-3xl lg:max-w-[153px] lg:p-3 float-right'>
          Adoptar
        </button>
        {isModalOpen && <ModalAdopConf pet={pet} onClose={closeModal} />}
      </article>
    </div>
  );
};

export default CardDetailPet;
