import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FinalCTA from './FinalCTA';

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">تخطي إلى المحتوى</a>
      <Navbar />
      <main id="main" tabIndex="-1">
        <Outlet /> {/* This renders whatever page route is active */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}