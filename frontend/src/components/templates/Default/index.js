import React from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <>
        {
          children
        }
      </>
      <Footer/>
    </>
  );
};
export default DefaultLayout;
