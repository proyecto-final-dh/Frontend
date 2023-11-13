import { ComponentType, FC } from 'react';
import { useAuthProvider } from '../config';

function withKcContext<T extends Record<string, unknown>>(Component: ComponentType<T>): FC<T> {
  const WrappedComponent: FC<T> = (props: T) => {
    const { initialized, loader: Loader } = useAuthProvider();

    if (!initialized) {
      return <Loader show />;
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withKcContext(${Component.displayName ?? Component.name ?? 'Component'})`;

  return WrappedComponent;
}

export default withKcContext;
