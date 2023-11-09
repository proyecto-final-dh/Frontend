import React from 'react';
// import CardDetail from './components/CardDetail';
import CardDetailPet from './components/CardDetailPet';
import { petData } from '../../data/petData';
import 'tailwindcss/tailwind.css';
import { useParams } from 'react-router-dom';

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
      {/* mascotas de interes JESYN */}
    </div>
  );
};

export default PetDetail;
