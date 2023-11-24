import { Pet } from '../../../contracts/pet';
import MuiCard from '../../../components/Card/MuiCards';
import { Title } from '../../../components';

interface RelatedPetslProps {
  pets: Pet[];
}

const RelatedPets = ({ pets }: RelatedPetslProps) => {
  return (
    <section className='flex flex-col items-center justify-center p-5'>
      <Title variant={'h2'} className='pb-5 font-bold'>
        Otros peluditos esperando ser adoptados:
      </Title>
      <article className='flex flex-col items-center justify-center w-full gap-10 lg:flex-row lg:gap-20'>
        {pets.map((pet) => (
          <MuiCard key={pet.id} pet={pet} />
        ))}
      </article>
    </section>
  );
};

export default RelatedPets;
