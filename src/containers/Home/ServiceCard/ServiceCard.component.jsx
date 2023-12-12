import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ description, title, FeatureSvg }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className={styles.featureWrapper}>
      <FeatureSvg size={isDesktop ? 'big' : 'small'} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  FeatureSvg: PropTypes.func.isRequired,
};

export default ServiceCard;
