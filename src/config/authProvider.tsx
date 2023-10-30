import { ReactNode } from 'react';
import AuthContext, { TContext } from './keycloakContext';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import kcClient from './keycloak';

export type AuthProviderProps = {
  children: ReactNode;
  loader: TContext['loader'];
};

const AuthProvider = ({ children, loader }: AuthProviderProps): JSX.Element => {
  return (
    <ReactKeycloakProvider authClient={kcClient}>
      <AuthContext loader={loader}>{children}</AuthContext>
    </ReactKeycloakProvider>
  );
};

export default AuthProvider;
