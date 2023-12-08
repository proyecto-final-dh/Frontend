import cn from 'classnames';

type TextDetailProps = {
  children: React.ReactNode;
  size: 'xs' | 's' | 'xl' | 'xxl';
  weight: 'regular' | 'medium' | 'bold';
  className?: string;
};

const TextDetail = ({ children, size, weight, className }: TextDetailProps) => {
  const sizeClass = {
    xs: 'text-detail-xs',
    s: 'text-detail-s',
    xl: 'text-[26px]',
    xxl: 'text-[36px]',
  }[size];

  const weightClass = {
    regular: 'font-regular',
    medium: 'font-medium',
    bold: 'font-bold',
  }[weight];

  const getProps = () => ({
    className: cn(sizeClass, weightClass, className),
    children,
  });

  return <span {...getProps()} />;
};

export default TextDetail;
