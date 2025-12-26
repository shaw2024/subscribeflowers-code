import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Account.css';

const Account: React.FC = () => {
  const navigate = useNavigate();
  const { customer, isAuthenticated, logout, getRemainingFlowers } = useAuth();

  if (!isAuthenticated || !customer) {
    navigate('/login');
    return null;
  }

  const usagePercentage = (customer.usedThisQuarter / customer.subscription.quarterlyLimit) * 100;
  const remainingFlowers = getRemainingFlowers();

  const handleLogout = () => {
    logout();
    navigate('/');
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
              <button className="btn-edit">Edit Address</button>
            </div>
          </div>

          {/* Subscription Plan */}
          <div className="account-card subscription-card">
            <div className="card-header">
              <h2>Subscription Plan</h2>
            </div>
            <div className="card-content">
              <div className="plan-name">{customer.subscription.name}</div>
              <div className="plan-price">${customer.subscription.pricePerMonth}/month</div>
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
      </div>
    </div>
  );
};

export default Account;
