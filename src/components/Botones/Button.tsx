import cn from 'classnames';

type buttonProps = {
  label: string;
  variant: 'primary' | 'secundary' | 'transparent' | 'card';
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({ label, variant, className, onClick }: buttonProps) => {
  const variants = {
    primary: 'bg-primary border-primary text-black',
    secundary: ' bg-orange-dark border-orange-dark text-white',
    transparent: 'bg-transparent border-orange-dark text-black',
    card: 'bg-white border-white text-black',
  }[variant];

  return (
    <button onClick={onClick} className={cn('rounded-3xl border-2 text-[16px] font-bold px-4', variants, className)}>
      {label}
    </button>
  );
};

export default Button;
