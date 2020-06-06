import React from 'react';
import CustomCheckBox from './CustomCheckBox';

const FilterPanel = ({ location, history }) => {
  return (
    <form className="filterForm">
      <div className="filters">
        <div className="filterWrapper">
          <h2 className="FilterTitle">Colors</h2>
          <div className="colors">
            <CustomCheckBox
              className="colorInput"
              location={location}
              history={history}
              dataSearchKey="color"
              dataSearchValue="yellow"
              id="color4"
              ariaLabel="Filter by orange color"
            />
            <CustomCheckBox
              className="colorInput"
              location={location}
              history={history}
              dataSearchKey="color"
              dataSearchValue="orange"
              id="color5"
              ariaLabel="Filter by orange color"
            />
            <CustomCheckBox
              className="colorInput"
              location={location}
              history={history}
              dataSearchKey="color"
              dataSearchValue="red"
              id="color1"
              ariaLabel="Filter by red color"
            />
            <CustomCheckBox
              className="colorInput"
              location={location}
              history={history}
              dataSearchKey="color"
              dataSearchValue="pink"
              id="color3"
              ariaLabel="Filter by pink color"
            />
          </div>
        </div>
        <div className="filterWrapper">
          <h2 className="FilterTitle">Occasions</h2>
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
          <h2 className="FilterTitle">Price</h2>
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
    </form>
  )
}

export default FilterPanel;
