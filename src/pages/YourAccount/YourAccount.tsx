import MainMenu from './components/MainMenu/MainMenu';
import bannerFooter from './../../assets/slider-pet-footer.png';

const YourAccount = () => {
  return (
    <>
      <div className='col-span-full lg:flex lg:flex-row'>
        <div className='basis-1/4 p-4'>
          <MainMenu />
        </div>
        <div className='basis-3/4 p-4'>aqui va el cuerpo</div>
      </div>
      <div>
        <img src={bannerFooter} alt='slider-pets-footer' className='w-full' />
      </div>
    </>
  );
};

export default YourAccount;
