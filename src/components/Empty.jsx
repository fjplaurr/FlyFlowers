import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Empty = ({ location })=> {
  const locat = {
    pathname: '/shop',
    search: `?${location.state.params}`,
  };
  return (
    <Redirect to={locat} />
  );
}

Empty.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Empty;
