import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="manual-layout">
      <Navigation />
      
      <main className="manual-main">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
