import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const style = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  )
}

export default style