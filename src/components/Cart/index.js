import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Cart = ({ cart, onRemoveFromCart }) => {
  const totalCost = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/\D/g, ''));
    return total + (price * item.quantity);
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No properties in the cart.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price} x {item.quantity}</p>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Cost: ${totalCost.toLocaleString()}</h3>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
