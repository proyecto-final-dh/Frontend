import QrImage from './lib/qr';
import Title from '../Title';
import Button from '../Botones/Button';
import { IconX } from '@tabler/icons-react';

interface QrModalProps {
  closeModal: () => void;
}

const QrModal = ({ closeModal }: QrModalProps) => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 z-[10] flex justify-center items-center bg-primary/80'>
      <section className='flex flex-col justify-center w-10/12 h-5/6 lg:w-6/12 bg-white rounded-3xl p-4 lg:p-8 relative'>
        <IconX onClick={closeModal} className='text-orange-dark absolute top-4 right-4' />
        <Title variant='h2' className='text-center font-bold text-[22px] lg:text-[28px]'>
          Tu QR ha sido generado exitosamente
        </Title>
        <div className='flex justify-center'>
          <img src={QrImage} alt='qr image' className='md:max-w-[300px] lg:max-w-[350px]' />
        </div>
        <div className='flex justify-center gap-4 lg:gap-8'>
          <Button label={'Descargar'} variant='primary' />
          <Button label={'Imprimir'} variant='secundary' />
        </div>
      </section>
    </div>
  );
};

export default QrModal;
