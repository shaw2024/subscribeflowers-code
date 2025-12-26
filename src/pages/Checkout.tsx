import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Checkout.css';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  deliveryDate: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { isAuthenticated, customer, updateUsage } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate minimum delivery date (tomorrow)
  const getMinDeliveryDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState<CustomerInfo>({
    firstName: customer?.firstName || '',
    lastName: customer?.lastName || '',
    email: customer?.email || '',
    phone: '',
    address: customer?.shippingAddress.street || '',
    city: customer?.shippingAddress.city || '',
    state: customer?.shippingAddress.state || '',
    zipCode: customer?.shippingAddress.zipCode || '',
    country: customer?.shippingAddress.country || 'United States',
    deliveryDate: getMinDeliveryDate(),
  });

  const SHIPPING_COST = 15.00; // Shipping cost for out-of-state deliveries
  const CALIFORNIA_STATES = ['CA', 'California'];

  const calculateShipping = (): number => {
    // Free shipping if authenticated (subscription member)
    if (isAuthenticated) return 0;
    
    // Free shipping for California deliveries
    const isCaliforniaDelivery = CALIFORNIA_STATES.some(
      ca => formData.state.toUpperCase().includes(ca.toUpperCase())
    );
    
    return isCaliforniaDelivery ? 0 : SHIPPING_COST;
  };

  const getGrandTotal = (): number => {
    // For subscription customers, the total is always $0
    if (isAuthenticated && customer) {
      return 0;
    }
    return getCartTotal() + calculateShipping();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Generate unique order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    
    // Prepare order data
    const orderData = {
      orderNumber,
      customerInfo: formData,
      items: cartItems,
      subtotal: getCartTotal(),
      shipping: calculateShipping(),
      total: getGrandTotal(),
      isSubscriptionOrder: isAuthenticated && customer,
      timestamp: new Date().toISOString(),
      ...(isAuthenticated && customer && {
        customerId: customer.id,
        customerEmail: customer.email,
      })
    };

    // Simulate API call to save order to database
    setTimeout(() => {
      console.log('=== ORDER SUBMITTED TO DATABASE ===');
      console.log('Order Data:', orderData);
      
      // Update subscription usage if customer is logged in
      if (isAuthenticated && customer) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        updateUsage(totalItems);
        
        // Simulate sending email with order number
        console.log('=== EMAIL SENT ===');
        console.log(`To: ${customer.email}`);
        console.log(`Subject: Order Confirmation - ${orderNumber}`);
        console.log(`Body: Thank you for your order! Your order number is ${orderNumber}. Your subscription flowers will be delivered on ${formData.deliveryDate}.`);
        
        alert(`✅ Order placed successfully!\n\nOrder Number: ${orderNumber}\n\nA confirmation email has been sent to ${customer.email}\n\nTotal Charge: $${getGrandTotal().toFixed(2)} (Covered by subscription)`);
      } else {
        // For non-subscription customers, would redirect to Stripe
        console.log('=== EMAIL SENT ===');
        console.log(`To: ${formData.email}`);
        console.log(`Subject: Order Confirmation - ${orderNumber}`);
        console.log(`Body: Thank you for your order! Your order number is ${orderNumber}. Total: $${getGrandTotal().toFixed(2)}`);
        
        alert(`Payment gateway integration coming soon! This will connect to Stripe.\n\nOrder Number: ${orderNumber}`);
      }
      
      clearCart();
      navigate(isAuthenticated ? '/account' : '/');
      setIsProcessing(false);
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="empty-checkout">
            <h2>Your cart is empty</h2>
            <button onClick={() => navigate('/shop')} className="btn-primary">
              Go to Shop
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout</h1>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-section">
                <h2>Contact Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <h2>Shipping Address</h2>
                <div className="form-group">
                  <label htmlFor="address">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="deliveryDate">Delivery Date *</label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    min={getMinDeliveryDate()}
                    required
                  />
                  <p className="field-hint">Select your preferred delivery date (orders must be placed at least 1 day in advance)</p>
                </div>
              </div>

              <div className="form-section payment-note">
                <h2>Payment</h2>
                <p className="stripe-note">
                  🔒 Secure payment processing by Stripe
                </p>
                <p className="info-text">
                  After submitting your information, you'll be redirected to our secure payment processor to complete your purchase.
                </p>
              </div>

              <button 
                type="submit" 
                className="btn-submit-checkout"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Submit & Continue to Payment'}
              </button>
            </form>
          </div>

          <div className="order-summary-section">
            <div className="order-summary">
              <h2>Order Summary</h2>
              
              <div className="summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.name} />
                    <div className="summary-item-details">
                      <h4>{item.name}</h4>
                      {item.frequency && (
                        <p className="frequency">{item.frequency}</p>
                      )}
                      <p className="quantity">Qty: {item.quantity}</p>
                    </div>
                    <p className="item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="summary-totals">
                <div className="summary-row">
                  <span>Subtotal</span>
                  {isAuthenticated && customer ? (
                    <span className="strike-through">${getCartTotal().toFixed(2)}</span>
                  ) : (
                    <span>${getCartTotal().toFixed(2)}</span>
                  )}
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  {calculateShipping() === 0 ? (
                    <span className="free-shipping">FREE ✓</span>
                  ) : (
                    <span>${calculateShipping().toFixed(2)}</span>
                  )}
                </div>
                {isAuthenticated && customer && (
                  <div className="summary-note subscription-note">
                    🎉 Covered by your subscription - No charge!
                  </div>
                )}
                {isAuthenticated && !customer && (
                  <div className="summary-note">
                    🎉 Free shipping with your subscription!
                  </div>
                )}
                {!isAuthenticated && calculateShipping() === 0 && formData.state && (
                  <div className="summary-note">
                    ✓ Free shipping for California deliveries!
                  </div>
                )}
                {!isAuthenticated && calculateShipping() > 0 && formData.state && (
                  <div className="summary-note shipping-info">
                    ℹ️ ${SHIPPING_COST.toFixed(2)} shipping fee applies for out-of-state deliveries
                  </div>
                )}
                <div className="summary-row total">
                  <span>Total</span>
                  <span className={isAuthenticated && customer ? 'zero-total' : ''}>
                    ${getGrandTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
