import React from 'react';
import './Footer.css';



const Footer = () => {
    return (
        <footer>
            <div className="additional-resources">
                <a href="https://www.w3schools.com/html/">HTML Tutorial</a>
                <a href="https://www.w3schools.com/css/default.asp">CSS Tutorial</a>
                <a href="https://www.w3schools.com/js/default.asp">JavaScript Tutorial</a>
                <a href="https://www.w3schools.com/react/default.asp">React Tutorial</a>
                
            </div>
            <div className="social-media">
                <a href="https://facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://twitter.com"><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className="contact-info">
                <a href="mailto:support@webdevquiz.com">Contact Us</a>
            </div>
            <p>&copy; 2024 WebDev Quiz. All rights reserved. <br />
            Alishba&nbsp; Aqsa &nbsp; Rudaina &nbsp; Sobia</p>
        </footer>
    );
}

export default Footer;

