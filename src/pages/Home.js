import React from 'react';
import Hero from '../components/Hero';
import Grid from '../components/ProductsGrid';
const Home = () => {
   return (
    <>
      <Hero />
      <div className='w-full mt-8 sm:w-11/12 md:mx-auto lg:w-5/6 px-4  min-h-screen'>
      <Grid />
      </div>
    </>
  );
};

export default Home;
