import QrSteps from './components/QrSteps/QrSteps';
import { MainBanner } from '../../components';
import imgBanner from '../../assets/banner-init.png';
import { Box } from '@mui/material';
import Banner from './components/Banner/Banner';
import Carrusel from './components/Carrusel/Carrusel';
import { petData } from '../../data/petData';

const Home = () => {
  return (
    <div className='col-span-full'>
      <Box>
        <MainBanner images={imgBanner} />
        <QrSteps />
        <Banner />
        <Carrusel pets={petData} />
      </Box>
    </div>
  );
};

export default Home;
