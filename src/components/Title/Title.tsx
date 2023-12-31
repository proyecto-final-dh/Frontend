import cn from 'classnames';

type TitleProps = {
  id?: string;
  variant: 'h1' | 'h2' | 'h3';
  className?: string;
  children: React.ReactNode;
};

const Title = ({ children, variant, className, id }: TitleProps) => {
  const getProps = (textClass: string) => {
    return {
      className: cn(className, textClass),
      children,
      id,
    };
  };

  const variants = {
    h1: <h1 {...getProps('text-h1')} />,
    h2: <h2 {...getProps('text-h2')} />,
    h3: <h2 {...getProps('text-h3')} />,
  };

  return variants[variant];
};

export default Title;
