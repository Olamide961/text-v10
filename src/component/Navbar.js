import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </div>
                <ul className={menuOpen ? "open" : "nav-menu"}>
                    <li className="nav-items">
                        <NavLink to ="/" className="nav-links" >
                            Home
                        </NavLink>  
                    </li>
                    <li className="nav-items">
                        <NavLink to="/Gallery" className="nav-links"  >
                            gallery
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/NavProject" className="nav-links" >
                            project
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/Certification" className="nav-links" >
                            certifications
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/Contact" className="nav-links" >
                            contacts
                        </NavLink>
                    </li>
                </ul>    
            </div>
        </nav>
        </>
    );
}

export default Navbar;