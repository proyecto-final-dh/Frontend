import { useMediaQuery } from 'react-responsive';

import { theme } from './tailwind.config';

const breakpoints = theme.screens as {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type BreakpointKey = keyof typeof breakpoints;

function useBreakpoint<K extends BreakpointKey>(breakpointKey: K): Record<`is${Capitalize<K>}`, boolean> {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });
  const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  type Key = `is${Capitalize<K>}`;
  return {
    [`is${capitalizedKey}`]: bool,
  } as Record<Key, boolean>;
}

export default useBreakpoint;
