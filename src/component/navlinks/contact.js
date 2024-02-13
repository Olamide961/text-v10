import React from 'react';
import './contact.css';
import Navbar from '../Navbar';
import Footer from '../footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <React.StrictMode>
            <div className="contact">
                <p className="contact-para">Contact</p>
                <h3 className="contact-head">Information</h3>
                <div className="contact-details">
                    <h6 className="contact-name">Company Name</h6>
                    <p className="contact-address">44,Isaac John Fadeyi Lagos State</p>
                </div>
                <h5 className="contact-number">512.333.2222</h5>
                <p className="contact-gmail">olajireolamide961@gmail.com</p>
                <button className="contact-btn1">Contact Us<span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                    width="1000"
                    height="505"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                 />
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    )
}

export default Contact;