import MainMenu from './components/MainMenu/MainMenu';
import bannerFooter from './../../assets/slider-pet-footer.png';

type YourAccountProps = {
  children: React.ReactNode;
};

const YourAccount = ({ children }: YourAccountProps) => {
  return (
    <>
      <div className='col-span-full lg:flex lg:flex-row'>
        <div className='p-4 basis-1/4'>
          <MainMenu />
        </div>
        <div className='p-4 basis-3/4'>{children}</div>
      </div>
      <div>
        <img src={bannerFooter} alt='slider-pets-footer' className='w-full' />
      </div>
    </>
  );
};

export default YourAccount;
