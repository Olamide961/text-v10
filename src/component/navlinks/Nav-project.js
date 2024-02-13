import './Nav-project.css';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';
import image30 from './navlink-images/image 30.jpg';
import image32 from './navlink-images/image 32.png';
import image33 from './navlink-images/image 33.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function NavProject() {
    return (
        <React.StrictMode>
            <div className="nav-project">
                <p className="nav-project-para">Our</p>
                <h3 className="nav-project-head">Projects</h3>
                <div className="details">
                    <div className="details1">
                        <img className="details-img" src={image30}  alt=""/>
                        <div className="details-content">
                            <p className="details-head">Sample Project</p>
                            <p className="details-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="details-btn">Read More <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        </div>
                    </div>

                    <div className="details1">
                        <img className="details-img" src={image32}  alt=""/>
                        <div className="details-content">
                            <p className="details-head">Sample Project</p>
                            <p className="details-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                             printer took a galley of type and scrambled it to make a type specimen book.</p>
                             <button className="details-btn">Read More <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        </div>     
                    </div>

                    <div className="details1">
                        <img className="details-img" src={image33}  alt=""/>
                        <div className="details-content">    
                            <p className="details-head">Sample Project</p>
                            <p className="details-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="details-btn">Read More <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.StrictMode>
    )
}

export default NavProject;