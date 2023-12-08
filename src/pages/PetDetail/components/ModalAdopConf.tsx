import React from 'react';
import { PetWithOwner } from '../../../contracts/pet';
import { IconX, IconMail, IconPhone, IconMapPin, IconHelpOctagonFilled } from '@tabler/icons-react';
import Title from '../../../components/Title';
import useBreakpoint from '../../../hooks/use-breakpoint';
interface ModalProps {
  data: PetWithOwner | undefined;
  pet: PetWithOwner;
  onClose: () => void;
}

const ModalAdopConf: React.FC<ModalProps> = ({ data, pet: { pet: innerPet }, onClose }) => {
  const { isLg } = useBreakpoint('lg');
  const icons = {
    email: <IconMail />,
    phone: <IconPhone />,
    location: <IconMapPin />,
    question: <IconHelpOctagonFilled className='w-[40px] h-[40px]' />,
  };
  return (
    <div className='fixed w-screen h-screen top-0 left-0 z-[30] flex justify-center items-center bg-primary/80'>
      <div className='flex flex-col rounded-3xl'>
        <section className='relative flex flex-col p-8 bg-orange-light h-22 rounded-t-2xl'>
          <IconX onClick={onClose} className='absolute text-orange-dark top-4 right-4' />
          {isLg && (
            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <div>
                <img src={innerPet.images[0].url} alt={innerPet.images[0].title} className='md:max-w-[200px] rounded-3xl lg:max-w-[250px] ' />
              </div>
              <div className='flex items-center justify-center gap-5'>
                <h3 className='font-bold text-center text-h3'>{innerPet.name}</h3>
                <p>{`${innerPet.breed.species.name} | ${innerPet.gender} | ${innerPet.size}`}</p>
              </div>
            </div>
          )}
          <div className='flex items-center justify-center gap-5 pt-3'>
            <Title variant='h2' className='text-center font-bold text-[22px] lg:text-[28px]'>
              ¿Deseas adoptarlo(a)?
            </Title>
            <IconHelpOctagonFilled className='w-[40px] h-[40px]' />
          </div>
        </section>

        <section className='bg-white rounded-b-2xl'>
          <div className='p-8'>
            <p>
              Para adoptar esta adorable mascota o para saber más sobre el/ella entra en contacto con su protector:{' '}
              {<span className='font-bold '>{data?.owner_information.name + ' ' + data?.owner_information.lastname}</span>}{' '}
            </p>
          </div>
          <ul className='flex flex-col gap-4 p-8 lg:justify-around lg:flex-row'>
            <li className='flex items-center'>
              {icons.email} <span className='ml-2'>{data?.owner_information.email}</span>
            </li>
            <li className='flex items-center'>
              {icons.phone} <span className='ml-2'>{data?.owner_information.cellphone}</span>
            </li>
            <li className='flex items-center'>
              {icons.location} <span className='ml-2'>{`${data?.owner_information.location.city}-${data?.owner_information.location.country}`}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ModalAdopConf;
