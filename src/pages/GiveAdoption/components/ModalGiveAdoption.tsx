import React from 'react';
import { Pet } from '../../../contracts/pet';
import Title from '../../../components/Title';
import { IconX, IconCircleCheckFilled } from '@tabler/icons-react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  petName: string;
  specie: string;
  gender: string;
  size: string;
}

const ModalGiveAdoption: React.FC<CustomModalProps> = ({ isOpen, onClose, petName, specie, gender, size }) => {
  return (
    <>
      {isOpen && (
        <div className='fixed w-screen h-screen top-0 left-0 z-[30] flex justify-center items-center bg-primary/80'>
          <div className='flex flex-col rounded-4xl'>
            <section className='flex flex-col bg-orange-light p-8 h-22 relative rounded-2xl'>
              <IconX onClick={onClose} className='text-orange-dark absolute top-4 right-4' />
              <div className='flex flex-col lg:flex-row items-center gap-8'>
                <div>{/* <img src={pet.image[0].url} alt={pet.image[0].alt} className='md:max-w-[200px] rounded-3xl lg:max-w-[250px] ' /> */}</div>
                <div className='flex justify-center items-center gap-5'>
                  <h3 className='font-bold text-center text-h3'>{petName}</h3>
                  <p>{`${specie} | ${gender} | ${size}`}</p>
                </div>
              </div>
              <div className='flex items-center justify-center gap-5 pt-3'>
                <Title variant='h2' className='text-center font-bold text-[22px] lg:text-[28px]'>
                  Se ha cargado la mascota exitosamente!
                </Title>
                <IconCircleCheckFilled className='w-[40px] h-[40px]' />
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalGiveAdoption;
