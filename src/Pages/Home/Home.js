import React from 'react';
import Slideshow from '../SlideShow/Slideshow';
import Header from '../Navbar/Navbar';
import HomeTop from '../HomeTop/HomeTop';
// import TopBar from '../TopBar/TopBar';
import Home3 from '../features list/list';
import ContactForm from '../Contact/ContactForm';
import Footer from '../Footer/Footer';
import "./Home.css";

const Home = () => {
  return (
    <div className="page34">
      <Slideshow/>
      <Header/>
      <HomeTop/>
      <Home3 />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;

