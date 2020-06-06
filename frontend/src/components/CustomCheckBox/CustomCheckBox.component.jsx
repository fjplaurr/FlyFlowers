import React, { useState, useEffect } from 'react';
import './CustomCheckBox.scss'

const CustomCheckBox = ({ dataSearchKey, dataSearchValue, id, history, location,
  className, labelValue = "", ariaLabel = "" }) => {
  // initial state is unchecked
  const [checked, setChecked] = useState(false);

  // set checked or unchecked after first render
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const searchIterator = query.values();
    const searchArr = Array.from(searchIterator);
    setChecked(searchArr.includes(dataSearchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // add or delete params from uri
  const handleFilter = (event) => {
    const { search } = location;
    setChecked((oldChecked) => !oldChecked);
    const params = new URLSearchParams(search);
    if (event.target.checked) {
      params.append(event.target.getAttribute('data-search-key'), event.target.getAttribute('data-search-value'));
    } else {
      const paramsToKeep = [];
      const keyValueArr = [...params.entries()];
      for (let i = 0; i < keyValueArr.length; i += 1) {
        if (keyValueArr[i][0] === event.target.getAttribute('data-search-key') && keyValueArr[i][1] !== event.target.getAttribute('data-search-value')) {
          paramsToKeep.push(keyValueArr[i][1]);
        }
      }
      params.delete(event.target.getAttribute('data-search-key'));
      for (let i = 0; i < paramsToKeep.length; i += 1) {
        params.append(event.target.getAttribute('data-search-key'), paramsToKeep[i]);
      }
    }
    const newLocation = {
      pathname: '/empty',
      state: {
        params: params.toString()
      },
    };
    history.push(newLocation);
  }
  return (
    <>
      <input
        type="checkbox"
        data-search-value={dataSearchValue}
        data-search-key={dataSearchKey}
        id={id}
        onChange={handleFilter}
        checked={checked}
        className={className}
      />
      <label
        aria-label={ariaLabel}
        htmlFor={id}>
        {labelValue}
      </label>
    </>
  )
}

export default CustomCheckBox;
