import Logo from '../Logo';
import TextDetail from '../TextDetail';
import coffeeIcon from '../../assets/icons/coffee.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-5 py-1 bg-black justify-evenly px-7 lg:flex-row'>
      <Logo width={135} height={70} variant='whiteH' />
      <TextDetail size='xs' weight='bold' className='text-center text-white'>
        © 2023 - Proyecto final Digital House- Todos los derechos reservados resqpet.com.ar
      </TextDetail>
      <div className='flex items-center justify-center gap-12'>
        <a href='https://instagram.com/resqpet?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr' target='_blank' rel='noreferrer' className='cursor-pointer'>
          <img src={instagramIcon} alt='instagram-icon' />
        </a>
        {/* <img src={whatsappIcon} alt='whatsapp-icon' /> */}
        <a href='https://cafecito.app/resqpet' target='_blank' rel='noreferrer' className='cursor-pointer'>
          <img src={coffeeIcon} alt='coffee-icon' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
