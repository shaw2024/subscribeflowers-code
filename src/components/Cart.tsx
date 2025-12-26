import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, CartItem } from '../context/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <button 
        className="cart-button" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Shopping cart"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M9 2L7 6H3L6 20H18L21 6H17L15 2H9Z" />
          <path d="M9 6V4H15V6" />
        </svg>
        {getCartCount() > 0 && (
          <span className="cart-badge">{getCartCount()}</span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="cart-overlay" onClick={() => setIsOpen(false)} />
          <div className="cart-dropdown">
            <div className="cart-header">
              <h3>Shopping Cart</h3>
              <button 
                className="cart-close" 
                onClick={() => setIsOpen(false)}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
              ) : (
                cartItems.map((item: CartItem) => (
                  <div key={`${item.id}-${item.frequency}`} className="cart-item">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                    )}
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-frequency">{item.frequency}</p>
                      <p className="cart-item-price">${item.price}/delivery</p>
                      
                      <div className="cart-item-quantity">
                        <button 
                          onClick={() => updateQuantity(`${item.id}-${item.frequency}`, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(`${item.id}-${item.frequency}`, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      className="cart-item-remove"
                      onClick={() => removeFromCart(`${item.id}-${item.frequency}`)}
                      aria-label="Remove item"
                    >
                      🗑
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total:</span>
                  <span className="cart-total-price">${getCartTotal().toFixed(2)}</span>
                </div>
                <button className="cart-checkout-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
