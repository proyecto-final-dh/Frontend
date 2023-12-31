import Footer from '../Footer';
import Navbar from '../Navbar';

interface PropsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  return (
    <div className='col-span-full'>
      <nav className='sticky top-0 z-20 w-full'>
        <Navbar />
      </nav>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
