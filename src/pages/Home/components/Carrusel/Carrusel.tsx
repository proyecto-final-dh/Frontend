import React from 'react';
import MuiCard from '../../../../components/Card/MuiCards';
import { Pet } from '../../../../contracts/pet';
import styles from './carrousel.module.css';

import cn from 'classnames';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface CarouselProps {
  pets: Pet[];
  disableNext: boolean;
  disablePrev: boolean;
  onNext: () => void;
  onPrev: () => void;
}

const Carrusel: React.FC<CarouselProps> = ({ pets, disableNext, disablePrev, onNext, onPrev }) => {
  return (
    <div className={styles.carrusel_container}>
      <div className={styles.carrusel}>
        {pets.map((pet) => (
          <MuiCard key={pet.id} pet={pet} />
        ))}
      </div>
      <div className={styles.arrow_container}>
        <IconChevronLeft
          className={cn('w-10 h-10 min-w-[40px] min-h-[40px]', styles.left_arrow, {
            [styles['desable']]: disablePrev,
          })}
          onClick={() => {
            if (disablePrev) return;
            onPrev();
          }}
        />

        <IconChevronRight
          className={cn('w-10 h-10 min-w-[40px] min-h-[40px]', styles.right_arrow, {
            [styles['desable']]: disableNext,
          })}
          onClick={() => {
            if (disableNext) return;
            onNext();
          }}
        />
      </div>
    </div>
  );
};

export default Carrusel;
