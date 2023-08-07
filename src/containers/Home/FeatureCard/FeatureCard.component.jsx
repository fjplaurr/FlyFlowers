import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeatureCard.module.scss';

const FeatureCard = (props) => {
  const { featureSvg, title, description } = props;
  return (
    <div className={styles.featureWrapper}>
      {featureSvg()}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
