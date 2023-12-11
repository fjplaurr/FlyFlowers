import React from 'react';
import { Calendar } from '../../assets';
import styles from './DeliveryAd.module.scss';

const DeliveryAd = () => (
  <div className={styles.container}>
    <Calendar size="small" />
    <p>Delivery free in two days</p>
  </div>
);

export default DeliveryAd;
