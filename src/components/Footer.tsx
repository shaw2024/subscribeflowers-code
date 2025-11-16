import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/subscribeflower" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://www.instagram.com/subscribeflower" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
          </div>
          <div className="social-handles">
            <p>@subscribeflower</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Subscribe Flowers. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
