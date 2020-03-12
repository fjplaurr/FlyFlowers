import React from 'react';
import './FeatureCard.scss';
import PropTypes from 'prop-types';

const FeatureCard = (props) => {
  const {
    featureImg, imgDescript, title, featureDescript,
  } = props;
  return (
    <div className="featureWrapper">
      <img src={featureImg} alt={imgDescript} />
      <h3>{title}</h3>
      <p>{featureDescript}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  featureImg: PropTypes.string.isRequired,
  imgDescript: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featureDescript: PropTypes.string.isRequired,
};

export default FeatureCard;
