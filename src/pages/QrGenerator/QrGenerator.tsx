import { FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize } from '@mui/material';
import { DragAndDrop, Loader, TextDetail, Title } from '../../components';
import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import { IconQuestionMark } from '@tabler/icons-react';
import { useKeycloak } from '@react-keycloak/web';
import { useCreatePetMutation, useLazyGetUserDetailsByIdQuery } from '../../store/apis/resqpet.api';
import qrBannerImage from './../../assets/slider_adopcion.png';
import qrPawsImage from './../../assets/icons/huellas.svg';
import cn from 'classnames';
import QrModal from '../../components/QrModal/QrModal';
import { useTour } from '@reactour/tour';
import { withKeycloakAuth } from '../../config';
import PetInfo from '../../components/PetInfo';

const QrGenerator = () => {
  const {
    keycloak: { idTokenParsed },
  } = useKeycloak();
  const { setIsOpen, isOpen, currentStep } = useTour();
  const { data: species, isLoading: isLoadingSpacies, error: errorSpecies } = useQuery('species', getSpecies);
  const { data: breeds, isLoading: isLoadingBreeds, error: errorBreeds } = useQuery('breeds', getBreeds);
  const [getUserDetails, { isError: errorGetUserDetails, isFetching: isFetchingUserDetails, isLoading: isLoadingUserDetails, data: userDetails }] =
    useLazyGetUserDetailsByIdQuery();
  const [createPet, { isError: errorCreatePet, isLoading: isLoadingCreatePet, data: createPetResponse, isSuccess }] = useCreatePetMutation();

  const isLoading = isLoadingSpacies || isLoadingBreeds || isLoadingUserDetails || isFetchingUserDetails || isLoadingCreatePet;

  const [petName, setPetName] = useState('');
  const [specie, setSpecie] = useState<null | number>(null);
  const [breed, setBreed] = useState<null | number>(null);
  const [images, setImages] = useState<{ id: number; value: File | null }[]>([{ id: 0, value: null }]);
  const [description, setDescription] = useState('');

  const [qrModal, setQrModal] = useState(false);
  const [qrUrl, setQrUrl] = useState('');

  const filteredBreeds = useMemo(() => {
    if (!breeds) return [];
    return breeds.filter((b) => b.species.id === specie);
  }, [breed, specie, breeds, species]);

  useEffect(() => {
    if (errorSpecies) console.log({ errorSpecies });
    if (errorBreeds) console.log({ errorBreeds });
    if (errorGetUserDetails) console.log({ errorGetUserDetails });
    if (errorCreatePet) console.log({ errorCreatePet });
  }, [errorSpecies, errorBreeds, errorGetUserDetails, errorCreatePet]);

  useEffect(() => {
    if (idTokenParsed?.sub) {
      getUserDetails({ userId: idTokenParsed.sub });
    }
  }, [idTokenParsed]);

  useEffect(() => {
    const image = document.getElementById('qr-image') as HTMLImageElement;
    if (!image) return;
    setQrUrl(`${location.origin}/qr/${createPetResponse?.id}`);
  }, [createPetResponse, qrModal]);

  useEffect(() => {
    if (isSuccess) setQrModal(true);
  }, [isSuccess]);

  const disableSubmit = useMemo(() => {
    return !petName || !specie || !breed || !description;
  }, [petName, specie, breed, description]);

  const onSubmit = () => {
    const form = new FormData();

    const petInfo = {
      name: `${petName}`,
      breed_id: `${breed}`,
      owner_id: userDetails?.id,
      description: `${description}`,
    };

    form.append(
      'post',
      new Blob([JSON.stringify(petInfo)], {
        type: 'application/json',
      }),
    );

    images.forEach((image) => {
      if (image.value) {
        form.append('image', image.value);
      }
    });

    createPet({ form });
  };

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
      <Title variant='h3' className='p-5 font-bold text-center' id='qr-generator-1-step'>
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
              onClick={onSubmit}
            >
              <TextDetail size='s' weight='bold'>
                Generar QR
              </TextDetail>
            </button>
            {qrModal && <QrModal url={qrUrl} closeModal={() => setQrModal(false)} />}
            <div className='relative hidden w-full h-28 lg:block'>
              <div className='left-0 w-full bottom-10'>
                <img src={qrPawsImage} alt='huellas' />
              </div>
            </div>
          </section>
          {idTokenParsed && userDetails && (
            <PetInfo
              petName={petName}
              specie={species?.find((b) => b.id === specie)?.name ?? ''}
              description={description}
              images={images.map((i) => ({ id: i.id, url: i.value ? URL.createObjectURL(i.value) : '', title: i.value?.name ?? '' }))}
              userName={idTokenParsed.name}
              userEmail={idTokenParsed.email}
              userPhone={userDetails.cellphone}
            />
          )}
        </form>
      )}
    </main>
  );
};

export default withKeycloakAuth(QrGenerator);
