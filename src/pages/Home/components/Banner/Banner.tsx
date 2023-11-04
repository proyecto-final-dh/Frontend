import qr from '../../../../assets/qr-code-movil.png';
import dog from '../../../../assets/dog-glasses.png';

import { Title } from '../../../../components';

const Banner = () => {
  return (
    <aside className='relative items-center pt-16 mt-5 overflow-hidden bg-orange lg:flex lg:pl-20 lg:py-14'>
      <img src={qr} alt='Image-QR' className='hidden lg:block max-w-[150px] max-h-[150px]' />
      <article className='relative z-10 px-20 lg:max-w-[400px] md:max-w-full lg:p-0'>
        <Title variant='h2' className='font-bold text-center text-black'>
          Todo esto <span className='text-white'>sin instalar nada</span>, en un QR que podes agregar al collar de tu mascota.
        </Title>
      </article>
      <img src={dog} alt='dog-banner' className='lg:max-w-[540px] lg:absolute right-0 top-0' />
    </aside>
  );
};

export default Banner;
