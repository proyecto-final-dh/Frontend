import React from 'react';
import { Box } from '@mui/material';
import { MainBanner, Title, TextDetail } from '../../components';
import imgBanner from '../../assets/banner-adoption.png';
import { TextField } from '@mui/material';

const GiveAdoption: React.FC = () => {
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
      </Box>
    </div>
  );
};

export default GiveAdoption;
