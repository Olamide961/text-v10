import React, { useState } from 'react';
import './Gallery.css'; 
import Navbar from '../Navbar';
import Footer from '../footer';
import rectangular22 from './navlink-images/Rectangle 22.png';
import rectangular23 from './navlink-images/Rectangle 23.png';
import rectangular24 from './navlink-images/Rectangle 24.png';
import rectangular25 from './navlink-images/Rectangle 25.png';
import rectangular26 from './navlink-images/Rectangle 26.png';
import rectangular27 from './navlink-images/Rectangle 27.png';
import rectangular28 from './navlink-images/Rectangle 28.png';
import rectangular29 from './navlink-images/Rectangle 29.png';
import rectangular30 from './navlink-images/Rectangle 30.png';
import rectangular31 from './navlink-images/Rectangle 31.png';
import image01 from './navlink-images/image01.png';
import image02 from './navlink-images/image02.png';
import image03 from './navlink-images/image03.png';
import image04 from './navlink-images/image04.png';
import image05 from './navlink-images/image05.png';
import image06 from './navlink-images/image06.png';
import image07 from './navlink-images/image07.png';
import image08 from './navlink-images/image08.png';
import image09 from './navlink-images/image09.png';
import image10 from './navlink-images/image10.png';
import image11 from './navlink-images/image11.png';
import image13 from './navlink-images/image13.png';
import image14 from './navlink-images/image14.png';
import image15 from './navlink-images/image15.png';
import image16 from './navlink-images/image16.png';
import image17 from './navlink-images/image17.png';
import image18 from './navlink-images/image18.png';
import image19 from './navlink-images/image19.png';
import image20 from './navlink-images/image20.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';





function Gallery() {

    return (
        <React.StrictMode>
            <div className='sub-gallery'>
                <p className="sub-gallery-para">photo</p>
                <h3 className="sub-gallery-head">Gallery</h3>
                <div className="gallery-row">
                    <div className="column">
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image02 } alt ="" />
                        <img className="rectangules" src={ image03 } alt ="" />
                        <img className="rectangules" src={ image04 } alt ="" />
                        <img className="rectangules" src={ image05 } alt ="" />
                        <img className="rectangules" src={ image06 } alt ="" />
                        <img className="rectangules" src={ image07 } alt ="" />
                        <img className="rectangules" src={ image08 } alt ="" />
                        <img className="rectangules" src={ image09 } alt ="" />
                        <img className="rectangules" src={ image10 } alt ="" />
                    </div>

{/*                    <div className="column">
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                    </div>

                    <div className="column">
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                    </div>
                    
                    <div className="column">
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                    </div>

                    <div className="column">
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                        <img className="rectangules" src={ image01 } alt ="" />
                    </div>    
    */}
                </div>
            </div>    
            <Footer />
        </React.StrictMode>
    )
}

export default Gallery;