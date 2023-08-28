import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Import React icons from the library
import './SocialMediaIcons.css'; // Add styles for the icons

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.linkedin.com/in/bhavik-sanghar-360712271/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://twitter.com/bhaviksuiya22" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
    </div>
  ); 
};

export default SocialMediaIcons;
