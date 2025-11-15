import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
          Subscribe Flowers
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
