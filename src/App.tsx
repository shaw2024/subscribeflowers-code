import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Account from './pages/Account'
import './App.css'

function App() {
  return (
    <Router basename="/subscribeflowers-code">
      <AuthProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
