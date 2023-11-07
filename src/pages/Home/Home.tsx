import QrSteps from './components/QrSteps/QrSteps';
import { MainBanner, Title } from '../../components';
import imgBanner from '../../assets/banner-init.png';
import { Box } from '@mui/material';
import Carrusel from './components/Carrusel/Carrusel';
import { petData } from '../../data/petData';
import HeroBanner from '../../components/Banner/HeroBanner';
import qr from '../../../src/assets/qr-code-movil.png';
import dog1 from '../../../src/assets/dog-glasses1.png';

const Home = () => {
  return (
    <div className='col-span-full'>
      <Box>
        <MainBanner images={imgBanner} />
        <QrSteps />
        <HeroBanner leftImage={dog1} leftAlt='dog-banner' rightImage={qr} rightAlt='Image-QR'>
          <Title variant='h2' className='font-bold text-center text-black'>
            Todo esto
            <span className='text-white'>sin instalar nada</span>, en un QR que podes agregar al collar de tu mascota.
          </Title>
        </HeroBanner>
        <Title variant='h1' className='mt-10 mb-5 font-bold text-center'>
          ADOPCIONES
        </Title>
        <Carrusel pets={petData} />
      </Box>
    </div>
  );
};

export default Home;
