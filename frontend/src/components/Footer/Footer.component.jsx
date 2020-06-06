import React from 'react';
import styles from './Footer.module.scss';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

function Footer({ title }) {
  return (
    <div className={styles.footer}>
      <p>{title}</p>
      <div className={styles.iconsWrapper}>
        <FaTwitter color={'#616161'} />
        <FaFacebookF color={'#616161'} />
        <FaLinkedinIn color={'#616161'} />
        <FaInstagram color={'#616161'} />
      </div>
    </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
