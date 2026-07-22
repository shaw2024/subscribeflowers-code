import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/useCart';
import './Cart.css';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <h1>Shopping Cart</h1>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/shop')} className="btn-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  {item.frequency && (
                    <p className="cart-item-frequency">Delivery: {item.frequency}</p>
                  )}
                </div>
                <div className="cart-item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">Included in subscription</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>Calculated at checkout</span>
            </div>
            <button onClick={handleCheckout} className="btn-checkout">
              Proceed to Checkout
            </button>
            <button onClick={clearCart} className="btn-clear">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
