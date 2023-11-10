interface HeroBannerProps {
  leftImage: string;
  leftAlt: string;
  rightImage?: string;
  rightAlt?: string;
  children: React.ReactElement;
}

const HeroBanner = ({ leftImage, rightImage, leftAlt, rightAlt, children }: HeroBannerProps) => {
  return (
    <div className='flex w-full bg-orange'>
      <aside className='w-full justify-between items-center overflow-hidden bg-orange lg:flex'>
        <article className='flex flex-row items-center p-6 lg:pl-20 lg:w-3/5 md:max-w-full'>
          {rightImage && <img src={rightImage} alt={rightAlt} className='hidden lg:block max-w-[150px] max-h-[150px]' />}
          {children}
        </article>
        <article className='flex justify-center items-center'>
          <img src={leftImage} alt={leftAlt} />
        </article>
      </aside>
    </div>
  );
};

export default HeroBanner;
