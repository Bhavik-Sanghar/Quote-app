import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Import React icons from the library
import './SocialMediaIcons.css'; // Add styles for the icons

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </a>
      <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
    </div>
  ); 
};

export default SocialMediaIcons;
