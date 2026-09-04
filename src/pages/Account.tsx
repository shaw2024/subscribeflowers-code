import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { useCart } from '../context/useCart';
import { getProductImage } from '../data/images';
import './Account.css';

const Account: React.FC = () => {
  const navigate = useNavigate();
  const { customer, isAuthenticated, isLoading, logout, getRemainingFlowers, updateAddress } = useAuth();
  const { addToCart } = useCart();
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressForm, setAddressForm] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  // Available flowers for subscription customers
  const availableFlowers = [
    { id: '1', name: 'Roses', price: 0, image: getProductImage('Roses') },
    { id: '2', name: 'Tulips', price: 0, image: getProductImage('Tulips') },
    { id: '3', name: 'Sunflowers', price: 0, image: getProductImage('Sunflowers') },
    { id: '4', name: 'Lilies', price: 0, image: getProductImage('Lilies') },
    { id: '5', name: 'Orchids', price: 0, image: getProductImage('Orchids') },
    { id: '6', name: 'Peonies', price: 0, image: getProductImage('Peonies') },
    { id: '7', name: 'Carnations', price: 0, image: getProductImage('Carnations') },
    { id: '8', name: 'Daisies', price: 0, image: getProductImage('Daisies') },
    { id: '9', name: 'Hydrangeas', price: 0, image: getProductImage('Hydrangeas') },
    { id: '10', name: 'Lavender', price: 0, image: getProductImage('Lavender') },
    { id: '11', name: 'Gerbera Daisies', price: 0, image: getProductImage('Gerbera Daisies') },
  ];

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated || !customer) {
    navigate('/login');
    return null;
  }

  const usagePercentage = (customer.usedThisQuarter / customer.subscription.quarterlyLimit) * 100;
  const remainingFlowers = getRemainingFlowers();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleEditAddress = () => {
    setAddressForm(customer.shippingAddress);
    setIsEditingAddress(true);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateAddress(addressForm);
    setIsEditingAddress(false);
  };

  const handleCancelEdit = () => {
    setIsEditingAddress(false);
  };

  const handleAddToCart = (flower: typeof availableFlowers[0]) => {
    if (remainingFlowers > 0) {
      addToCart({
        id: flower.id,
        name: flower.name,
        price: flower.price,
        quantity: 1,
        image: flower.image,
      });
      alert(`${flower.name} added to cart!`);
    } else {
      alert('You have reached your quarterly limit. Please upgrade your plan or wait for next quarter.');
    }
  };

  return (
    <div className="account-page">
      <div className="account-container">
        <div className="account-header">
          <div>
            <h1>Welcome back, {customer.firstName}!</h1>
            <p className="account-subtitle">Manage your flower subscription</p>
          </div>
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        </div>

        <div className="account-grid">
          {/* Profile Info */}
          <div className="account-card profile-card">
            <div className="card-header">
              <h2>Profile Information</h2>
            </div>
            <div className="card-content">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">{customer.firstName} {customer.lastName}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{customer.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Customer ID:</span>
                <span className="info-value">#{customer.id}</span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="account-card address-card">
            <div className="card-header">
              <h2>Shipping Address</h2>
            </div>
            <div className="card-content">
              <p className="address-line">{customer.shippingAddress.street}</p>
              <p className="address-line">
                {customer.shippingAddress.city}, {customer.shippingAddress.state} {customer.shippingAddress.zipCode}
              </p>
              <p className="address-line">{customer.shippingAddress.country}</p>
              <button className="btn-edit" onClick={handleEditAddress}>Edit Address</button>
            </div>
          </div>

          {/* Subscription Plan */}
          <div className="account-card subscription-card">
            <div className="card-header">
              <h2>Subscription Plan</h2>
            </div>
            <div className="card-content">
              <div className="plan-name">{customer.subscription.name}</div>
              <div className="plan-details">
                <p>Quarterly Allowance: <strong>{customer.subscription.quarterlyLimit} bouquets</strong></p>
                <p>Current Quarter: <strong>{customer.currentQuarter}</strong></p>
              </div>
            </div>
          </div>

          {/* Usage Meter */}
          <div className="account-card usage-card full-width">
            <div className="card-header">
              <h2>Quarterly Usage</h2>
              <span className="usage-count">
                {customer.usedThisQuarter} of {customer.subscription.quarterlyLimit} used
              </span>
            </div>
            <div className="card-content">
              <div className="usage-stats">
                <div className="stat-item">
                  <div className="stat-value">{remainingFlowers}</div>
                  <div className="stat-label">Remaining</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{customer.usedThisQuarter}</div>
                  <div className="stat-label">Used</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{Math.round(usagePercentage)}%</div>
                  <div className="stat-label">Utilized</div>
                </div>
              </div>

              <div className="usage-bar-container">
                <div className="usage-bar">
                  <div 
                    className="usage-bar-fill" 
                    style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                  >
                    <span className="usage-bar-label">
                      {customer.usedThisQuarter}/{customer.subscription.quarterlyLimit}
                    </span>
                  </div>
                </div>
              </div>

              {remainingFlowers > 0 ? (
                <div className="usage-message success">
                  ✓ You have {remainingFlowers} bouquet{remainingFlowers !== 1 ? 's' : ''} remaining this quarter
                </div>
              ) : (
                <div className="usage-message warning">
                  ⚠ You've reached your quarterly limit. Upgrade your plan or wait for next quarter.
                </div>
              )}
            </div>
          </div>

          {/* Available Flowers */}
          <div className="account-card flowers-card full-width">
            <div className="card-header">
              <h2>Available Flowers</h2>
              <span className="usage-count">
                {remainingFlowers > 0 ? `${remainingFlowers} bouquet${remainingFlowers !== 1 ? 's' : ''} available` : 'Limit reached'}
              </span>
            </div>
            <div className="card-content">
              {remainingFlowers === 0 ? (
                <div className="no-flowers-message">
                  <p>⚠ You've used all your bouquets for this quarter.</p>
                  <p>Upgrade your plan or wait for the next quarter to order more flowers.</p>
                </div>
              ) : (
                <div className="flowers-grid">
                  {availableFlowers.map((flower) => (
                    <div key={flower.id} className="flower-item">
                      <img src={flower.image} alt={flower.name} className="flower-image" />
                      <div className="flower-info">
                        <h3 className="flower-name">{flower.name}</h3>
                        <p className="flower-price">Included in subscription</p>
                        <button
                          className="btn-add-to-cart"
                          onClick={() => handleAddToCart(flower)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="checkout-action">
                <button
                  className="btn-checkout"
                  onClick={() => navigate('/checkout')}
                  disabled={remainingFlowers === 0}
                >
                  🛒 View Cart & Checkout
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="account-card actions-card full-width">
            <div className="card-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="card-content">
              <div className="action-buttons">
                <button 
                  className="btn-action primary"
                  onClick={() => navigate('/shop')}
                  disabled={remainingFlowers === 0}
                >
                  🛍️ Shop Flowers
                  {remainingFlowers > 0 && <span className="free-badge">FREE SHIPPING</span>}
                </button>
                <button className="btn-action secondary" onClick={() => alert('Order history feature coming soon!')}>
                  📦 Order History
                </button>
                <button className="btn-action secondary" onClick={() => alert('Plan upgrade feature coming soon!')}>
                  ⬆️ Upgrade Plan
                </button>
                <button className="btn-action secondary" onClick={() => navigate('/contact')}>
                  💬 Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Address Modal */}
        {isEditingAddress && (
          <>
            <div className="modal-overlay" onClick={handleCancelEdit} />
            <div className="modal-content">
              <div className="modal-header">
                <h2>Edit Shipping Address</h2>
                <button className="modal-close" onClick={handleCancelEdit}>✕</button>
              </div>
              <form onSubmit={handleSaveAddress} className="address-form">
                <div className="form-group">
                  <label htmlFor="street">Street Address *</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={addressForm.street}
                    onChange={handleAddressChange}
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
                      value={addressForm.city}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={addressForm.state}
                      onChange={handleAddressChange}
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
                      value={addressForm.zipCode}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={addressForm.country}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                </div>
                <div className="modal-actions">
                  <button type="button" onClick={handleCancelEdit} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Save Address
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Account;
