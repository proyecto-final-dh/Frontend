import { HeroBanner, Title } from '../../components';
import dog from './../../assets/dog-glasses1.png';
import RelatedPets from './components/RelatedPets';
import { relatedPets } from '../../data/relatedPets';
import { Box } from '@mui/material';

const PetDetail = () => {
  return (
    <div className='col-span-full'>
      <Box>
        {/*  componente de detalle de mascota JESS */}
        {/* Banner con frase inspiradora JESYN  */}
        <HeroBanner leftImage={dog} leftAlt='dog-whith-glasses'>
          <Title variant='h2' className='font-bold text-center text-black'>
            Adoptar una mascota es como añadir un capítulo de amor y risas a tu vida. Invita a otros a descubrir su compañero perfecto en nuestra página.
            <span className='text-white'>❤️🏡 #AdoptaNoCompres</span>
          </Title>
        </HeroBanner>
        {/* mascotas de interes JESYN */}
        <RelatedPets pets={relatedPets} />
      </Box>
    </div>
  );
};

export default PetDetail;
