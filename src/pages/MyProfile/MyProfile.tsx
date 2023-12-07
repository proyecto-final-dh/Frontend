import { useGetUserDetailsByIdQuery } from '../../store/apis/resqpet.api';
import { Loader, Title } from '../../components';
import ProfileCard from '../YourAccount/components/ProfileCard';
import { withKeycloakAuth } from '../../config';

const MyProfile = () => {
  const { isFetching, isLoading, data } = useGetUserDetailsByIdQuery({});

  const _isLoading = isFetching || isLoading;
  return (
    <div className='w-full'>
      <Title className='m-4' variant='h1'>
        Mi Perfil
      </Title>
      {_isLoading && <Loader opacity={60} />}
      {!isLoading && data && (
        <ProfileCard
          firstName={data.name}
          lastName={data.lastname}
          email={data.email}
          phone={data.cellphone}
          location={`${data.location.city}, ${data.location.country}`}
        />
      )}
    </div>
  );
};

export default withKeycloakAuth(MyProfile);
