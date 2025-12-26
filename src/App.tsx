import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
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
import './App.css'

function App() {
  return (
    <Router basename="/subscribeflowers-code">
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
    </Router>
  )
}

export default App
