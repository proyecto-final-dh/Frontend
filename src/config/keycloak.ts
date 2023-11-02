import Keycloak from 'keycloak-js';
import { TRoles } from './roles';

export type TClients = 'fe-resqpet';

const getKcConfig = (): import('keycloak-js').KeycloakConfig => {
  return {
    url: 'http://localhost:8080',
    realm: 'kc-resqpet-auth',
    clientId: 'fe-resqpet',
  };
};

const kc = new Keycloak(getKcConfig());

export default kc as Omit<Keycloak, 'hasResourceRole'> & {
  hasResourceRole: (role: TRoles) => boolean;
};
