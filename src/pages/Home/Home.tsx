import QrSteps from './components/QrSteps/QrSteps';
import { Loader, MainBanner, Title } from '../../components';
import imgBanner from '../../assets/banner-init.png';
import { Box } from '@mui/material';
import Carrusel from './components/Carrusel/Carrusel';
import HeroBanner from '../../components/Banner/HeroBanner';
import qr from '../../../src/assets/qr-code-movil.png';
import dog1 from '../../../src/assets/dog-glasses1.png';
import { useLazyGetPetsQuery } from '../../store/apis/resqpet.api';
import { useEffect, useState } from 'react';
import { EN_ADOPCION, PetStatusesTypes } from '../../constants/pet-statuses.constants';
import useBreakpoint from '../../hooks/use-breakpoint';

const Home = () => {
  const { isLg } = useBreakpoint('lg');
  const [getPets, { isFetching: isFetchingPets, isLoading: isLoadingPets, data: pets }] = useLazyGetPetsQuery();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filters = {
      status: EN_ADOPCION as PetStatusesTypes,
      size: isLg ? 3 : 1,
      page: currentPage - 1,
    };
    getPets({ queryParams: filters });
  }, [currentPage, isLg]);

  const onPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const isLoading = isLoadingPets || isFetchingPets;

  return (
    <div className='bg-white col-span-full'>
      <Box>
        <MainBanner images={imgBanner} />
        <QrSteps />
        <HeroBanner leftImage={dog1} leftAlt='dog-banner' rightImage={qr} rightAlt='Image-QR'>
          <Title variant='h2' className='font-bold text-center text-black'>
            <span>Todo esto</span>
            <span className='text-white'>sin instalar nada</span>, en un QR que podes agregar al collar de tu mascota.
          </Title>
        </HeroBanner>
        <Title variant='h1' className='mt-10 mb-5 font-bold text-center'>
          ADOPCIONES
        </Title>
        {isLoading ? (
          <Loader opacity={60} />
        ) : (
          <>
            {!!pets && <Carrusel pets={pets.content} disableNext={pets.pageable.isLast} disablePrev={pets.pageable.isFirst} onNext={onNext} onPrev={onPrev} />}
          </>
        )}
      </Box>
    </div>
  );
};

export default Home;
