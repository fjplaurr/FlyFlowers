import React from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceCard.module.scss';

const ServiceCard = (props) => {
  const { FeatureSvg, title, description } = props;
  return (
    <div className={styles.featureWrapper}>
      <FeatureSvg />
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
