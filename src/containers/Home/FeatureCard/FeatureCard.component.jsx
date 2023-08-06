import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeatureCard.module.scss'

const FeatureCard = (props) => {
  const {
    featureSvg, title, featureDescript,
  } = props;
  return (
    <div className={styles.featureWrapper}>
      {featureSvg()}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{featureDescript}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  featureDescript: PropTypes.string.isRequired,
};

export default FeatureCard;
