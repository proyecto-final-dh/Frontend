import { Pet } from '../../../contracts/pet';
import MuiCard from '../../../components/Card/MuiCards';
import { Title } from '../../../components';

interface RelatedPetslProps {
  pets: Pet[];
}

const RelatedPets = ({ pets }: RelatedPetslProps) => {
  return (
    <section className='flex flex-col justify-center items-center p-5'>
      <Title variant={'h2'} className='font-bold pb-5'>
        Otros peluditos esperando ser adoptados:
      </Title>
      <article className='w-full flex flex-col justify-center lg:flex-row gap-20'>
        {pets.map((pet) => (
          <MuiCard key={pet.id} pet={pet} />
        ))}
      </article>
    </section>
  );
};

export default RelatedPets;
