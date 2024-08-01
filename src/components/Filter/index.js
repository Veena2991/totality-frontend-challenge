import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Filter = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter">
      <div className="filter-group">
        <label>Location</label>
        <input type="text" name="location" value={filters.location} onChange={handleChange} />
      </div>
      <div className="filter-group">
        <label>Price</label>
        <input type="text" name="price" value={filters.price} onChange={handleChange} />
      </div>
      <div className="filter-group">
        <label>Bedrooms</label>
        <input type="text" name="bedrooms" value={filters.bedrooms} onChange={handleChange} />
      </div>
      <div className="filter-group">
        <label>Amenities</label>
        <input type="text" name="amenities" value={filters.amenities.join(', ')} onChange={(e) => onFilterChange('amenities', e.target.value.split(',').map(item => item.trim()))} />
      </div>
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.shape({
    location: PropTypes.string,
    price: PropTypes.string,
    bedrooms: PropTypes.string,
    amenities: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
