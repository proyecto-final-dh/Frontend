import { FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize } from '@mui/material';
import { DragAndDrop, Loader, TextDetail, Title } from '../../components';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import { IconAt, IconChevronLeft, IconChevronRight, IconPhone, IconUser } from '@tabler/icons-react';
import { dateFormatter } from '../../utils/dates';
import { useKeycloak } from '@react-keycloak/web';
import { useLazyGetUserDetailsByIdQuery } from '../../store/apis/resqpet.api';
import qrBannerImage from './../../assets/slider adopción (1).png';
import qrPawsImage from './../../assets/icons/huellas.svg';
import cn from 'classnames';

const QrGenerator = () => {
  const {
    keycloak: { idTokenParsed },
  } = useKeycloak();
  const { data: species, isLoading: isLoadingSpacies, error: errorSpecies } = useQuery('species', getSpecies);
  const { data: breeds, isLoading: isLoadingBreeds, error: errorBreeds } = useQuery('breeds', getBreeds);
  const [getUserDetails, { isError: errorGetUserDetails, isFetching: isFetchingUserDetails, isLoading: isLoadingUserDetails, data: userDetails }] =
    useLazyGetUserDetailsByIdQuery();

  const isLoading = isLoadingSpacies || isLoadingBreeds || isLoadingUserDetails || isFetchingUserDetails;

  const [petName, setPetName] = useState('');
  const [specie, setSpecie] = useState<null | number>(null);
  const [breed, setBreed] = useState<null | number>(null);
  const [images, setImages] = useState<{ id: number; value: File | null }[]>([{ id: 0, value: null }]);
  const [description, setDescription] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredBreeds = useMemo(() => {
    if (!breeds) return [];
    return breeds.filter((b) => b.species.id === specie);
  }, [breed, specie, breeds, species]);

  useEffect(() => {
    if (errorSpecies) console.log({ errorSpecies });
    if (errorBreeds) console.log({ errorBreeds });
    if (errorGetUserDetails) console.log({ errorGetUserDetails });
  }, [errorSpecies, errorBreeds, errorGetUserDetails]);

  useEffect(() => {
    if (idTokenParsed?.sub) {
      getUserDetails({ userId: idTokenParsed.sub });
    }
  }, [idTokenParsed]);

  const disableSubmit = useMemo(() => {
    return !petName || !specie || !breed || !images.length || !description;
  }, [petName, specie, breed, images, description]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <main>
      <header className='w-full'>
        <img src={qrBannerImage} alt='dog with cat' className='w-full' />
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
          className='flex flex-col w-full gap-10 lg:flex-row'
        >
          <section className='relative flex flex-col w-full gap-5 p-10 lg:w-1/2'>
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
                    setImages([...images]);
                  }}
                  onRemove={() => {
                    setImages([{ id: 0, value: null }]);
                  }}
                />
              ))}
            </div>
            <div className='relative focus-within:text-primary'>
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
            <div className='relative hidden w-full h-28 lg:block'>
              <div className='absolute left-0 w-full bottom-10'>
                <img src={qrPawsImage} alt='huellas' />
              </div>
            </div>
          </section>
          <section className='w-full lg:pr-10 lg:w-1/2'>
            <div className='flex justify-center p-5 '>
              {!!images[currentImageIndex].value && (
                <img src={URL.createObjectURL(images[currentImageIndex].value as File)} className='object-cover w-full rounded-lg h-96' />
              )}
            </div>
            {images.length > 2 && (
              <div className='flex justify-center mt-2 space-x-4'>
                <button className={cn({ 'opacity-40': currentImageIndex === 0 })}>
                  <IconChevronLeft
                    onClick={() => {
                      if (currentImageIndex > 0) handlePrevImage();
                    }}
                  />
                </button>
                <button className={cn({ 'opacity-40': currentImageIndex === images.length - 2 })}>
                  <IconChevronRight
                    onClick={() => {
                      if (currentImageIndex < images.length - 2) handleNextImage();
                    }}
                  />
                </button>
              </div>
            )}
            <article className='flex flex-col gap-3 rounded-t-3xl bg-primary p-9'>
              <Title variant='h2'>{petName}</Title>
              <div className='flex justify-between'>
                <TextDetail size='xs' weight='regular'>
                  {species?.find((b) => b.id === specie)?.name ?? ''}
                </TextDetail>
                <TextDetail size='xs' weight='regular'>
                  {dateFormatter(new Date().toISOString(), 'YYYY-MM-DD', 'DD MMM YYYY')}
                </TextDetail>
              </div>
              <TextDetail size='xs' weight='regular' className='break-words'>
                {description}
              </TextDetail>
              {!!idTokenParsed && !!userDetails && (
                <div className='flex flex-col justify-around gap-4'>
                  <div className='flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg'>
                    <IconUser className='w-7 h-7 min-w-[28px] min-h-[28px]' />
                    <TextDetail size='xs' weight='regular' className='text-center'>
                      {idTokenParsed.name}
                    </TextDetail>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg'>
                    <IconAt className='w-7 h-7 min-w-[28px] min-h-[28px]' />
                    <TextDetail size='xs' weight='regular' className='text-center'>
                      {idTokenParsed.email}
                    </TextDetail>
                  </div>
                  <div className='flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg'>
                    <IconPhone className='w-7 h-7 min-w-[28px] min-h-[28px]' />
                    <TextDetail size='xs' weight='regular' className='text-center'>
                      {userDetails.cellphone}
                    </TextDetail>
                  </div>
                </div>
              )}
            </article>
          </section>
        </form>
      )}
    </main>
  );
};

export default QrGenerator;
