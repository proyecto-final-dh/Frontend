import React, { useMemo } from 'react';
// import CardDetail from './components/CardDetail';
import CardDetailPet from './components/CardDetailPet';
import { petData } from '../../data/petData';
import 'tailwindcss/tailwind.css';
import { useParams } from 'react-router-dom';
import { HeroBanner, Table, TextDetail, Title } from '../../components';
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

  const rows = useMemo(() => {
    if (!data) return [];
    return [
      { key: 'Raza', value: data.breed.name },
      { key: 'Tamaño', value: data.size },
      { key: 'Género', value: data.gender },
      { key: 'Localización', value: `${data.userDetails.location.city}-${data.userDetails.location.country}` },
    ];
  }, [data]);

  const headers = useMemo(() => {
    if (!data) return [];
    return [
      { ref: 'key', label: 'Especie' },
      { ref: 'value', label: data.breed.species.name },
    ];
  }, [data]);

  return (
    <div className='col-span-full'>
      {/*  componente de detalle de mascota JESS */}
      {/* <CardDetail pets={petData} /> */}
      <div className='flex flex-col w-full lg:flex-row'>
        <div className='w-1/2'>
          <CardDetailPet key={selectedPet.id} pet={selectedPet} />
        </div>

        {data && (
          <article className='w-1/2 pr-4 mt-4'>
            <Title variant='h1' className='mb-6 font-bold'>
              {data.name}
            </Title>
            <TextDetail size='s' weight='regular'>
              {data.description}
            </TextDetail>
            <div className='max-w-xs mx-auto mt-10 lg:max-w-full'>
              <Table headers={headers} data={rows} />
            </div>
            <button className='w-full p-6 my-10 font-bold bg-primary rounded-3xl lg:max-w-[153px] lg:p-3 float-right'>Adoptar</button>
          </article>
        )}
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
