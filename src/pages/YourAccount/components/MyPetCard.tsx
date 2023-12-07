import Button from '../../../components/Botones/Button';

export interface IMyPetCard {
  image: string;
  altImage: string;
  petName: string;
  breed: string;
  species: string;
  userName?: string;
  publishDate?: string;
  status?: string;
  userPhone?: string;
  adoptionDate?: string;
  userEmail?: string;
  mainAction?: () => void;
  mainActionLabel?: string;
}

const MyPetCard = ({
  image,
  altImage,
  petName,
  breed,
  species,
  userName,
  publishDate,
  status,
  adoptionDate,
  userEmail,
  mainAction,
  mainActionLabel,
  userPhone,
}: IMyPetCard) => {
  return (
    <section className='flex flex-col gap-4 p-4 border-2 rounded-3xl border-primary h-fit'>
      <article className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div className='gap-2 lg:flex lg:items-center'>
          <figure className='flex items-center justify-center w-20 h-20 p-2 overflow-hidden'>
            <img src={image} alt={altImage} className='object-cover w-full h-full rounded-full' />
          </figure>
          <div className='flex flex-col gap-2'>
            <p className='text-lg font-bold'>{petName}</p>
            <p>
              {breed} | {species}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          {!!userName && <p> {userName} </p>}
          {!!publishDate && (
            <p className='font-bold'>
              Fecha de publicación: <span className='font-regular'>{publishDate} </span>
            </p>
          )}
          {!!status && (
            <p className='font-bold'>
              Estado: <span className='font-regular'>{status} </span>
            </p>
          )}

          {!!adoptionDate && (
            <p className='font-bold'>
              Fecha de adopción: <span className='font-regular'>{adoptionDate} </span>
            </p>
          )}
          {!!userEmail && <p>{userEmail}</p>}
          {!!userPhone && <p>{userPhone}</p>}
        </div>
      </article>
      <article className='flex justify-end'>
        {!!mainActionLabel && mainAction && <Button label={mainActionLabel} variant='primary' onClick={mainAction}></Button>}
      </article>
    </section>
  );
};

export default MyPetCard;
