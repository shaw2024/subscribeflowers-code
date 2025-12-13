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
    { id: 1, name: 'Roses', price: 45.00, image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, name: 'Tulips', price: 35.00, image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, name: 'Sunflowers', price: 32.00, image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, name: 'Lilies', price: 42.00, image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, name: 'Orchids', price: 55.00, image: 'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, name: 'Peonies', price: 48.00, image: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 7, name: 'Carnations', price: 28.00, image: 'https://images.pexels.com/photos/1458603/pexels-photo-1458603.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 8, name: 'Daisies', price: 25.00, image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 9, name: 'Hydrangeas', price: 52.00, image: 'https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 10, name: 'Lavender', price: 30.00, image: 'https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 11, name: 'Gerbera Daisies', price: 38.00, image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 12, name: 'Irises', price: 40.00, image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 13, name: 'Chrysanthemums', price: 33.00, image: 'https://images.pexels.com/photos/1301862/pexels-photo-1301862.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 14, name: 'Daffodils', price: 27.00, image: 'https://images.pexels.com/photos/54320/pexels-photo-54320.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 15, name: 'Poppies', price: 29.00, image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 16, name: 'Jasmine', price: 36.00, image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 17, name: 'Magnolias', price: 50.00, image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 18, name: 'Anemones', price: 34.00, image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 19, name: 'Gardenias', price: 44.00, image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 20, name: 'Freesias', price: 31.00, image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 21, name: 'Ranunculus', price: 46.00, image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 22, name: 'Calla Lilies', price: 58.00, image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 23, name: 'Zinnias', price: 26.00, image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 24, name: 'Dahlias', price: 43.00, image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 25, name: 'Sweet Peas', price: 24.00, image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400' }
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
