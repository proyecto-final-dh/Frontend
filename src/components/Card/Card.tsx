import cn from 'classnames';
import Title from '../Title';
import TextDetail from '../TextDetail';
import styles from './Card.module.css';

type CardProps = {
  id: string;
  className?: string;
  img: string;
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
  variant: 's' | 'm';
};

const Card = ({ id, className, buttonLabel, description, img, onClick, title, variant }: CardProps) => {
  const imgClasses = { m: 'max-w-[324px] max-h-[219px]', s: 'max-w-[190px] max-h-[107px]' }[variant];
  const containerClasses = { m: 'max-w-[360px]', s: 'max-w-[240px]' }[variant];
  return (
    <figure id={id} className={cn(className, containerClasses, 'bg-primary flex flex-col gap-4 p-6 rounded-3xl justify-center items-center')}>
      <img src={img} alt={title} className={cn('w-full h-full rounded-3xl', imgClasses)} />
      <Title variant='h2'>{title}</Title>
      <TextDetail size='xs' weight='bold' className={styles.description}>
        {description}
      </TextDetail>
      <button className='px-8 py-3 font-bold bg-white rounded-3xl' onClick={onClick}>
        {buttonLabel}
      </button>
    </figure>
  );
};

export default Card;
