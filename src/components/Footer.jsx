import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
        {/* Newsletter Section */}
        <section className="newsletter-section">
            <div className="quote-container">
            <p className="quote-text">
            “Travel opens your heart, broadens your mind and fills your life with stories to tell.”
            </p>
            <div className="quote-author">
            <span className="quote-line" /> Paula Bendfeldt
            </div>
            </div>
            <div className="newsletter-content">
                <h2>Receive News and Special Offers</h2>
                <p>Sign up to our newsletter to lorem ipsum dolor sit amet!</p>
                <form className="newsletter-form">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
        
        {/* Footer section*/}
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-left">
                <div className="footer-block">
                    <h4>ADDRESS</h4>
                    <p>Luxtansa Resorts<br />#city, #State<br />
                    <span className="footer-link">#locationlink</span>
                    </p>
                </div>
                <div className="footer-block">
                    <h4>CONTACT</h4>
                    <p>+91-98765-43210 <br />
                    <a href="mailto:reservations@luxtansareosort.com">reservations@luxtansareosort.com</a>
                    </p>
                </div>
                <div className="footer-block">
                    <h4>FOLLOW US</h4>
                    <div className="footer-socials">
                    <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    </div>
                </div>
                </div>

                <div className="footer-right">
                <div className="footer-links">
                    <a href="#rooms">Rooms & Suites</a>
                    <a href="#services">Services</a>
                    <a href="#restaurant">Restaurant</a>
                    <a href="#activities">Activities</a>
                    <a href="#events">Events</a>
                    <a href="#about">About us</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-links">
                    <a href="#newsletter">Newsletter</a>
                    <a href="#press">Press</a>
                    <a href="#careers">Careers</a>
                    <a href="#sanitarymeasures">Sanitary Measures</a>
                    <a href="#legalnotice">Legal Notice</a>
                    <a href="#privacypolicy">Privacy Policy</a>
                    <a href="#cookiespolicy">Cookies Policy</a>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer