import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import GalleryBelt from '../components/GalleryBelt';
import Reviews from '../components/Reviews';
import BookingForm from '../components/BookingForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services isPreview={true} />
      <GalleryBelt />
      <Reviews />
      <BookingForm />
    </>
  );
};

export default HomePage;
