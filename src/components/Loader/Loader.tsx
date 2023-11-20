import Paw from './Paw';
import cn from 'classnames';

type LoaderProps = {
  opacity?: 0 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 100;
};

const Loader = ({ opacity = 0 }: LoaderProps) => {
  const opacityClass = {
    0: 'bg-white',
    10: 'bg-white/10',
    20: 'bg-white/20',
    25: 'bg-white/25',
    30: 'bg-white/30',
    40: 'bg-white/40',
    50: 'bg-white/50',
    60: 'bg-white/60',
    70: 'bg-white/70',
    75: 'bg-white/75',
    80: 'bg-white/80',
    90: 'bg-white/90',
    100: 'bg-white/100',
  }[opacity];

  return (
    <div className={cn('fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center w-screen h-screen', opacityClass)}>
      <div className='w-full h-full max-w-[200px] max-h-[200px]'>
        <Paw />
      </div>
    </div>
  );
};

export default Loader;
