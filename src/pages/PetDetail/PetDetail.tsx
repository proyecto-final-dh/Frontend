import React from 'react';
// import CardDetail from './components/CardDetail';
import CardDetailPet from './components/CardDetailPet';
import { petData } from '../../data/petData';
import 'tailwindcss/tailwind.css';
import { useParams } from 'react-router-dom';
import { HeroBanner, Title } from '../../components';
import dog from './../../assets/dog-glasses1.png';
import RelatedPets from './components/RelatedPets';
import { relatedPets } from '../../data/relatedPets';

const PetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const selectedPet = petData.find((pet) => pet.id === Number(id));
  if (!selectedPet) {
    return <div>Mascota no encontrada</div>;
  }
  return (
    <div className='col-span-full'>
      {/*  componente de detalle de mascota JESS */}
      {/* <CardDetail pets={petData} /> */}
      <div className='container mx-auto my-8'>
        <CardDetailPet key={selectedPet.id} pet={selectedPet} />
      </div>
      {/* Banner con frase inspiradora JESYN  */}
      <HeroBanner leftImage={dog} leftAlt='dog-whith-glasses'>
        <Title variant='h2' className='font-bold text-center text-black'>
          Adoptar una mascota es como añadir un capítulo de amor y risas a tu vida. Invita a otros a descubrir su compañero perfecto en nuestra página.
          <span className='text-white'>❤️🏡 #AdoptaNoCompres</span>
        </Title>
      </HeroBanner>
      <RelatedPets pets={relatedPets} />
      {/* mascotas de interes JESYN */}
    </div>
  );
};

export default PetDetail;
