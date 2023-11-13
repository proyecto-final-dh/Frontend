import { ComponentType, FC, useEffect, useState } from 'react';
import useAuthProvider from './useAuthProvider';
import { getUserDetailsByKcId } from '../services/user-details.service';
import { useNavigate } from 'react-router-dom';

function withKeycloakAuth<T extends Record<string, unknown>>(Component: ComponentType<T>): FC<T> {
  const WrappedComponent: FC<T> = (props: T) => {
    const { keycloak, initialized, loader: Loader } = useAuthProvider();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const checkAuthentication = async () => {
        if (!keycloak.authenticated && initialized) {
          keycloak.login();
        }
        if (keycloak.subject) {
          try {
            setLoading(true);
            await getUserDetailsByKcId(keycloak.subject);
            setLoading(false);
          } catch (error) {
            if ((error as { response: { status: number } }).response.status === 404) {
              navigate('/register');
            } else {
              console.log({ error });
            }
            setLoading(false);
          }
        }
      };

      checkAuthentication();
    }, [keycloak, initialized]);

    if (!initialized || !keycloak.authenticated || loading) {
      return <Loader show />;
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withKeycloakAuth(${Component.displayName ?? Component.name ?? 'Component'})`;

  return WrappedComponent;
}

export default withKeycloakAuth;
