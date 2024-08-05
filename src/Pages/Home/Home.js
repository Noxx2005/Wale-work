// src/components/Home/Home.jsx

import React, { useState } from 'react';
import Slideshow from '../SlideShow/Slideshow';
import Header from '../Navbar/Navbar';
import HomeTop from '../HomeTop/HomeTop';
// import TopBar from '../TopBar/TopBar';
import Home3 from '../features list/list';
import ContactForm from '../Contact/ContactForm';
import Footer from '../Footer/Footer';
import ChatIcon from './ChatIcon/ChatIcon.jsx';
import ContactModal from './ChatIcon/ContactModal';
import './Home.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChatIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (email, question) => {
    // Here you can handle the form submission, e.g., send an email to info@emparex.ca
    console.log('Email:', email);
    console.log('Question:', question);
  };

  return (
    <div className="page34">
      <Slideshow />
      <Header />
      <HomeTop />
      {/* <Home3 /> */}
      <ContactForm />
      <Footer />
      <ChatIcon onClick={handleChatIconClick} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;
