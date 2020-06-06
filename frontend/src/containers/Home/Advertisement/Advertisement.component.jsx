import React from 'react';
import PropTypes from 'prop-types';

function Advertisement(props) {
  const {
    imageUrl, imageClass, imageAlt, history,
  } = props;
  return (
    <div className="productCollection">
      <img src={imageUrl} className={imageClass} alt={imageAlt} />
      <div className="caption">
        <h1 >Colorful Collection</h1>
        <h2 className="colorfulSubTitle">Vivid colors that inspire</h2>
        <button type="button" onClick={() => history.push('/shop')}>Discover it</button>
      </div>
    </div>
  );
}

Advertisement.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


export default Advertisement;
