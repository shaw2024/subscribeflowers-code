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
    { id: 1, name: 'Roses', price: 45.00, image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop' },
    { id: 2, name: 'Tulips', price: 35.00, image: 'https://images.unsplash.com/photo-1524386416438-98b9b2d4b433?w=400&h=400&fit=crop' },
    { id: 3, name: 'Sunflowers', price: 32.00, image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=400&h=400&fit=crop' },
    { id: 4, name: 'Lilies', price: 42.00, image: 'https://images.unsplash.com/photo-1600378393196-85a37161ff42?w=400&h=400&fit=crop' },
    { id: 5, name: 'Orchids', price: 55.00, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=400&fit=crop' },
    { id: 6, name: 'Peonies', price: 48.00, image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&h=400&fit=crop' },
    { id: 7, name: 'Carnations', price: 28.00, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop' },
    { id: 8, name: 'Daisies', price: 25.00, image: 'https://images.unsplash.com/photo-1463734043682-e2e46d93e1e8?w=400&h=400&fit=crop' },
    { id: 9, name: 'Hydrangeas', price: 52.00, image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&h=400&fit=crop' },
    { id: 10, name: 'Lavender', price: 30.00, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400&h=400&fit=crop' },
    { id: 11, name: 'Gerbera Daisies', price: 38.00, image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=400&fit=crop' },
    { id: 12, name: 'Irises', price: 40.00, image: 'https://images.unsplash.com/photo-1566049933115-4e8c0eb36e7e?w=400&h=400&fit=crop' },
    { id: 13, name: 'Chrysanthemums', price: 33.00, image: 'https://images.unsplash.com/photo-1570842904084-e19ea7e2c9ce?w=400&h=400&fit=crop' },
    { id: 14, name: 'Daffodils', price: 27.00, image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=400&fit=crop' },
    { id: 15, name: 'Poppies', price: 29.00, image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=400&fit=crop' },
    { id: 16, name: 'Jasmine', price: 36.00, image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop' },
    { id: 17, name: 'Magnolias', price: 50.00, image: 'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=400&h=400&fit=crop' },
    { id: 18, name: 'Anemones', price: 34.00, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop' },
    { id: 19, name: 'Gardenias', price: 44.00, image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop' },
    { id: 20, name: 'Freesias', price: 31.00, image: 'https://images.unsplash.com/photo-1582735689277-d9b78bddf3d4?w=400&h=400&fit=crop' },
    { id: 21, name: 'Ranunculus', price: 46.00, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop' },
    { id: 22, name: 'Calla Lilies', price: 58.00, image: 'https://images.unsplash.com/photo-1587845706539-c82f03c4e3aa?w=400&h=400&fit=crop' },
    { id: 23, name: 'Zinnias', price: 26.00, image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=400&fit=crop' },
    { id: 24, name: 'Dahlias', price: 43.00, image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop' },
    { id: 25, name: 'Sweet Peas', price: 24.00, image: 'https://images.unsplash.com/photo-1587845706539-c82f03c4e3aa?w=400&h=400&fit=crop' }
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
