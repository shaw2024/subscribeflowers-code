import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    { id: 1, name: 'Roses', image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 2, name: 'Tulips', image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 3, name: 'Sunflowers', image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 4, name: 'Lilies', image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 5, name: 'Orchids', image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 6, name: 'Peonies', image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 7, name: 'Carnations', image: 'https://images.pexels.com/photos/1458603/pexels-photo-1458603.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 8, name: 'Daisies', image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 9, name: 'Hydrangeas', image: 'https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 10, name: 'Lavender', image: 'https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
 
 
 
 
 
 
 
    { id: 11, name: 'Gerbera Daisies', image: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 12, name: 'Irises', image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 13, name: 'Chrysanthemums', image: 'https://images.pexels.com/photos/1301862/pexels-photo-1301862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 14, name: 'Daffodils', image: 'https://images.pexels.com/photos/54320/pexels-photo-54320.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 15, name: 'Poppies', image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 16, name: 'Jasmine', image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 17, name: 'Magnolias', image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 18, name: 'Anemones', image: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 19, name: 'Gardenias', image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 20, name: 'Freesias', image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 21, name: 'Ranunculus', image: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 22, name: 'Calla Lilies', image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 23, name: 'Zinnias', image: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 24, name: 'Dahlias', image: 'https://images.pexels.com/photos/1301862/pexels-photo-1301862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 25, name: 'Sweet Peas', image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' }
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
