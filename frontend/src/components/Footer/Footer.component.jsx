import React from 'react';
import styles from './Footer.module.scss';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';
import variables from '../../variables.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <p>{"© 2020 Fly Flowers. All rights reserved."}</p>
      <div className={styles.iconsWrapper}>
        <FaTwitter color={variables.mediumGray} />
        <FaFacebookF color={variables.mediumGray} />
        <FaLinkedinIn color={variables.mediumGray} />
        <FaInstagram color={variables.mediumGray} />
      </div>
    </div>
  );
}


export default Footer;
