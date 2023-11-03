import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState } from 'react';
import MuiCard from '../../../../components/Card/MuiCards';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Pet } from '../../../../contracts/pet';
import styles from './carrousel.module.css';
import { petData } from '../../../../data/petData';

import cn from 'classnames';
import useBreakpoint from '../../../../hooks/use-breakpoint';

interface CarouselProps {
  pets: Pet[];
}

const Carrusel: React.FC<CarouselProps> = ({ pets }) => {
  const { isLg } = useBreakpoint('lg');
  const itemsPerPage = isLg ? 3 : 1;
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = petData.length - 3;

  return (
    <div className={styles.carrusel_container}>
      <div className={styles.carrusel}>
        {pets.slice(currentIndex, currentIndex + itemsPerPage).map((pet) => (
          <MuiCard key={pet.id} pet={pet} />
        ))}
      </div>
      <div className={styles.arrow_container}>
        <ArrowBackIosIcon
          className={cn(styles.left_arrow, {
            [styles['desable']]: currentIndex <= 0,
          })}
          onClick={() => {
            if (currentIndex > 0) {
              prevSlide();
            }
          }}
          sx={{ fontSize: 40 }}
        />

        <ArrowForwardIosIcon
          className={cn(styles.right_arrow, {
            [styles['desable']]: currentIndex >= lastIndex,
          })}
          onClick={() => {
            if (currentIndex < lastIndex) {
              nextSlide();
            }
          }}
          sx={{ fontSize: 40 }}
        />
      </div>
    </div>
  );
};

export default Carrusel;
