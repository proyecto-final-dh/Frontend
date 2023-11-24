import React from 'react';
import Title from '../Title';
import TextDetail from '../TextDetail';

const TermsAndConditions = () => {
  return (
    <div className='p-10 gap-2'>
      <Title variant='h2' className='text-center font-bold text-[22px] lg:text-[28px] pb-10 '>
        Términos y Condiciones para la Adopción Responsable de Mascotas
      </Title>
      <ul>
        <li className='list-disc font-bold'>Divulgación de Información de Contacto: </li>
        <TextDetail size='xs' weight='regular'>
          El anunciante reconoce y acepta que al publicar una mascota en adopción, su información de contacto será compartida con personas interesadas en la
          adopción. Se recomienda ejercer precaución al compartir datos personales y evaluar cuidadosamente a posibles adoptantes
        </TextDetail>

        <li className='list-disc pt-5 font-bold'>Responsabilidad de la Entrega: </li>
        <TextDetail size='xs' weight='regular' className='pb-5'>
          Quien publica la mascota en adopción comprende y acepta que la gestión de entrega de la mascota es de su entera responsabilidad. La plataforma no se
          hace responsable de los acuerdos o desacuerdos relacionados con la entrega y condiciones de adopción.
        </TextDetail>

        <li className='list-disc pt-5 font-bold'>Sin Intercambio Económico: </li>
        <TextDetail size='xs' weight='regular'>
          Se establece de manera explícita que no se acepta ningún tipo de intercambio económico por la adopción de mascotas a través de esta plataforma. La
          adopción debe basarse en el deseo de proporcionar un hogar amoroso y responsable a la mascota.
        </TextDetail>

        <li className='list-disc pt-5 font-bold'>Veracidad de la Información: </li>
        <TextDetail size='xs' weight='regular'>
          La persona que publica la mascota en adopción declara que la información proporcionada es veraz y precisa. Cualquier discrepancia en la información
          puede resultar en la retirada del anuncio y la prohibición de futuras publicaciones.
        </TextDetail>

        <li className='list-disc pt-5 font-bold'>Aprobación del Nuevo Hogar: </li>
        <TextDetail size='xs' weight='regular'>
          La persona que publica la mascota en adopción tiene el derecho y la responsabilidad de evaluar y aprobar el nuevo hogar propuesto para la mascota.
          Esto implica garantizar que el adoptante tenga las condiciones y disposición adecuadas para cuidar adecuadamente del animal.
        </TextDetail>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
