import { Loader } from '../../components';
import { withKeycloakAuth } from '../../config';
import { useGetInterestQuery } from '../../store/apis/resqpet.api';
// import MyPetCard from '../YourAccount/components/MyPetCard';

const AdoptionRequests = () => {
  const { isFetching, isLoading, data } = useGetInterestQuery({});

  console.log({ data });

  const _isLoading = isFetching || isLoading;
  return (
    <div className='w-full'>
      {_isLoading && <Loader opacity={60} />}
      {!isLoading && data && (
        <>
          {/* {data.map((item) => {
            return <MyPetCard key={item.pet_id} userEmail={item.owner_information.email} image={item.owner_information.} altImage={''} petName={''} breed={''} species={''} />;
          })} */}
        </>
      )}
    </div>
  );
};

export default withKeycloakAuth(AdoptionRequests);
