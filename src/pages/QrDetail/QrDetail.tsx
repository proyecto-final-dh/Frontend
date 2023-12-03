import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import PetInfo from '../../components/PetInfo';
import { useGetPetByIdQuery } from '../../store/apis/resqpet.api';
import { useEffect } from 'react';

const QrDetail = () => {
  const { id } = useParams();
  const { error: errorPetById, isFetching: isFetchingPetById, isLoading: isLoadingPetById, data } = useGetPetByIdQuery({ id: id as string });

  useEffect(() => {
    if (errorPetById) console.log({ errorPetById });
  }, [errorPetById]);

  const loading = isLoadingPetById || isFetchingPetById;

  return (
    <main>
      {loading && <Loader opacity={60} />}
      {data && (
        <div className='flex items-center justify-center w-full'>
          <PetInfo
            petName={data.name}
            specie={data.breed.species.name}
            description={data.description}
            images={data.images}
            userName={'data.userDetails.name'}
            userEmail={'data.userDetails.email'}
            userPhone={data.userDetails.cellphone}
          />
        </div>
      )}
    </main>
  );
};

export default QrDetail;
