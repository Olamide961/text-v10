import './certification.css';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';

function Certification() {
    return (
        <React.StrictMode>
            <div className="certification">
                <p className="certification-para">Company</p>
                <h3 className="certification-head">Certifications</h3>
                <div className="certification-content"></div>
            </div>
            <Footer />
        </React.StrictMode>
    )
}

export default Certification;