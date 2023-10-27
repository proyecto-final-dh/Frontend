import React from 'react';
import QrSteps from './components/QrSteps/QrSteps';
import { MainBanner } from '../../components';
import imgBanner from '../../assets/banner-init.png';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Box sx={{ marginTop: '85px' }}>
        {/* layout con navbar y footer jesyn*/}
        {/* imagen principal junior */}
        <MainBanner images={imgBanner} />
        {/* pasos para creacion de QR junior*/}
        <QrSteps />
        {/* banner info QR jess */}
        {/* carrousel con card de mascotas jess */}
      </Box>
    </div>
  );
};

export default Home;
