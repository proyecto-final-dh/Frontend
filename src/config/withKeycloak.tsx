import React, { ComponentType, FC, useEffect } from 'react';
import useAuthProvider from './useAuthProvider';

function withKeycloak<T extends Record<string, unknown>>(Component: ComponentType<T>): FC<T> {
  const WrappedComponent: FC<T> = (props: T) => {
    const { keycloak, initialized, loader: Loader } = useAuthProvider();

    useEffect(() => {
      if (!keycloak.authenticated && initialized) {
        keycloak.login();
      }
    }, [keycloak, initialized]);

    if (!initialized || !keycloak.authenticated) {
      return <Loader show />;
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withKeycloak(${Component.displayName ?? Component.name ?? 'Component'})`;

  return WrappedComponent;
}

export default withKeycloak;
