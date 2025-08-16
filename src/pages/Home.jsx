import React from 'react';
import Carousel from '../components/home/Carousel';
import AppointmentForm from '../components/home/AppointmentForm';
import FAQ from '../components/home/FAQ';
import Location from '../components/home/Location';

const Home = () => {
  return (
    <>
      <section id="home">
        <Carousel />
      </section>
      <section id="contact">
        <AppointmentForm />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="location">
        <Location />
      </section>
    </>
  );
};

export default Home;
