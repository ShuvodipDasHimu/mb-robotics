import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
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