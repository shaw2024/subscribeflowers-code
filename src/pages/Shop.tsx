import { useState } from 'react'
import { saveOrder } from '../firebase/database'
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
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: ''
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const products: Product[] = [
    { id: 1, name: 'Rose Bouquet', price: 30.00, image: '🌹' },
    { id: 2, name: 'Tulip Mix', price: 25.00, image: '🌷' },
    { id: 3, name: 'Sunflower Bouquet', price: 22.00, image: '🌻' },
    { id: 4, name: 'Daisy Arrangement', price: 20.00, image: '🌼' },
    { id: 5, name: 'Lily Bouquet', price: 35.00, image: '🌺' },
    { id: 6, name: 'Orchid Pot', price: 40.00, image: '🌸' },
    { id: 7, name: 'Peony Bouquet', price: 38.00, image: '💐' },
    { id: 8, name: 'Carnation Mix', price: 18.00, image: '🏵️' }
  ]

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

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

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email) {
      alert('Please fill in your name and email')
      return
    }

    const orderData = {
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice()
    }

    const result = await saveOrder(orderData)
    
    if (result.success) {
      setOrderPlaced(true)
      setTimeout(() => {
        setCart([])
        setShowCheckout(false)
        setOrderPlaced(false)
        setCustomerInfo({ name: '', email: '' })
      }, 3000)
    } else {
      alert('Error placing order. Please try again.')
    }
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
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button 
                  className="buy-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
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
