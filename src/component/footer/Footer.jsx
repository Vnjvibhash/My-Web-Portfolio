import React from 'react'
import './footer.css'
import {GrInstagram} from 'react-icons/gr';
import {GrFacebook} from 'react-icons/gr';
import {FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">SUSPICIOUS</a>


            <ul className="permalink">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com" target="_blank"> <GrFacebook /> </a>
                <a href="https://instagram.com" target="_blank"> <GrInstagram /></a>
                <a href="https://twitter.com" target="_blank"> <FaTwitterSquare /> </a>
            </div>

            <div className="footer__copyright">
                <small>
                    &copy; SUSPICIOUS. All rights reserved.
                </small>
            </div>
        </footer>
    )
}

export default Footer