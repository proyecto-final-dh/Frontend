import { Loader } from '../../components';
import { withKeycloakAuth } from '../../config';
import { useGetInterestQuery } from '../../store/apis/resqpet.api';
import MyPetCard from '../YourAccount/components/MyPetCard';

const AdoptionRequests = () => {
  const { isFetching, isLoading, data } = useGetInterestQuery({});

  const _isLoading = isFetching || isLoading;

  return (
    <div className='w-full'>
      {_isLoading && <Loader opacity={60} />}
      {!isLoading && data && (
        <>
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
        </>
      )}
    </div>
  );
};

export default withKeycloakAuth(AdoptionRequests);
