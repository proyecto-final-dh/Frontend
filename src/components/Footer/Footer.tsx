import Logo from '../Logo';
import TextDetail from '../TextDetail';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center py-1 bg-black justify-evenly px-7 lg:flex-row'>
      <Logo width={135} height={70} variant='whiteH' />
      <TextDetail size='xs' weight='bold' className='text-center text-white'>
        © 2023 - Proyecto final Digital House- Todos los drechos reservados resqpet.com.ar
      </TextDetail>
    </footer>
  );
};

export default Footer;
