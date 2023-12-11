import React, { useState, useEffect } from 'react';
import './CustomCheckBox.scss';
import PropTypes from 'prop-types';

const CustomCheckBox = ({
  dataSearchKey,
  dataSearchValue,
  id,
  history,
  location,
  labelValue = '',
  ariaLabel = '',
}) => {
  // initial state is unchecked
  const [checked, setChecked] = useState(false);

  // set checked or unchecked after first render
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const searchIterator = query.values();
    const searchArr = Array.from(searchIterator);
    setChecked(searchArr.includes(dataSearchValue));
  }, []);

  // add or delete params from uri
  const handleFilter = (event) => {
    const { search } = location;
    setChecked((oldChecked) => !oldChecked);
    const params = new URLSearchParams(search);
    const key = event.target.getAttribute('data-search-key');
    const value = event.target.getAttribute('data-search-value');

    if (event.target.checked) {
      params.append(key, value);
    } else {
      const paramsToKeep = [...params.entries()].filter(
        ([entryKey, entryValue]) => entryKey !== key || entryValue !== value,
      );
      params.delete(key);
      paramsToKeep.forEach(([entryKey, entryValue]) => {
        params.append(entryKey, entryValue);
      });
    }

    const newLocation = {
      pathname: '/empty',
      state: {
        params: params.toString(),
      },
    };
    history.push(newLocation);
  };

  return (
    <>
      <input
        type="checkbox"
        data-search-value={dataSearchValue}
        data-search-key={dataSearchKey}
        id={id}
        onChange={handleFilter}
        checked={checked}
      />
      <label aria-label={ariaLabel} htmlFor={id}>
        {labelValue}
      </label>
    </>
  );
};

CustomCheckBox.propTypes = {
  dataSearchKey: PropTypes.string.isRequired,
  dataSearchValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  labelValue: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default CustomCheckBox;
