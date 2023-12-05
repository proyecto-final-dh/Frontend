import { IconUserEdit, IconTrash } from '@tabler/icons-react';
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
  onEdit?: () => void;
  onDelete?: () => void;
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
  onDelete,
  onEdit,
  userPhone,
}: IMyPetCard) => {
  return (
    <section className='flex flex-col rounded-3xl border-2 border-primary p-4 gap-4'>
      <article className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div className='lg:flex lg:items-center gap-2'>
          <figure className='flex justify-center items-center p-2 h-20 w-20 overflow-hidden'>
            <img src={image} alt={altImage} className='rounded-full object-cover w-full h-full' />
          </figure>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-lg'>{petName}</p>
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
      <article className='flex justify-between'>
        {!!mainActionLabel && mainAction && <Button label={mainActionLabel} variant='primary' onClick={mainAction}></Button>}
        {(!mainActionLabel || !mainAction) && <div className='w-full'></div>}

        <div className='flex gap-2'>
          {onEdit && (
            <div onClick={onEdit} className='flex justify-center items-center bg-primary rounded-full p-2 h-8 w-8'>
              <IconUserEdit />
            </div>
          )}
          {onDelete && (
            <div onClick={onDelete} className='flex justify-center items-center bg-primary rounded-full p-2 h-8 w-8'>
              <IconTrash />
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

export default MyPetCard;
