import React, { useState, useMemo, useEffect } from 'react';
import { Box } from '@mui/material';
import { MainBanner, Title, TextDetail } from '../../components';
import imgBanner from '../../assets/banner-adoption.png';
import { TextField, TextareaAutosize, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import Images from './components/Images';
import { useQuery } from 'react-query';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import TermsAndConditions from '../../components/TermsAndConditions.tsx/TermsAndConditions';

interface Image {
  id: number;
  value: string | null;
  isNew?: boolean;
}

const GiveAdoption: React.FC = () => {
  const { data: species, isLoading: isLoadingSpacies, error: errorSpecies } = useQuery('species', getSpecies);
  const { data: breeds, isLoading: isLoadingBreeds, error: errorBreeds } = useQuery('breeds', getBreeds);

  const isLoading = isLoadingSpacies || isLoadingBreeds;

  const [size, setSize] = useState('');
  const [gender, setGender] = useState('');

  const [specie, setSpecie] = useState<null | number>(null);
  const [breed, setBreed] = useState<null | number>(null);
  const [description, setDescription] = useState('');

  const [images, setImages] = useState<Image[]>([{ id: 0, value: '' }]);
  const IMAGES_MIN_LENGTH = 5;

  const filteredBreeds = useMemo(() => {
    console.log(breeds);
    if (!breeds) return [];
    return breeds.filter((b) => b.species.id === specie);
  }, [breed, specie, breeds, species]);

  useEffect(() => {
    if (errorSpecies) console.log({ errorSpecies });
    if (errorBreeds) console.log({ errorBreeds });
  }, [errorSpecies, errorBreeds]);

  return (
    <div className='bg-white col-span-full'>
      <Box>
        <MainBanner images={imgBanner} />
        <div className='pl-4 lg:pl-32'>
          <Title variant='h3' className='pr-4 font-bold '>
            Formulario para dar en adopción
          </Title>
          <TextDetail size='s' weight='regular'>
            Complete el siguiente formulario para poder encontrarle un hogar al peludito al cual desea postular en adopción.
          </TextDetail>
        </div>
        <div className='grid grid-rows-none gap-4 p-4'>
          <Images images={images} setImages={setImages} hasError={images.length > 1 && images.length < IMAGES_MIN_LENGTH + 1} minLength={IMAGES_MIN_LENGTH} />
        </div>
        <div className='grid grid-rows-none gap-4 p-4 lg:grid-cols-2'>
          <TextField
            label='Nombre de la mascota'
            variant='outlined'
            type='text'
            name='namePet'
            id='namePet'
            className='w-full'
            placeholder='Introduce aca el nombre de tu mascota'
          />
          <FormControl fullWidth>
            <InputLabel id='specie'>Especie</InputLabel>
            <Select labelId='specie' id='specie' value={specie} label='Especie' onChange={(e) => setSpecie(Number(e.target.value))}>
              {species?.map((s) => (
                <MenuItem value={s.id} key={s.id}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='grid grid-rows-none gap-4 p-4 lg:grid-cols-2'>
          <FormControl fullWidth>
            <InputLabel id='breed'>Raza</InputLabel>
            <Select labelId='breed' id='breed' disabled={!specie} value={breed} label='Raza' onChange={(e) => setBreed(Number(e.target.value))}>
              {filteredBreeds?.map((s) => (
                <MenuItem value={s.id} key={s.id}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='size'>Tamaño</InputLabel>
            <Select labelId='size' id='size' disabled={!specie} value={size} label='Tamaño' onChange={(e) => setSize(e.target.value)}>
              <MenuItem value={'Pequeño'}>Pequeño</MenuItem>
              <MenuItem value={'Mediano'}>Mediano</MenuItem>
              <MenuItem value={'Grande'}>Grande</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='grid grid-rows-none gap-4 p-4 lg:grid-cols-2'>
          <TextField label='Edad' variant='outlined' type='text' name='age' id='age' className='w-full' placeholder='Introduce aca la edad de tu mascota' />
          <FormControl fullWidth>
            <InputLabel id='gender'>Genero</InputLabel>
            <Select labelId='gender' id='gender' value={gender} label='Genero' onChange={(e) => setGender(e.target.value)}>
              <MenuItem value={'Hembra'}>Hembra</MenuItem>
              <MenuItem value={'Macho'}>Macho</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='grid grid-rows-none gap-4 p-4 '>
          <TextDetail size='xs' weight='regular' className='absolute z-10 px-2 bg-white left-2 -top-3 '>
            Descripción
          </TextDetail>
          <TextareaAutosize
            className='w-full p-4 leading-5 text-black bg-white border border-solid rounded-lg border-mui-gray focus:border-primary focus-visible:outline-0'
            aria-label='descripción'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <TermsAndConditions />
      </Box>
    </div>
  );
};

export default GiveAdoption;
