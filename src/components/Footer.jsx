import React from 'react';
import './Footer.scss';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';

function Footer({ title }) {
  return (
    <div className="footer">
      <p>{title}</p>
      <div className="iconsWrapper">
        <FaTwitter />
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
    </div>
  );
}

export default Footer;
