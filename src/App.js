import React from 'react';
import './index.css';
import Navbar from './component/Navbar';
import Section from './component/Section';
import Content from './component/content';
import Focus from './component/focus';
import Project from './component/project';
import ContactInfo from './component/contact-info';
import Footer from './component/footer';
import {Routes, Route } from 'react-router-dom';
import Switch from 'react-switch'
import Gallery from './component/navlinks/Gallery';
import NavProject from './component/navlinks/Nav-project';
import Certification from './component/navlinks/certification';
import Contact from './component/navlinks/contact';
import Home from './component/navlinks/Home';


function App() {
  return (
    <React.StrictMode> 
        <div className="app">
            <Navbar />
              <Routes>   
                  <Route path="/" element={<Home />} />
                  <Route path="/Gallery" element={<Gallery />} />
                  <Route path="/NavProject" element={<NavProject />} />
                  <Route path="/certification" element={<Certification />} />
                  <Route path="/Contact" element={<Contact />} />  
              </Routes>
        </div>
        <Section />
        <Content />
        <Focus />
        <Project />
        <ContactInfo />
        <Footer /> 
      </React.StrictMode>
  );
}

export default App;