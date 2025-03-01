import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-dark text-white text-center p-3">
      <div className="container">
        <p>© 2025 Zylentrix. All rights reserved.</p>
        <div className="social-icons mt-2">
          <a href="https://www.linkedin.com/in/deeksha89jain/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaLinkedin className="icon" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaTwitter className="icon" size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaInstagram className="icon" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
