import { useParams } from 'react-router-dom';
import { Loader } from '../../components';
import PetInfo from '../../components/PetInfo';
import { useGetPetByIdQuery } from '../../store/apis/resqpet.api';
import { useEffect } from 'react';
import withKcContext from '../../hocs/withKcContext';

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
            petName={data.pet.name}
            specie={data.pet.breed.species.name}
            description={data.pet.description}
            images={data.pet.images}
            userName={data.owner_information.name}
            userEmail={data.owner_information.email}
            userPhone={data.owner_information.cellphone}
          />
        </div>
      )}
    </main>
  );
};

export default withKcContext(QrDetail);
