import { FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize } from '@mui/material';
import { DragAndDrop, Loader, TextDetail, Title } from '../../components';
import qrBannerImage from './../../assets/qr-banner.jpeg';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import cn from 'classnames';

const QrGenerator = () => {
  const { data: species, isLoading: isLoadingSpacies, error: errorSpecies } = useQuery('species', getSpecies);
  const { data: breeds, isLoading: isLoadingBreeds, error: errorBreeds } = useQuery('breeds', getBreeds);

  const isLoading = isLoadingSpacies || isLoadingBreeds;

  const [petName, setPetName] = useState('');
  const [specie, setSpecie] = useState<null | number>(null);
  const [breed, setBreed] = useState<null | number>(null);
  const [images, setImages] = useState<{ id: number; value: File | null }[]>([{ id: 0, value: null }]);
  const [description, setDescription] = useState('');

  const filteredBreeds = useMemo(() => {
    if (!breeds) return [];
    return breeds.filter((b) => b.species.id === specie);
  }, [breed, specie, breeds, species]);

  useEffect(() => {
    if (errorSpecies) console.log({ errorSpecies });
    if (errorBreeds) console.log({ errorBreeds });
  }, [errorSpecies, errorBreeds]);

  const disableSubmit = useMemo(() => {
    return !petName || !specie || !breed || !images.length || !description;
  }, [petName, specie, breed, images, description]);

  return (
    <main>
      <header className='flex items-center gap-3 pb-4 bg-mid-gray lg:gap-8'>
        <img src={qrBannerImage} alt='dog with cat' className='w-full max-w-[185px] lg:max-w-[250px]' />
        <TextDetail size='s' weight='bold' className='lg:!text-[30px]'>
          &quot;Escanea, Encontrá, ¡Reúnite! 🐾 Tu conexión instantánea con tu mascota perdida.&quot;
        </TextDetail>
      </header>
      {isLoading && <Loader opacity={60} />}
      <Title variant='h3' className='font-bold text-center'>
        Genera un QR único para tu mascota
      </Title>
      {!isLoading && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='flex w-full gap-10 p-10'
        >
          <section className='flex flex-col w-full gap-5 lg:w-1/2'>
            <TextField
              label='Nombre de la Mascota*'
              variant='outlined'
              type='text'
              name='name'
              id='name'
              onChange={(e) => {
                setPetName(e.target.value);
              }}
              value={petName}
              className='w-full'
              placeholder='Nombre de la Mascota'
            />
            <div className='flex flex-col w-full gap-3 lg:flex-row'>
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
            </div>
            <div className='relative flex flex-wrap justify-center gap-4 p-4 border rounded-lg border-mui-gray md:justify-start'>
              <TextDetail size='xs' weight='regular' className='absolute z-10 px-2 text-black bg-white left-2 -top-3'>
                Imágenes de la mascota
              </TextDetail>
              {images.map((image) => (
                <DragAndDrop
                  id={image.id}
                  key={image.id}
                  value={image.value}
                  onUpload={(value) => {
                    image.value = value;
                    setImages([...images, { id: image.id + 1, value: null }]);
                  }}
                  onRemove={(_, id) => {
                    setImages(images.filter((image) => image.id !== id));
                  }}
                />
              ))}
            </div>
            <div className='relative focus-within:text-primary'>
              <TextDetail size='xs' weight='regular' className='absolute z-10 px-2 bg-white left-2 -top-3 '>
                Descripción
              </TextDetail>
              <TextareaAutosize
                className='w-full p-4 leading-5 bg-white border border-solid rounded-lg text-mui-gray focus:border-primary focus-visible:outline-0'
                aria-label='descripción'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              className={cn('rounded-3xl bg-primary text-center py-3 w-full lg:max-w-[160px] mx-auto', {
                'opacity-40': disableSubmit,
              })}
              type='submit'
              disabled={disableSubmit}
            >
              <TextDetail size='s' weight='bold'>
                Generar QR
              </TextDetail>
            </button>
          </section>
        </form>
      )}
    </main>
  );
};

export default QrGenerator;
