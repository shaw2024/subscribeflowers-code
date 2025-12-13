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
    { id: 1, name: 'Roses', price: 45.00, image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400' },
    { id: 2, name: 'Tulips', price: 35.00, image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400' },
    { id: 3, name: 'Sunflowers', price: 32.00, image: 'https://images.unsplash.com/photo-1597848212624-e530bb5d9f0b?w=400' },
    { id: 4, name: 'Lilies', price: 42.00, image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400' },
    { id: 5, name: 'Orchids', price: 55.00, image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=400' },
    { id: 6, name: 'Peonies', price: 48.00, image: 'https://images.unsplash.com/photo-1588453862014-cd1b9ad06a12?w=400' },
    { id: 7, name: 'Carnations', price: 28.00, image: 'https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=400' },
    { id: 8, name: 'Daisies', price: 25.00, image: 'https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400' },
    { id: 9, name: 'Hydrangeas', price: 52.00, image: 'https://images.unsplash.com/photo-1594735373122-f94df3a3f7d8?w=400' },
    { id: 10, name: 'Lavender', price: 30.00, image: 'https://images.unsplash.com/photo-1611419010196-842f31fa36fa?w=400' },
    { id: 11, name: 'Gerbera Daisies', price: 38.00, image: 'https://images.unsplash.com/photo-1606041011872-596597976b25?w=400' },
    { id: 12, name: 'Irises', price: 40.00, image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400' },
    { id: 13, name: 'Chrysanthemums', price: 33.00, image: 'https://images.unsplash.com/photo-1604437237951-2b7f218bdd7c?w=400' },
    { id: 14, name: 'Daffodils', price: 27.00, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400' },
    { id: 15, name: 'Poppies', price: 29.00, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400' },
    { id: 16, name: 'Jasmine', price: 36.00, image: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=400' },
    { id: 17, name: 'Magnolias', price: 50.00, image: 'https://images.unsplash.com/photo-1583573607873-8b1e0b7e4eb1?w=400' },
    { id: 18, name: 'Anemones', price: 34.00, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400' },
    { id: 19, name: 'Gardenias', price: 44.00, image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400' },
    { id: 20, name: 'Freesias', price: 31.00, image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400' },
    { id: 21, name: 'Ranunculus', price: 46.00, image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400' },
    { id: 22, name: 'Calla Lilies', price: 58.00, image: 'https://images.unsplash.com/photo-1573824765810-9f2c2fb3e8c7?w=400' },
    { id: 23, name: 'Zinnias', price: 26.00, image: 'https://images.unsplash.com/photo-1597307001544-c3ce03ed6061?w=400' },
    { id: 24, name: 'Dahlias', price: 43.00, image: 'https://images.unsplash.com/photo-1569353250681-a7a7d1a1623b?w=400' },
    { id: 25, name: 'Sweet Peas', price: 24.00, image: 'https://images.unsplash.com/photo-1488923558943-6a95e285660f?w=400' }
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
                  View Details
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
