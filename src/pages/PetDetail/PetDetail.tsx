import React from 'react';
import CardDetailPet from './components/CardDetailPet';
import { petData } from '../../data/petData';
import { useParams } from 'react-router-dom';
import { HeroBanner, Title } from '../../components';
import dog from './../../assets/dog-glasses1.png';
import RelatedPets from './components/RelatedPets';
import { relatedPets } from '../../data/relatedPets';
import { useQuery } from 'react-query';
import { getPetById } from './services/pet.service';

const PetDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery('pet', () => getPetById(id as string));

  const selectedPet = petData.find((pet) => pet.id === Number(id));
  if (!selectedPet) {
    return <div>Mascota no encontrada</div>;
  }

  return (
    <div className='col-span-full'>
      <CardDetailPet key={selectedPet.id} pet={{ ...data, ...selectedPet }} />
      <HeroBanner leftImage={dog} leftAlt='dog-whith-glasses'>
        <Title variant='h2' className='font-bold text-center text-black'>
          Adoptar una mascota es como añadir un capítulo de amor y risas a tu vida. Invita a otros a descubrir su compañero perfecto en nuestra página.
          <span className='text-white'>❤️🏡 #AdoptaNoCompres</span>
        </Title>
      </HeroBanner>
      <RelatedPets pets={relatedPets} />
    </div>
  );
};

export default PetDetail;
