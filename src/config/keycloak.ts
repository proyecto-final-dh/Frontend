import Keycloak from 'keycloak-js';
import { TRoles } from './roles';

export type TClients = 'fe-resqpet';

// TODO:
const getKcConfig = (): import('keycloak-js').KeycloakConfig => {
  return {
    url: 'https://34.229.216.23:8443/',
    realm: 'kc-resqpet-auth',
    clientId: 'fe-resqpet',
  };
};

const kc = new Keycloak(getKcConfig());

export default kc as Omit<Keycloak, 'hasResourceRole'> & {
  hasResourceRole: (role: TRoles) => boolean;
};
