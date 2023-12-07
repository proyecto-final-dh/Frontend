import { Loader, Title } from '../../components';
import { withKeycloakAuth } from '../../config';
import { useGetMyPetsQuery } from '../../store/apis/resqpet.api';
import MyPetCard from '../YourAccount/components/MyPetCard';

const MyPets = () => {
  const { isFetching, isLoading, data } = useGetMyPetsQuery({});

  const _isLoading = isFetching || isLoading;

  return (
    <div className='w-full'>
      <Title className='m-4' variant='h1'>
        Mis Mascotas registradas
      </Title>
      {_isLoading && <Loader opacity={60} />}
      {!isLoading && data && (
        <div className='flex flex-col gap-1'>
          {data.map((item) => {
            return (
              <MyPetCard
                key={item.id}
                image={item.images?.[0]?.url ?? ''}
                altImage={item.images?.[0]?.title ?? ''}
                petName={item.name}
                breed={item.breed.name}
                species={item.breed.species.name}
                mainAction={() => console.log}
                mainActionLabel='Ver QR'
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default withKeycloakAuth(MyPets);
