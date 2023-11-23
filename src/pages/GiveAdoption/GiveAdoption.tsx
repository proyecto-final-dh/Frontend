import React, { useState } from 'react';
import { Box } from '@mui/material';
import { MainBanner, Title, TextDetail } from '../../components';
import imgBanner from '../../assets/banner-adoption.png';
import { TextField } from '@mui/material';
import Images from './components/Images';

interface Image {
  id: number;
  value: string | null;
  isNew?: boolean;
}

const GiveAdoption: React.FC = () => {
  const [images, setImages] = useState<Image[]>([{ id: 0, value: '' }]);
  const IMAGES_MIN_LENGTH = 5;
  return (
    <div className='bg-white col-span-full'>
      <Box>
        <MainBanner images={imgBanner} />
        <div className='pl-32'>
          <Title variant='h3' className='pr-4 font-bold'>
            Formulario para dar en adopción
          </Title>
          <TextDetail size='s' weight='regular'>
            Complete el siguiente formulario para poder encontrarle un hogar al peludito al cual desea postular en adopción.
          </TextDetail>
        </div>
        <TextField
          label='Nombre de la mascota'
          variant='outlined'
          type='text'
          name='namePet'
          id='namePet'
          className='w-full'
          placeholder='Introduce aca el nombre de tu mascota'
        />
        <Images images={images} setImages={setImages} hasError={images.length > 1 && images.length < IMAGES_MIN_LENGTH + 1} minLength={IMAGES_MIN_LENGTH} />
      </Box>
    </div>
  );
};

export default GiveAdoption;
