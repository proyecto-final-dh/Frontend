import { withKeycloakAuth } from '../../config';

const PetsInAdoption = () => {
  return <div>PetsInAdoption</div>;
};

export default withKeycloakAuth(PetsInAdoption);
