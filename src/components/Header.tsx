import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Cart from './Cart'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isAuthenticated, customer } = useAuth()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">🌹</span>
          <span className="logo-text">Subscribe Flowers</span>
        </Link>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/shop" onClick={closeMenu}>Shop</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
        <div className="header-actions">
          {isAuthenticated ? (
            <>
              <Link to="/account" className="account-link" onClick={closeMenu}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="10" r="3"/>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                </svg>
                <span>{customer?.firstName}</span>
              </Link>
              <Cart />
            </>
          ) : (
            <Link to="/login" className="login-link" onClick={closeMenu}>
              Login
            </Link>
          )}
        </div>
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
