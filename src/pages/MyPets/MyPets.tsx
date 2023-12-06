import { withKeycloakAuth } from '../../config';

const MyPets = () => {
  return <div>MyPets</div>;
};

export default withKeycloakAuth(MyPets);
