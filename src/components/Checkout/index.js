import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Checkout = ({ cart, onCheckout }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => field === '')) {
      alert('Please fill out all fields');
    } else {
      onCheckout(formData);
    }
  };

  const totalCost = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/\D/g, ''));
    return total + (price * item.quantity);
  }, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>
        <h3>Total Cost: ${totalCost.toLocaleString()}</h3>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default Checkout;
