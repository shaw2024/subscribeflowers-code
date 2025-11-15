import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Shop.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface CartItem extends Product {
  quantity: number
}

const Shop = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: ''
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const products: Product[] = [
    { id: 1, name: 'Rose Bouquet', price: 45.00, image: '🌹' },
    { id: 2, name: 'Tulip Arrangement', price: 35.00, image: '🌷' },
    { id: 3, name: 'Sunflower Bouquet', price: 32.00, image: '🌻' },
    { id: 4, name: 'Lily Elegance', price: 42.00, image: '🌺' },
    { id: 5, name: 'Orchid Display', price: 55.00, image: '🌸' },
    { id: 6, name: 'Peony Collection', price: 48.00, image: '💐' },
    { id: 7, name: 'Carnation Classic', price: 28.00, image: '🏵️' },
    { id: 8, name: 'Daisy Delight', price: 25.00, image: '🌼' },
    { id: 9, name: 'Hydrangea Bouquet', price: 52.00, image: '💙' },
    { id: 10, name: 'Lavender Bundle', price: 30.00, image: '💜' },
    { id: 11, name: 'Gerbera Daisy Mix', price: 38.00, image: '🌸' },
    { id: 12, name: 'Iris Collection', price: 40.00, image: '💐' },
    { id: 13, name: 'Chrysanthemum Bunch', price: 33.00, image: '🌼' },
    { id: 14, name: 'Daffodil Spring', price: 27.00, image: '🌻' },
    { id: 15, name: 'Poppy Garden', price: 29.00, image: '🌺' },
    { id: 16, name: 'Jasmine Fragrance', price: 36.00, image: '🌸' },
    { id: 17, name: 'Magnolia Elegance', price: 50.00, image: '💐' },
    { id: 18, name: 'Anemone Arrangement', price: 34.00, image: '🏵️' },
    { id: 19, name: 'Gardenia Beauty', price: 44.00, image: '🌼' },
    { id: 20, name: 'Freesia Fresh', price: 31.00, image: '🌷' },
    { id: 21, name: 'Ranunculus Romance', price: 46.00, image: '🌹' },
    { id: 22, name: 'Calla Lily Luxury', price: 58.00, image: '🌺' },
    { id: 23, name: 'Zinnia Bright', price: 26.00, image: '🌻' },
    { id: 24, name: 'Dahlia Delight', price: 43.00, image: '🌸' },
    { id: 25, name: 'Sweet Pea Bundle', price: 24.00, image: '💐' }
  ]

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      ))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.email) {
      alert('Please fill in your name and email')
      return
    }

    console.log('Order placed:', {
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice()
    })

    setOrderPlaced(true)
    setTimeout(() => {
      setCart([])
      setShowCheckout(false)
      setOrderPlaced(false)
      setCustomerInfo({ name: '', email: '' })
    }, 3000)
  }

  return (
    <div className="shop">
      <section className="shop-hero">
        <h1>Our Flower Shop</h1>
        <p>Explore a variety of beautiful blooms to brighten your space</p>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div 
                  className="product-image"
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {product.image}
                </div>
                <h3 
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {product.name}
                </h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button 
                  className="buy-button"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <div className="cart-indicator" onClick={() => setShowCheckout(true)}>
          🛒 Cart: {cart.length} item{cart.length !== 1 ? 's' : ''} - ${getTotalPrice().toFixed(2)}
        </div>
      )}

      {showCheckout && (
        <div className="checkout-modal" onClick={() => setShowCheckout(false)}>
          <div className="checkout-content" onClick={(e) => e.stopPropagation()}>
            <h2>Your Cart</h2>
            {orderPlaced && (
              <div className="success-message">
                Order placed successfully! Thank you! ✓
              </div>
            )}
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <span className="item-image">{item.image}</span>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
            </div>
            <div className="customer-form">
              <input
                type="text"
                placeholder="Your Name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
              />
            </div>
            <div className="checkout-actions">
              <button className="checkout-btn" onClick={handleCheckout}>
                Place Order
              </button>
              <button className="cancel-btn" onClick={() => setShowCheckout(false)}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Shop
