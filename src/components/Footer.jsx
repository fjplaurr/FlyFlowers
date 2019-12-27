import React from 'react';
import './Footer.scss';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <p>© 2020 Fly Flowers. All rights reserved.</p>
      <div className="iconsWrapper">
        <FaTwitter />
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
    </div>
  );
}
