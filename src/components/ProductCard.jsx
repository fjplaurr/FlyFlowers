import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.scss';
import { connect } from 'react-redux';
import changeProductPrice from '../redux/actions/changeProductPrice';
import changeProductPicture from '../redux/actions/changeProductPicture';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const {
      price, url, productPrice, productPicture,
    } = this.props;
    productPrice(price);
    productPicture(url);
  };

  render() {
    const {
      price, url, shortDescription, id,
    } = this.props;
    return (
      <Link
        to={`/singleProduct/${id}`}
        className="productCard"
        onClick={this.handleClick}
      >
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
      </Link>
    );
  }
}

/* Below a renaming of the actions to avoid no-shadow rule from Eslint */
const mapDispatchToProps = {
  productPrice: changeProductPrice,
  productPicture: changeProductPicture,
};

ProductCard.propTypes = {
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  productPrice: PropTypes.func.isRequired,
  productPicture: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProductCard);
