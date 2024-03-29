import React from 'react';
import PropTypes from 'prop-types';
import CustomCheckBox from '../../../components/CustomCheckBox';
import styles from './FilterPanel.module.scss';

const FilterPanel = ({ location, history }) => (
  <div className={styles.filterContainer}>
    <div className={styles.filters}>
      <div className={styles.filterWrapper}>
        <h2 className={styles.filterTitle}>Colors</h2>
        <div className={styles.colors}>
          <CustomCheckBox
            location={location}
            history={history}
            dataSearchKey="color"
            dataSearchValue="yellow"
            id="color4"
            ariaLabel="Filter by yellow color"
          />
          <CustomCheckBox
            location={location}
            history={history}
            dataSearchKey="color"
            dataSearchValue="orange"
            id="color5"
            ariaLabel="Filter by orange color"
          />
          <CustomCheckBox
            location={location}
            history={history}
            dataSearchKey="color"
            dataSearchValue="red"
            id="color1"
            ariaLabel="Filter by red color"
          />
          <CustomCheckBox
            location={location}
            history={history}
            dataSearchKey="color"
            dataSearchValue="pink"
            id="color3"
            ariaLabel="Filter by pink color"
          />
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <h2 className={styles.filterTitle}>Occasions</h2>
        <CustomCheckBox
          location={location}
          history={history}
          dataSearchKey="occasion"
          dataSearchValue="birthday"
          id="birthdayOccasion"
          labelValue="Birthday"
        />
        <CustomCheckBox
          location={location}
          history={history}
          dataSearchKey="occasion"
          dataSearchValue="love"
          id="loveOccasion"
          labelValue="Love"
        />
        <CustomCheckBox
          location={location}
          history={history}
          dataSearchKey="occasion"
          dataSearchValue="decoration"
          id="decorationOccasion"
          labelValue="Decoration"
        />
      </div>
      <div className={styles.filterWrapper}>
        <h2 className={styles.filterTitle}>Price</h2>
        <CustomCheckBox
          location={location}
          history={history}
          dataSearchKey="price"
          dataSearchValue="under15"
          id="priceRange1"
          labelValue="0 - 15 €"
        />
        <CustomCheckBox
          location={location}
          history={history}
          dataSearchKey="price"
          dataSearchValue="between15and40"
          id="priceRange2"
          labelValue="15 - 40 €"
        />
        <CustomCheckBox
          location={location}
          history={history}
          dataSearchKey="price"
          dataSearchValue="over40"
          id="priceRange3"
          labelValue="Over 40 €"
        />
      </div>
    </div>
  </div>
);

FilterPanel.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default FilterPanel;
