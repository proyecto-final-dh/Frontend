import React, { useState, useMemo, useEffect } from 'react';
import { Box } from '@mui/material';
import { MainBanner, Title, TextDetail } from '../../components';
import imgBanner from '../../assets/banner-adoption.png';
import { TextField, TextareaAutosize, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import Images from './components/Images';
import { useQuery, useMutation } from 'react-query';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import cn from 'classnames';
import TermsAndConditions from '../../components/TermsAndConditions.tsx/TermsAndConditions';
import ModalGiveAdoption from './components/ModalGiveAdoption';
import { useNavigate } from 'react-router';
import { withKeycloakAuth, kc } from '../../config';

interface Image {
  id: number;
  value: Blob | null;
  isNew?: boolean;
}

const GiveAdoption: React.FC = () => {
  const { data: species, error: errorSpecies } = useQuery('species', getSpecies);
  const { data: breeds, error: errorBreeds } = useQuery('breeds', getBreeds);

  const [petName, setPetName] = useState('');
  const [size, setSize] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [specie, setSpecie] = useState<null | number>(null);
  const [breed, setBreed] = useState<null | number>(null);
  const [imageModal, setImageModal] = useState<string>('');

  const [isModalOpen, setModalOpen] = useState(false);

  const [images, setImages] = useState<Image[]>([{ id: 0, value: null }]);
  const IMAGES_MIN_LENGTH = 1;
  const formData = new FormData();
  const navigate = useNavigate();

  const mutation = useMutation((formData: FormData) =>
    fetch('http://54.90.177.71:8080/pets/adoptive-with-images', {
      method: 'POST',
      body: formData,
      redirect: 'follow',
      headers: { Authorization: `Bearer ${kc.token}` },
    })
      .then((response) => response.json())
      .then((res) => setImageModal(res.data.images[0].url)),
  );

  const currentSpecie = useMemo(() => {
    return species?.find((s) => s.id === specie)?.name ?? '';
  }, [species, specie]);

  const handleSubmit = async () => {
    formData.append(
      'post',
      new Blob(
        [
          JSON.stringify({
            name: `${petName}`,
            breed_id: `${breed}`,
            owner_id: 1,
            gender: `${gender}`,
            size: `${size}`,
            age: `${age}`,
            description: `${description}`,
          }),
        ],
        {
          type: 'application/json',
        },
      ),
    );

    const files = images.filter((image) => image.value);
    files.forEach((image) => {
      if (image.value != null) {
        formData.append(`image`, image.value);
      }
    });
    console.log(kc.token);
    mutation.mutateAsync(formData);
    setModalOpen(true);
  };

  const filteredBreeds = useMemo(() => {
    console.log(images);
    if (!breeds) return [];
    return breeds.filter((b) => b.species.id === specie);
  }, [breed, specie, breeds, species]);

  useEffect(() => {
    if (errorSpecies) console.log({ errorSpecies });
    if (errorBreeds) console.log({ errorBreeds });
  }, [errorSpecies, errorBreeds]);

  const disableSubmit = useMemo(() => {
    return !petName || !size || !gender || !description || !specie || !breed || !images;
  }, [petName, size, gender, description, specie, breed, images]);

  return (
    <div className='bg-white col-span-full'>
      <Box>
        <MainBanner images={imgBanner} />
        <div className='p-4 lg:p-8'>
          <Title variant='h3' className='pr-4 font-bold text-center'>
            Formulario para dar en adopción
          </Title>
        </div>
        <div className='p-4 lg:p-8'>
          <TextDetail size='s' weight='regular' className='mt-4'>
            Complete el siguiente formulario para poder encontrarle un hogar al peludito al cual desea postular en adopción:
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
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
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
          <TextField
            label='Edad'
            variant='outlined'
            type='number'
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            name='age'
            id='age'
            className='w-full'
            placeholder='Introduce aca la edad de tu mascota'
          />
          <FormControl fullWidth>
            <InputLabel id='gender'>Genero</InputLabel>
            <Select labelId='gender' id='gender' value={gender} label='Genero' onChange={(e) => setGender(e.target.value)}>
              <MenuItem value={'Hembra'}>Hembra</MenuItem>
              <MenuItem value={'Macho'}>Macho</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='relative  gap-4 p-4 focus-within:text-primary'>
          <TextDetail size='xs' weight='regular' className='absolute px-2 bg-white left-5 top-1 '>
            Descripción
          </TextDetail>
          <TextareaAutosize
            className='w-full p-4 leading-5 text-black bg-white border border-solid rounded-lg border-mui-gray focus:border-primary focus-visible:outline-0'
            aria-label='descripción'
            placeholder='Describa aquí personalidad, características y/o necesidades de la mascota'
            value={description}
            minRows={3}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex lg:content-center p-4 '>
          <button
            className={cn('rounded-3xl bg-primary text-center text-white py-3 w-full lg:max-w-[160px] mx-auto cursor-pointer', {
              'opacity-40': disableSubmit,
            })}
            type='submit'
            disabled={disableSubmit}
            onClick={handleSubmit}
          >
            Dar en adopción
          </button>
          <ModalGiveAdoption
            isOpen={isModalOpen}
            onClose={() => {
              setModalOpen(false);
              navigate('/adoption');
            }}
            petName={petName}
            specie={currentSpecie}
            gender={gender}
            size={size}
            image={imageModal}
          />
        </div>
        <TermsAndConditions />
      </Box>
    </div>
  );
};

export default withKeycloakAuth(GiveAdoption);
