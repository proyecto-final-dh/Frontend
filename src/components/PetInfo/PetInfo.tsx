import imageNotFoundMobile from './../../assets/qr-not-found-image-mobile.png';
import imageNotFoundDesktop from './../../assets/qr-not-found-image-desktop.png';
import useBreakpoint from '../../hooks/use-breakpoint';
import Title from '../Title';
import TextDetail from '../TextDetail';
import { dateFormatter } from '../../utils/dates';
import { IconAt, IconPhone, IconUser } from '@tabler/icons-react';
import { Image } from '../../contracts/pet';

type PetInfoProps = {
  petName: string;
  specie: string;
  description: string;
  images: Image[];
  userName: string;
  userEmail: string;
  userPhone: string;
};

const PetInfo = ({ description, images, petName, specie, userEmail, userName, userPhone }: PetInfoProps) => {
  const { isLg } = useBreakpoint('lg');
  console.log({ images });
  return (
    <section className='w-full lg:p-10 lg:w-1/2'>
      <div className='flex justify-center rounded-lg bg-mid-gray' id='qr-generator-2-step'>
        {!images[0].url && (
          <>
            {isLg && <img src={imageNotFoundDesktop} className='object-contain w-full rounded-lg h-96' />}
            {!isLg && <img src={imageNotFoundMobile} className='object-contain w-full rounded-lg h-96' />}
          </>
        )}
        {!!images[0].url && <img src={images[0].url} className='object-cover w-full rounded-lg h-96' />}
      </div>
      <article className='relative flex flex-col gap-3 -mt-6 rounded-t-3xl bg-primary p-9 z-2'>
        <Title variant='h2'>{petName}</Title>
        <div className='flex justify-between'>
          <TextDetail size='xs' weight='bold' className='uppercase'>
            {specie}
          </TextDetail>
          <TextDetail size='xs' weight='regular'>
            {dateFormatter(new Date().toISOString(), 'YYYY-MM-DD', 'DD MMM YYYY')}
          </TextDetail>
        </div>
        <TextDetail size='xs' weight='regular' className='break-words'>
          {description}
        </TextDetail>
        <TextDetail size='xs' weight='regular' className='break-words'>
          Por favor contactarse con su protector para que <strong>{petName}</strong> vuelva con su familia:
        </TextDetail>
        <div className='flex flex-col justify-around gap-4'>
          <div className='flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg'>
            <IconUser className='w-7 h-7 min-w-[28px] min-h-[28px]' />
            <TextDetail size='xs' weight='regular' className='text-center'>
              {userName}
            </TextDetail>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg'>
            <IconAt className='w-7 h-7 min-w-[28px] min-h-[28px]' />
            <TextDetail size='xs' weight='regular' className='text-center'>
              {userEmail}
            </TextDetail>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 p-2 bg-white rounded-lg'>
            <IconPhone className='w-7 h-7 min-w-[28px] min-h-[28px]' />
            <TextDetail size='xs' weight='regular' className='text-center'>
              {userPhone}
            </TextDetail>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PetInfo;
