import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import styles from './Footer.module.scss';
import variables from '../../variables.scss';

const Footer = () => (
  <div className={styles.footer}>
    <p>© 2020 Fly Flowers. All rights reserved.</p>
    <div className={styles.iconsWrapper}>
      <FaTwitter color={variables.white} />
      <FaFacebookF color={variables.white} />
      <FaLinkedinIn color={variables.white} />
      <FaInstagram color={variables.white} />
    </div>
  </div>
);

export default Footer;
