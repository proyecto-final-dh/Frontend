import { useContext } from 'react';
import { context, TContext } from './keycloakContext';

const useAuthContext = (): TContext => {
  return useContext(context);
};

export default useAuthContext;
