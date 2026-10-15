import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
  const { pathname } = useLocation();

  // Automatically scroll to top whenever the route/pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="root-layout"> 
      <header className='w-11/12 mx-auto'>
        <Header/>
        <hr className='text-white w-[99%] mx-auto'/>
      </header>
      <main className='w-11/12 mx-auto'>
        <Outlet/>
      </main>
      <footer className='w-11/12 mx-auto'>
        <Footer/>
      </footer>
    </div>
  );
};

export default RootLayout;