import React from 'react';
import './FeatureCard.scss';
import PropTypes from 'prop-types';

const FeatureCard = (props) => {
  const {
    featureSvg, title, featureDescript,
  } = props;
  return (
    <div className="featureWrapper">
      {featureSvg()}
      <h3>{title}</h3>
      <p>{featureDescript}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  featureImg: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  featureDescript: PropTypes.string.isRequired,
};

export default FeatureCard;
