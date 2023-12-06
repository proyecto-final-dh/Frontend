export interface IProfileCard {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
}

const ProfileCard = ({ firstName, lastName, email, phone, location }: IProfileCard) => {
  return (
    <section className='flex flex-col gap-4 p-4 border-2 rounded-3xl border-primary'>
      <article className='flex flex-col p-2.5 lg:gap-4'>
        <div className='lg:flex lg:justify-between'>
          <p className='text-base lg:text-lg'>
            <span className='font-bold'>Nombre:</span> {firstName}
          </p>
          <p className='text-base lg:text-lg'>
            <span className='font-bold'>Apellido:</span> {lastName}
          </p>
          <p className='text-base lg:text-lg'>
            <span className='font-bold'>Email:</span> {email}
          </p>
        </div>
        <div className='lg:flex lg:justify-between'>
          <p className='text-base lg:text-lg'>
            <span className='font-bold'>Teléfono:</span> {phone}
          </p>
          <p className='text-base lg:text-lg'>
            <span className='font-bold'>Ubicación:</span> {location}
          </p>
        </div>
      </article>
    </section>
  );
};

export default ProfileCard;
