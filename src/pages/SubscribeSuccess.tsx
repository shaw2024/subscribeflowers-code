import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SubscribeSuccess.css';

const SubscribeSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state?.orderData;
  const email = location.state?.email;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>

        <h1>Subscription Successful! 🎉</h1>
        <p className="success-message">
          Thank you for subscribing to Subscribe Flowers!
        </p>

        <div className="confirmation-details">
          <div className="detail-card">
            <h3>Order Confirmation</h3>
            <p className="order-id">Order ID: {orderData.orderId}</p>
            <p className="email-sent">
              📧 A confirmation email has been sent to <strong>{email}</strong>
            </p>
          </div>

          <div className="detail-card">
            <h3>Subscription Details</h3>
            <div className="details-grid">
              <div className="detail-row">
                <span className="label">Plan:</span>
                <span className="value">{orderData.plan.name}</span>
              </div>
              <div className="detail-row">
                <span className="label">Price:</span>
                <span className="value">{orderData.plan.price}</span>
              </div>
              <div className="detail-row">
                <span className="label">Payment Method:</span>
                <span className="value">{orderData.payment.cardType} •••• {orderData.payment.last4}</span>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <h3>Shipping Address</h3>
            <div className="address">
              <p>{orderData.customer.name}</p>
              <p>{orderData.customer.address.street}</p>
              <p>
                {orderData.customer.address.city}, {orderData.customer.address.state} {orderData.customer.address.zipCode}
              </p>
            </div>
          </div>

          <div className="detail-card features">
            <h3>What's Next?</h3>
            <ul>
              {orderData.plan.features.map((feature: string, index: number) => (
                <li key={index}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="info-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <div>
              <h4>First Delivery</h4>
              <p>You will receive your first bouquet within 5-7 business days. We'll send you tracking information via email.</p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={() => navigate('/')} className="btn-secondary">
            Back to Home
          </button>
          <button onClick={() => navigate('/account')} className="btn-primary">
            View My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSuccess;
