import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductImage } from '../data/images'
import './Shop.css'

interface Product {
  id: number
  name: string
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
    { id: 1, name: 'Roses', image: getProductImage('Roses') },
    { id: 2, name: 'Tulips', image: getProductImage('Tulips') },
    { id: 3, name: 'Sunflowers', image: getProductImage('Sunflowers') },
    { id: 4, name: 'Lilies', image: getProductImage('Lilies') },
    { id: 5, name: 'Orchids', image: getProductImage('Orchids') },
    { id: 6, name: 'Peonies', image: getProductImage('Peonies') },
    { id: 7, name: 'Carnations', image: getProductImage('Carnations') },
    { id: 8, name: 'Daisies', image: getProductImage('Daisies') },
    { id: 9, name: 'Hydrangeas', image: getProductImage('Hydrangeas') },
    { id: 10, name: 'Lavender', image: getProductImage('Lavender') },
    { id: 11, name: 'Gerbera Daisies', image: getProductImage('GerberaDaisies') },
    { id: 12, name: 'Irises', image: getProductImage('Irises') },
    { id: 13, name: 'Chrysanthemums', image: getProductImage('Chrysanthemums') },
    { id: 14, name: 'Daffodils', image: getProductImage('Daffodils') },
    { id: 15, name: 'Poppies', image: getProductImage('Poppies') },
    { id: 16, name: 'Jasmine', image: getProductImage('Jasmine') },
    { id: 17, name: 'Magnolias', image: getProductImage('Magnolias') },
    { id: 18, name: 'Anemones', image: getProductImage('Anemones') },
    { id: 19, name: 'Gardenias', image: getProductImage('Gardenias') },
    { id: 20, name: 'Freesias', image: getProductImage('Freesias') },
    { id: 21, name: 'Ranunculus', image: getProductImage('Ranunculus') },
    { id: 22, name: 'Calla Lilies', image: getProductImage('CallaLilies') },
    { id: 23, name: 'Zinnias', image: getProductImage('Zinnias') },
    { id: 24, name: 'Dahlias', image: getProductImage('Dahlias') },
    { id: 25, name: 'Sweet Peas', image: getProductImage('SweetPeas') }
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
        quantity: item.quantity
      }))
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
                <img 
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                />
                <h3 
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {product.name}
                </h3>
                <button 
                  className="buy-button"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Flowers
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <div className="cart-indicator" onClick={() => setShowCheckout(true)}>
          🛒 Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}
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
                  <img src={item.image} alt={item.name} className="item-image" style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                </div>
              ))}
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
