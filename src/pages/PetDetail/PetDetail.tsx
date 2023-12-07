import React, { useEffect, useState } from 'react';
import CardDetailPet from './components/CardDetailPet';
import { useParams } from 'react-router-dom';
import { HeroBanner, Loader, Title } from '../../components';
import dog from './../../assets/dog-glasses1.png';
import RelatedPets from './components/RelatedPets';
import { useQuery } from 'react-query';
import { getInterestPet, getPetById } from './services/pet.service';
import { useLazyGetPetRecommendationsQuery } from '../../store/apis/resqpet.api';

const PetDetail: React.FC = () => {
  const [getRelatedPets, { isFetching: isFetchingPets, isLoading: isLoadingPets, data: relatedPets }] = useLazyGetPetRecommendationsQuery();

  const { id } = useParams<{ id: string }>();
  const { data } = useQuery(['pet', id], () => getPetById(id as string));
  const { data: interest } = useQuery(['interest', id], () => getInterestPet());
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    if (!id) return;
    getRelatedPets({ petId: id, limit: '3' });
  }, [id]);

  useEffect(() => {
    const petInterest = interest?.data.find((pet) => pet.pet.id === Number(id));
    if (petInterest) setEnable(true);
  }, []);

  return (
    <div className='col-span-full'>
      {!!data && <CardDetailPet key={data.pet.id} data={data} interest={enable} />}
      <HeroBanner leftImage={dog} leftAlt='dog-whith-glasses'>
        <Title variant='h2' className='font-bold text-center text-black'>
          <span>
            Adoptar una mascota es como añadir un capítulo de amor y risas a tu vida. Invita a otros a descubrir su compañero perfecto en nuestra página.
          </span>
          <span className='text-white'>❤️🏡 #AdoptaNoCompres</span>
        </Title>
      </HeroBanner>
      {(isFetchingPets || isLoadingPets) && <Loader opacity={60} />}
      {!!relatedPets && <RelatedPets pets={relatedPets} />}
    </div>
  );
};

export default PetDetail;
