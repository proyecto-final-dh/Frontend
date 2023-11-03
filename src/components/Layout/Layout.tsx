import Navbar from '../Navbar';

interface PropsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  return (
    <div className='col-span-full'>
      <nav className='sticky top-0 z-10 w-full'>
        <Navbar />
      </nav>
      <main>{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;
