import React, { useState, useEffect } from 'react';
import Property from './components/Property';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import properties from './data/properties.json';
import './App.css';

const App = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    bedrooms: '',
    amenities: [],
  });
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    setFilteredProperties(properties);
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleAddToCart = (property) => {
    setCart(prevCart => {
      const existingProperty = prevCart.find(item => item.id === property.id);
      if (existingProperty) {
        return prevCart.map(item =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...property, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (propertyId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== propertyId));
  };

  const handleCheckout = (formData) => {
    console.log('Checkout data:', formData);
    alert('Booking confirmed! Thank you.');
    setCart([]);
    setShowCheckout(false);
  };

  useEffect(() => {
    let filtered = properties;

    if (filters.location) {
      filtered = filtered.filter(property => property.location === filters.location);
    }

    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      filtered = filtered.filter(property => {
        const price = parseInt(property.price.replace(/\D/g, ''));
        return price >= min && price <= max;
      });
    }

    if (filters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms === parseInt(filters.bedrooms));
    }

    if (filters.amenities.length > 0) {
      filtered = filtered.filter(property => 
        filters.amenities.every(amenity => property.amenities.includes(amenity))
      );
    }

    setFilteredProperties(filtered);
  }, [filters]);

  return (
    <div className="App">
      <h1>Property Listings</h1>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <div className="property-list">
        {filteredProperties.map(property => (
          <Property key={property.id} property={property} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      {cart.length > 0 && <button onClick={() => setShowCheckout(true)}>Proceed to Checkout</button>}
      {showCheckout && <Checkout cart={cart} onCheckout={handleCheckout} />}
    </div>
  );
};

export default App;
