import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Property = ({ property, onAddToCart }) => (
  <div className="property">
    <img src={property.image} alt={property.name} className="property-image" />
    <div className="property-details">
      <h2 className="property-title">{property.name}</h2>
      <p className="property-description">{property.description}</p>
      <p className="property-price">{property.price}</p>
      <button onClick={() => onAddToCart(property)}>Add to Cart</button>
    </div>
  </div>
);

Property.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Property;
