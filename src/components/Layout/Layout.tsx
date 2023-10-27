import * as React from 'react';
import Navbar from '../Navbar';

interface PropsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};

export default Layout;
