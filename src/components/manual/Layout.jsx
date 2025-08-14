import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';
import BackToHome from './BackToHome';

const Layout = () => {
  return (
    <div className="manual-layout">
      <Navigation />
      
      <main className="manual-main">
        <BackToHome />
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
