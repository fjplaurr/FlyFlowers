import React from 'react';
import styles from './Services.module.scss';
import ServiceCard from '../ServiceCard';
import { Rocket, Calendar, Flower } from '../../../assets';

const Services = () => (
  <section className={styles.features}>
    <h2 className={styles.featuresSubTitle}>We offer you our services</h2>
    <div className={styles.featuresWrapper}>
      <ServiceCard
        description="Swift and reliable delivery, with bouquets arriving in just two days to brighten your day or surprise a loved one."
        FeatureSvg={Rocket}
        title="Two-days delivery"
      />
      <ServiceCard
        description="Meticulously handcrafted bouquets with the freshest and most vibrant blooms, ensuring long-lasting beauty and fragrance."
        FeatureSvg={Flower}
        title="Guaranteed fresh"
      />
      <ServiceCard
        description="Never miss a special moment again. Schedule the exact arrival of your floral masterpiece for the perfect heartfelt gift."
        FeatureSvg={Calendar}
        title="Precise delivery date"
      />
    </div>
  </section>
);

export default Services;
