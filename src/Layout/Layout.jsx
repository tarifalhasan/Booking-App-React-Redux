import React from 'react';
import Header from '../component/Header/Header';

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
