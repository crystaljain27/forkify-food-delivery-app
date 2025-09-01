import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      {/* This 'app' div correctly wraps only the content that should be centered */}
      <div className="app">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      
      {/* The Footer is now OUTSIDE the centered 'app' div, allowing it to be full-width */}
      <Footer />
    </>
  );
};

export default MainLayout;
