import React, { useState } from 'react';
import { Pet } from '../../../contracts/pet';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Title, TextBody } from '../../../components';

import 'tailwindcss/tailwind.css';
interface CardProps {
  pet: Pet;
}

const CardDetailPet: React.FC<CardProps> = ({ pet }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pet.image.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? pet.image.length - 1 : prevIndex - 1));
  };

  return (
    <div className='col-span-full'>
      {' '}
      <div className='flex flex-col lg:flex-row'>
        <div className='mb-4 sm:mb-0 sm:mr-4'>
          <div className='flex justify-center p-5 '>
            <img src={pet.image[currentImageIndex].url} alt={pet.image[currentImageIndex].alt} className='object-cover w-full h-96   rounded-lg' />
          </div>
          {pet.image.length > 1 && (
            <div className='flex justify-center mt-2 space-x-4'>
              <div className='cursor-pointer'>
                <ArrowBackIosIcon onClick={handlePrevImage} />
              </div>
              <div className='cursor-pointer'>
                <ArrowForwardIosIcon onClick={handleNextImage} />
              </div>
            </div>
          )}
        </div>
        <div>
          <Title variant='h2' className='mt-10 mb-5 font-bold text-center'>
            {pet.name}
          </Title>
          <TextBody size='s' weight='regular'>
            {pet.description}
          </TextBody>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPet;
