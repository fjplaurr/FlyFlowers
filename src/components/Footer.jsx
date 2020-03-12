import React from 'react';
import './Footer.scss';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

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

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
