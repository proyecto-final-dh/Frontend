import { FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize } from '@mui/material';
import { DragAndDrop, Loader, TextDetail, Title } from '../../components';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import { IconAt, IconPhone, IconQuestionMark, IconUser } from '@tabler/icons-react';
import { dateFormatter } from '../../utils/dates';
import { useKeycloak } from '@react-keycloak/web';
import { useLazyGetUserDetailsByIdQuery } from '../../store/apis/resqpet.api';
import qrBannerImage from './../../assets/slider_adopcion.png';
import qrPawsImage from './../../assets/icons/huellas.svg';
import imageNotFoundMobile from './../../assets/qr-not-found-image-mobile.png';
import imageNotFoundDesktop from './../../assets/qr-not-found-image-desktop.png';
import cn from 'classnames';
import QrModal from '../../components/QrModal/QrModal';
import useBreakpoint from '../../hooks/use-breakpoint';
import { useTour } from '@reactour/tour';

const QrGenerator = () => {
  const {
    keycloak: { idTokenParsed },
  } = useKeycloak();
  const { setIsOpen, isOpen, currentStep } = useTour();
  const { isLg } = useBreakpoint('lg');
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

  const [qrModal, setQrModal] = useState(false);

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
    return !petName || !specie || !breed || !description;
  }, [petName, specie, breed, description]);

  return (
    <main>
      <header className='relative w-full'>
        <img src={qrBannerImage} alt='dog with cat' className='w-full' />
        <div
          className='fixed z-10 flex items-center justify-center w-10 h-10 p-4 bg-white border rounded-full cursor-pointer right-2 bottom-10 border-primary'
          onClick={() => setIsOpen(true)}
        >
          <IconQuestionMark className='w-10 h-10 min-w-[40px] min-h-[40px]' />
        </div>
      </header>
      {isLoading && <Loader opacity={60} />}
      <Title variant='h3' className='font-bold text-center p-5'>
        Genera un QR único para tu mascota
      </Title>
      <div id='qr-generator-7-step' className='w-0 h-0 ' />
      {!isLoading && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='flex flex-col w-full gap-10 lg:flex-row'
        >
          <section
            className={cn('relative flex flex-col w-full gap-5 p-10 lg:w-1/2', {
              'z-20 bg-white': isOpen && currentStep === 2,
            })}
            id='qr-generator-1-step'
          >
            <TextField
              label='Nombre de la Mascota*'
              variant='outlined'
              type='text'
              name='name'
              id='qr-generator-3-step'
              onChange={(e) => {
                setPetName(e.target.value);
              }}
              value={petName}
              className='w-full'
              placeholder='Nombre de la Mascota'
            />
            <div className='flex flex-col w-full gap-3 lg:flex-row' id='qr-generator-4-step'>
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
            <div className='relative flex flex-wrap justify-center gap-4 p-4 border rounded-lg border-mui-gray md:justify-start' id='qr-generator-5-step'>
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
            <div className='relative focus-within:text-primary' id='qr-generator-6-step'>
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
              className={cn('rounded-3xl bg-primary text-center py-3 w-full lg:max-w-[160px] mx-auto cursor-pointer', {
                'opacity-40': disableSubmit,
              })}
              type='submit'
              disabled={disableSubmit}
              onClick={() => setQrModal(true)}
            >
              <TextDetail size='s' weight='bold'>
                Generar QR
              </TextDetail>
            </button>
            {qrModal && <QrModal closeModal={() => setQrModal(false)} />}
            <div className='relative hidden w-full h-28 lg:block'>
              <div className='left-0 w-full bottom-10'>
                <img src={qrPawsImage} alt='huellas' />
              </div>
            </div>
          </section>
          <section className='w-full lg:p-10 lg:w-1/2' id='qr-generator-2-step'>
            <div className='flex justify-center bg-mid-gray rounded-lg'>
              {!images[0].value && (
                <>
                  {isLg && <img src={imageNotFoundDesktop} className='object-contain w-full rounded-lg h-96' />}
                  {!isLg && <img src={imageNotFoundMobile} className='object-contain w-full rounded-lg h-96' />}
                </>
              )}
              {!!images[0].value && <img src={URL.createObjectURL(images[0].value)} className='object-cover w-full rounded-lg h-96' />}
            </div>
            <article className='flex flex-col gap-3 rounded-t-3xl bg-primary p-9 relative z-2 -mt-6'>
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
              <TextDetail size='xs' weight='regular' className='break-words'>
                Por favor contactarse con su protector para que <strong>{petName}</strong> vuelva con su familia:
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
