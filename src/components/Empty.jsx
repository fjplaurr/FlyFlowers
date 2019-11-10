import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Empty(props) {
  const { location } = props;
  return (
    <Redirect
      to={{
        pathname: '/shop',
        search: `?${location.state.params}`,
      }}
    />
  );
}

Empty.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
