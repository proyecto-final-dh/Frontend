import React from 'react';
import { register } from 'swiper/element/bundle';

import Banner from '../../components/Banner/Banner';
import Carrusel from '../../components/Carrusel/Carrusel';
import { petData } from '../../data/petData';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  return (
    <div>
      {/* layout con navbar y footer jesyn*/}
      {/* imagen principal junior */}
      {/* pasos para creacion de QR junior*/}
      {/* banner info QR jess */}
      <Banner />

      {/* carrousel con card de mascotas jess */}
      <Carrusel pets={petData} />
    </div>
  );
};

export default Home;
