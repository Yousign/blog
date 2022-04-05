import * as React from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
