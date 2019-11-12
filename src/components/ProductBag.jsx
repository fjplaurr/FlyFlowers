import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeProductPrice from '../redux/actions/changeProductPrice';
import changeProductPicture from '../redux/actions/changeProductPicture';

function ProductBag(props) {
  const {
    price, url, shortDescription, id,
  } = props;
  return (
    <div className="card">
      <div
        className="imageWrapper"
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="infoProduct">
        <p className="description">{shortDescription}</p>
        <div className="priceBag">
          <p className="price">
            {`${price}€`}
          </p>
          <p className="modifyBag">
            Add to bag
            <GoChevronRight />
          </p>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  changeProductPrice,
  changeProductPicture,
};

ProductBag.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(ProductBag);
