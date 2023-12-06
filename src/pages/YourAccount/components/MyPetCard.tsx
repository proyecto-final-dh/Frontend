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
    <section className='flex flex-col gap-4 p-4 border-2 rounded-3xl border-primary'>
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
      <article className='flex justify-between'>
        {!!mainActionLabel && mainAction && <Button label={mainActionLabel} variant='primary' onClick={mainAction}></Button>}
        {(!mainActionLabel || !mainAction) && <div className='w-full'></div>}

        <div className='flex gap-2'>
          {onEdit && (
            <div onClick={onEdit} className='flex items-center justify-center w-8 h-8 p-2 rounded-full bg-primary'>
              <IconUserEdit />
            </div>
          )}
          {onDelete && (
            <div onClick={onDelete} className='flex items-center justify-center w-8 h-8 p-2 rounded-full bg-primary'>
              <IconTrash />
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

export default MyPetCard;
