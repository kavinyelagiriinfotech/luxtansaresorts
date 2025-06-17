import React from 'react'
import './Homepage.css'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logo from '../assets/luxtansaresorts.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
    <div className='header-container'>
        <header className="homepage-header">
            <div className="homepage-container">
                <div className="logo">
                    <Link to="/home" onClick={toggleSidebar}>
                        <a alt="Luxtansa logo"><img src={logo} /></a>
                    </Link>
                </div>
                <nav className={`nav ${sidebarOpen ? 'open' : ''}`}>
                    <Link to="/home" onClick={toggleSidebar}>
                        <a onClick={toggleSidebar}>Home</a>
                    </Link>
                    <Link to="/roomsandsuits" onClick={toggleSidebar}>
                        <a href="/roomsandsuits">Rooms & Suits</a>
                    </Link>
                    <Link to="/services" onClick={toggleSidebar}>
                        <a href="/services" >Services</a>
                    </Link>
                    <a href="#contact" onClick={toggleSidebar}>Contact</a>
                    <Link to="/booking" className="booking-button" onClick={toggleSidebar}>
                        Book Now
                    </Link>
                    <button className="close-sidebar" onClick={toggleSidebar}><FaTimes /></button>
                </nav>

                <button className="menu-icon" onClick={toggleSidebar}>
                    <FaBars />
                </button>
            </div>
        </header>
    </div>
  )
}

export default Header