import QrSteps from './components/QrSteps/QrSteps';
import { MainBanner, Title } from '../../components';
import imgBanner from '../../assets/banner-init.png';
import { Box } from '@mui/material';
import Banner from './components/Banner/Banner';
import Carrusel from './components/Carrusel/Carrusel';
import { petData } from '../../data/petData';

const Home = () => {
  return (
    <div className='bg-white col-span-full'>
      <Box>
        <MainBanner images={imgBanner} />
        <QrSteps />
        <Banner />
        <Title variant='h1' className='mt-10 mb-5 font-bold text-center'>
          ADOPCIONES
        </Title>
        <Carrusel pets={petData} />
      </Box>
    </div>
  );
};

export default Home;
