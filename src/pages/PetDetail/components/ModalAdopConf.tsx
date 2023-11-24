import React from 'react';
import { Pet } from '../../../contracts/pet';
import { IconX, IconMail, IconPhone, IconMapPin, IconHelpOctagonFilled } from '@tabler/icons-react';
import Title from '../../../components/Title';
interface ModalProps {
  pet: Pet;
  onClose: () => void;
}

const ModalAdopConf: React.FC<ModalProps> = ({ pet, onClose }) => {
  const icons = {
    email: <IconMail />,
    phone: <IconPhone />,
    location: <IconMapPin />,
    question: <IconHelpOctagonFilled className='w-[40px] h-[40px]' />,
  };
  return (
    <div className='fixed w-screen h-screen top-0 left-0 z-[30] flex justify-center items-center bg-primary/80'>
      <div className='flex flex-col rounded-3xl'>
        <section className='flex flex-col bg-orange-light p-8 h-22 relative rounded-t-2xl'>
          <IconX onClick={onClose} className='text-orange-dark absolute top-4 right-4' />
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            <div>{/* <img src={pet.image[0].url} alt={pet.image[0].alt} className='md:max-w-[200px] rounded-3xl lg:max-w-[250px] ' /> */}</div>
            <div className='flex justify-center items-center gap-5'>
              <h3 className='font-bold text-center text-h3'>{pet.name}</h3>
              <p>{`${pet.breed.species.name} | ${pet.gender} | ${pet.size}`}</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-5 pt-3'>
            <Title variant='h2' className='text-center font-bold text-[22px] lg:text-[28px]'>
              ¿Deseas adoptarlo(a)?
            </Title>
            <IconHelpOctagonFilled className='w-[40px] h-[40px]' />
          </div>
        </section>

        <section className=' bg-white rounded-b-2xl'>
          <div className='p-8'>
            <p>
              Para adoptar esta adorable mascota o para saber más sobre el/ella entra en contacto con su protector:{' '}
              {<span className='font-bold '>Jessica Ortiz</span>}{' '}
            </p>
          </div>
          <ul className='flex flex-col lg:justify-around lg:flex-row gap-4 p-8'>
            <li className='flex items-center'>
              {icons.email} <span className='ml-2'>jessi@gmail.com</span>
            </li>
            <li className='flex items-center'>
              {icons.phone} <span className='ml-2'>{pet.userDetails.cellphone}</span>
            </li>
            <li className='flex items-center'>
              {icons.location} <span className='ml-2'>{`${pet.userDetails.location.city}-${pet.userDetails.location.country}`}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ModalAdopConf;
