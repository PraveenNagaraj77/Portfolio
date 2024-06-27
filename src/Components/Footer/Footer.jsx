import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Components/Footer/Footer.css'
import { faLinkedin, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-center p-6">
      <div className="flex justify-center space-x-6 mb-4"data-aos="zoom-in">
        <a href="https://www.linkedin.com/in/praveen-nagaraj-a8b956219/" target="_blank" rel="noopener noreferrer" className="icon text-blue-800 hover:text-blue-900">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/prav.een____/" target="_blank" rel="noopener noreferrer" className="icon text-orange-400 hover:text-pink-800">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/PraveenNagaraj77" target="_blank" rel="noopener noreferrer" className="icon text-white hover:text-gray-500">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="icon text-[#ff0000] hover:text-red-800">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
      <div className="text-gray-400">
        <p>Copyrights &copy; 2024 Rights Reserved</p>
        <p>Design by <span className='text-green-500'>Praveen</span> </p>
      </div>
    </footer>
  );
};

export default Footer;
