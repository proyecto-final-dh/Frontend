import { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar';

interface PropsLayout {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  const [navbarHeight, setNavbarHeight] = useState('');
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(`${(navbarRef.current.children[0] as HTMLElement).offsetHeight}px`);
    }
  }, [navbarRef]);
  return (
    <>
      <nav ref={navbarRef}>
        <Navbar />
      </nav>
      <main style={{ marginTop: navbarHeight }}>{children}</main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};

export default Layout;
