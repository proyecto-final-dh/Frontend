import { ComponentType, createContext, ReactNode, useMemo } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import type Keycloak from 'keycloak-js';
import keycloak from './keycloak';

export type TContext = {
  initialized: boolean;
  keycloak: Keycloak;
  loader: ComponentType<{ show: boolean }>;
};

export const context = createContext<TContext>({
  initialized: false,
  keycloak,
  loader: () => null,
});

export type KeycloakContextProps = {
  children: ReactNode;
  loader: ComponentType<{ show: boolean }>;
};

const KeycloakContext = ({ children, loader }: KeycloakContextProps): JSX.Element => {
  const kc = useKeycloak();
  const contextValue = useMemo(() => ({ ...kc, loader }), [kc, loader]);
  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default KeycloakContext;
