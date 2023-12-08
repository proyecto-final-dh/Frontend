import { Loader, Title } from '../../components';
import { withKeycloakAuth } from '../../config';
import useBreakpoint from '../../hooks/use-breakpoint';
import { useGetInterestQuery } from '../../store/apis/resqpet.api';
import MyPetCard from '../YourAccount/components/MyPetCard';

const AdoptionRequests = () => {
  const { isLg } = useBreakpoint('lg');
  const { isFetching, isLoading, data } = useGetInterestQuery({});

  const _isLoading = isFetching || isLoading;

  return (
    <div className='w-full'>
      <Title className='m-4' variant={isLg ? 'h1' : 'h3'}>
        Mis Solicitudes de Adopción
      </Title>
      {_isLoading && <Loader opacity={60} />}
      {!isLoading && data && (
        <div className='flex flex-col gap-1'>
          {data.map((item) => {
            return (
              <MyPetCard
                key={item.pet.id}
                userEmail={item.owner_information.email}
                image={item.pet.images[0].url}
                altImage={item.pet.images[0].title}
                petName={item.pet.name}
                breed={item.pet.breed.name}
                species={item.pet.breed.species.name}
                userPhone={item.owner_information.cellphone}
                userName={`${item.owner_information.name} ${item.owner_information.lastname}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default withKeycloakAuth(AdoptionRequests);
