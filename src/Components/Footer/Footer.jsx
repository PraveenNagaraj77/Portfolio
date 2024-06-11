import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-center p-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-pink-800">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:text-red-800">
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
