import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetail.css'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  colors: string[]
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)

  const allProducts: Product[] = [
    { id: 1, name: 'Roses', price: 45.00, image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400', description: 'Classic roses, the symbol of love and beauty. Perfect for any romantic occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Orange', 'Lavender'] },
    { id: 2, name: 'Tulips', price: 35.00, image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400', description: 'Elegant tulips representing perfect love. Ideal for spring celebrations.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple', 'Orange'] },
    { id: 3, name: 'Sunflowers', price: 32.00, image: 'https://images.unsplash.com/photo-1597848212624-e530bb5d9f0b?w=400', description: 'Bright and cheerful sunflowers that bring warmth to any space.', colors: ['Yellow', 'Orange', 'Red'] },
    { id: 4, name: 'Lilies', price: 42.00, image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400', description: 'Stunning lilies with a beautiful fragrance. Symbol of purity and refined beauty.', colors: ['White', 'Pink', 'Orange', 'Yellow', 'Red'] },
    { id: 5, name: 'Orchids', price: 55.00, image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=400', description: 'Exotic orchids representing luxury and sophistication.', colors: ['White', 'Purple', 'Pink', 'Yellow', 'Blue'] },
    { id: 6, name: 'Peonies', price: 48.00, image: 'https://images.unsplash.com/photo-1588453862014-cd1b9ad06a12?w=400', description: 'Lush peonies symbolizing romance and prosperity.', colors: ['Pink', 'White', 'Red', 'Coral'] },
    { id: 7, name: 'Carnations', price: 28.00, image: 'https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=400', description: 'Long-lasting carnations perfect for any occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple'] },
    { id: 8, name: 'Daisies', price: 25.00, image: 'https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400', description: 'Cheerful daisies representing innocence and purity.', colors: ['White', 'Yellow', 'Pink'] },
    { id: 9, name: 'Hydrangeas', price: 52.00, image: 'https://images.unsplash.com/photo-1594735373122-f94df3a3f7d8?w=400', description: 'Voluminous hydrangeas for a stunning display.', colors: ['Blue', 'Pink', 'White', 'Purple'] },
    { id: 10, name: 'Lavender', price: 30.00, image: 'https://images.unsplash.com/photo-1611419010196-842f31fa36fa?w=400', description: 'Fragrant lavender bringing calm and serenity.', colors: ['Purple', 'White', 'Pink'] },
    { id: 11, name: 'Gerbera Daisies', price: 38.00, image: 'https://images.unsplash.com/photo-1606041011872-596597976b25?w=400', description: 'Vibrant gerbera daisies perfect for brightening any room.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'White'] },
    { id: 12, name: 'Irises', price: 40.00, image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400', description: 'Elegant iris flowers symbolizing wisdom and hope.', colors: ['Purple', 'Blue', 'White', 'Yellow'] },
    { id: 13, name: 'Chrysanthemums', price: 33.00, image: 'https://images.unsplash.com/photo-1604437237951-2b7f218bdd7c?w=400', description: 'Beautiful chrysanthemums representing joy and optimism.', colors: ['Yellow', 'White', 'Red', 'Pink', 'Purple'] },
    { id: 14, name: 'Daffodils', price: 27.00, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400', description: 'Cheerful daffodils heralding the arrival of spring.', colors: ['Yellow', 'White', 'Orange'] },
    { id: 15, name: 'Poppies', price: 29.00, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400', description: 'Delicate poppies adding a wild beauty to arrangements.', colors: ['Red', 'Orange', 'Pink', 'White'] },
    { id: 16, name: 'Jasmine', price: 36.00, image: 'https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=400', description: 'Sweet-scented jasmine flowers for a romantic atmosphere.', colors: ['White', 'Yellow'] },
    { id: 17, name: 'Magnolias', price: 50.00, image: 'https://images.unsplash.com/photo-1583573607873-8b1e0b7e4eb1?w=400', description: 'Majestic magnolia blooms representing nobility and dignity.', colors: ['White', 'Pink', 'Purple'] },
    { id: 18, name: 'Anemones', price: 34.00, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400', description: 'Delicate anemones with striking centers.', colors: ['Red', 'Pink', 'White', 'Purple', 'Blue'] },
    { id: 19, name: 'Gardenias', price: 44.00, image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400', description: 'Fragrant gardenias symbolizing purity and sweetness.', colors: ['White', 'Cream'] },
    { id: 20, name: 'Freesias', price: 31.00, image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400', description: 'Delightfully scented freesias in vibrant colors.', colors: ['White', 'Yellow', 'Pink', 'Purple', 'Red'] },
    { id: 21, name: 'Ranunculus', price: 46.00, image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400', description: 'Layered petals creating a stunning romantic display.', colors: ['Pink', 'White', 'Red', 'Orange', 'Yellow'] },
    { id: 22, name: 'Calla Lilies', price: 58.00, image: 'https://images.unsplash.com/photo-1573824765810-9f2c2fb3e8c7?w=400', description: 'Sophisticated calla lilies for elegant occasions.', colors: ['White', 'Pink', 'Purple', 'Yellow', 'Black'] },
    { id: 23, name: 'Zinnias', price: 26.00, image: 'https://images.unsplash.com/photo-1597307001544-c3ce03ed6061?w=400', description: 'Bold and colorful zinnias bringing joy to any space.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'Purple', 'White'] },
    { id: 24, name: 'Dahlias', price: 43.00, image: 'https://images.unsplash.com/photo-1569353250681-a7a7d1a1623b?w=400', description: 'Stunning dahlias with intricate petal patterns.', colors: ['Red', 'Pink', 'Purple', 'White', 'Yellow', 'Orange'] },
    { id: 25, name: 'Sweet Peas', price: 24.00, image: 'https://images.unsplash.com/photo-1488923558943-6a95e285660f?w=400', description: 'Delicate sweet peas with a wonderful fragrance.', colors: ['Pink', 'Purple', 'White', 'Red'] }
  ]

  const colorEmojis: { [key: string]: { [key: string]: string } } = {
    'Roses': { 'Red': '🌹', 'Pink': '🌸', 'White': '🤍', 'Yellow': '💛', 'Orange': '🧡', 'Lavender': '💜' },
    'Tulips': { 'Red': '🌷', 'Pink': '🌸', 'White': '🤍', 'Yellow': '💛', 'Purple': '💜', 'Orange': '🧡' },
    'Sunflowers': { 'Yellow': '🌻', 'Orange': '🧡', 'Red': '❤️' },
    'Lilies': { 'White': '🤍', 'Pink': '🌸', 'Orange': '🧡', 'Yellow': '💛', 'Red': '❤️' },
    'Orchids': { 'White': '🤍', 'Purple': '💜', 'Pink': '🌸', 'Yellow': '💛', 'Blue': '💙' },
    'Peonies': { 'Pink': '🌸', 'White': '🤍', 'Red': '❤️', 'Coral': '🧡' },
    'Carnations': { 'Red': '❤️', 'Pink': '🌸', 'White': '🤍', 'Yellow': '💛', 'Purple': '💜' },
    'Daisies': { 'White': '🤍', 'Yellow': '💛', 'Pink': '🌸' },
    'Hydrangeas': { 'Blue': '💙', 'Pink': '🌸', 'White': '🤍', 'Purple': '💜' },
    'Lavender': { 'Purple': '💜', 'White': '🤍', 'Pink': '🌸' },
    'Gerbera Daisies': { 'Red': '❤️', 'Pink': '🌸', 'Orange': '🧡', 'Yellow': '💛', 'White': '🤍' },
    'Irises': { 'Purple': '💜', 'Blue': '💙', 'White': '🤍', 'Yellow': '💛' },
    'Chrysanthemums': { 'Yellow': '💛', 'White': '🤍', 'Red': '❤️', 'Pink': '🌸', 'Purple': '💜' },
    'Daffodils': { 'Yellow': '💛', 'White': '🤍', 'Orange': '🧡' },
    'Poppies': { 'Red': '❤️', 'Orange': '🧡', 'Pink': '🌸', 'White': '🤍' },
    'Jasmine': { 'White': '🤍', 'Yellow': '💛' },
    'Magnolias': { 'White': '🤍', 'Pink': '🌸', 'Purple': '💜' },
    'Anemones': { 'Red': '❤️', 'Pink': '🌸', 'White': '🤍', 'Purple': '💜', 'Blue': '💙' },
    'Gardenias': { 'White': '🤍', 'Cream': '💛' },
    'Freesias': { 'White': '🤍', 'Yellow': '💛', 'Pink': '🌸', 'Purple': '💜', 'Red': '❤️' },
    'Ranunculus': { 'Pink': '🌸', 'White': '🤍', 'Red': '❤️', 'Orange': '🧡', 'Yellow': '💛' },
    'Calla Lilies': { 'White': '🤍', 'Pink': '🌸', 'Purple': '💜', 'Yellow': '💛', 'Black': '🖤' },
    'Zinnias': { 'Red': '❤️', 'Pink': '🌸', 'Orange': '🧡', 'Yellow': '💛', 'Purple': '💜', 'White': '🤍' },
    'Dahlias': { 'Red': '❤️', 'Pink': '🌸', 'Purple': '💜', 'White': '🤍', 'Yellow': '💛', 'Orange': '🧡' },
    'Sweet Peas': { 'Pink': '🌸', 'Purple': '💜', 'White': '🤍', 'Red': '❤️' }
  }

  const getFlowerEmoji = () => {
    if (product && colorEmojis[product.name] && colorEmojis[product.name][selectedColor]) {
      return colorEmojis[product.name][selectedColor]
    }
    return product?.image || '💐'
  }

  const product = allProducts.find(p => p.id === Number(id))

  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0])
    }
  }, [product])

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/shop')} className="back-button">
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  const handleSubscribe = () => {
    // Redirect to home page subscription plans section
    navigate('/')
    // Scroll to plans section after navigation
    setTimeout(() => {
      const plansSection = document.querySelector('.plans-section')
      if (plansSection) {
        plansSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate('/shop')} className="back-button">
          ← Back to Shop
        </button>

        <div className="product-detail-content">
          <div className="product-image-section">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-main-image"
            />
            <p className="color-preview-text">Selected Color: {selectedColor} {getFlowerEmoji()}</p>
          </div>

          <div className="product-info-section">
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>

            <div className="color-selection">
              <h3>Select Color:</h3>
              <div className="color-options">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedColor(color)
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault()
                      setSelectedColor(color)
                    }}
                    title={color}
                  >
                    {color}
                  </button>
                ))}
              </div>
              <p className="selected-color">Selected: <strong>{selectedColor}</strong></p>
            </div>

            <div className="quantity-selection">
              <h3>Quantity:</h3>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleSubscribe}
              >
                Subscribe Now
              </button>
            </div>

            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                <li>✓ Fresh flowers delivered</li>
                <li>✓ Hand-arranged by experts</li>
                <li>✓ Satisfaction guaranteed</li>
                <li>✓ Free delivery on orders over $50</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
