import { useEffect, useState } from 'react';
import { Loader, Title } from '../../components';
import QrModal from '../../components/QrModal/QrModal';
import { withKeycloakAuth } from '../../config';
import { useGetMyPetsQuery } from '../../store/apis/resqpet.api';
import MyPetCard from '../YourAccount/components/MyPetCard';

const MyPets = () => {
  const { isFetching, isLoading, data } = useGetMyPetsQuery({});

  const [selectedId, setSelectedId] = useState('');
  const [qrModal, setQrModal] = useState(false);
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    const image = document.getElementById('qr-image') as HTMLImageElement;
    if (!image) return;
    setQrUrl(`${location.origin}/qr/${selectedId}`);
  }, [selectedId, qrModal]);

  const _isLoading = isFetching || isLoading;

  return (
    <div className='w-full'>
      <Title className='m-4' variant='h1'>
        Mis Mascotas registradas
      </Title>
      {_isLoading && <Loader opacity={60} />}
      {!isLoading && data && (
        <div className='flex flex-col gap-1'>
          {data.map((item) => {
            return (
              <MyPetCard
                key={item.id}
                image={item.images?.[0]?.url ?? ''}
                altImage={item.images?.[0]?.title ?? ''}
                petName={item.name}
                breed={item.breed.name}
                species={item.breed.species.name}
                mainAction={() => {
                  setSelectedId(item.id.toString());
                  setQrModal(true);
                }}
                mainActionLabel='Ver QR'
              />
            );
          })}
        </div>
      )}
      {qrModal && <QrModal url={qrUrl} closeModal={() => setQrModal(false)} />}
    </div>
  );
};

export default withKeycloakAuth(MyPets);
