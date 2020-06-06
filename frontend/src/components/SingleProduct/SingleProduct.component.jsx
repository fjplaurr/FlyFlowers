import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addToBag from '../../redux/actions/addToBag';
import increaseBilling from '../../redux/actions/increaseBilling';

function SingleProduct(props) {
  const { history, addProductToBag, incrBilling, products } = props;
  const { id } = useParams();
  const item = products.find((elem) => elem.id === id);
  const handleClick = () => {
    addProductToBag(id);
    incrBilling(item.price);
    history.push('/bag');
  };
  return (
    <div className="singleProduct">
      <div className="productDescription">
        <h1>{item.title}</h1>
        <p className="price">{`${item.price.toFixed(2)} €`}</p>
        <p className="description">{item.longDescription}</p>
        <button type="button" onClick={() => handleClick()}>Add to bag</button>
      </div>
      <div className="imageWrapper" style={{ backgroundImage: `url(${item.url})` }} />
    </div>
  );
}

SingleProduct.propTypes = {
  addProductToBag: PropTypes.func.isRequired,
  incrBilling: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  addProductToBag: addToBag,
  incrBilling: increaseBilling,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
