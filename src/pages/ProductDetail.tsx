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
    { id: 1, name: 'Roses', price: 45.00, image: 'https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_640.jpg', description: 'Classic roses, the symbol of love and beauty. Perfect for any romantic occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Orange', 'Lavender'] },
    { id: 2, name: 'Tulips', price: 35.00, image: 'https://cdn.pixabay.com/photo/2015/04/10/00/41/tulip-715438_640.jpg', description: 'Elegant tulips representing perfect love. Ideal for spring celebrations.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple', 'Orange'] },
    { id: 3, name: 'Sunflowers', price: 32.00, image: 'https://cdn.pixabay.com/photo/2015/08/28/16/38/sunflower-912531_640.jpg', description: 'Bright and cheerful sunflowers that bring warmth to any space.', colors: ['Yellow', 'Orange', 'Red'] },
    { id: 4, name: 'Lilies', price: 42.00, image: 'https://cdn.pixabay.com/photo/2017/08/01/00/38/lily-2563490_640.jpg', description: 'Stunning lilies with a beautiful fragrance. Symbol of purity and refined beauty.', colors: ['White', 'Pink', 'Orange', 'Yellow', 'Red'] },
    { id: 5, name: 'Orchids', price: 55.00, image: 'https://cdn.pixabay.com/photo/2016/09/07/10/58/orchid-1651392_640.jpg', description: 'Exotic orchids representing luxury and sophistication.', colors: ['White', 'Purple', 'Pink', 'Yellow', 'Blue'] },
    { id: 6, name: 'Peonies', price: 48.00, image: 'https://cdn.pixabay.com/photo/2018/05/11/08/11/peony-3389311_640.jpg', description: 'Lush peonies symbolizing romance and prosperity.', colors: ['Pink', 'White', 'Red', 'Coral'] },
    { id: 7, name: 'Carnations', price: 28.00, image: 'https://cdn.pixabay.com/photo/2018/05/03/15/43/carnation-3372181_640.jpg', description: 'Long-lasting carnations perfect for any occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple'] },
    { id: 8, name: 'Daisies', price: 25.00, image: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/daisy-736995_640.jpg', description: 'Cheerful daisies representing innocence and purity.', colors: ['White', 'Yellow', 'Pink'] },
    { id: 9, name: 'Hydrangeas', price: 52.00, image: 'https://cdn.pixabay.com/photo/2016/05/31/00/37/hydrangea-1426045_640.jpg', description: 'Voluminous hydrangeas for a stunning display.', colors: ['Blue', 'Pink', 'White', 'Purple'] },
    { id: 10, name: 'Lavender', price: 30.00, image: 'https://cdn.pixabay.com/photo/2016/03/05/22/31/lavender-1239501_640.jpg', description: 'Fragrant lavender bringing calm and serenity.', colors: ['Purple', 'White', 'Pink'] },
    { id: 11, name: 'Gerbera Daisies', price: 38.00, image: 'https://cdn.pixabay.com/photo/2016/08/22/18/58/gerbera-1612602_640.jpg', description: 'Vibrant gerbera daisies perfect for brightening any room.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'White'] },
    { id: 12, name: 'Irises', price: 40.00, image: 'https://cdn.pixabay.com/photo/2016/03/26/22/21/iris-1281980_640.jpg', description: 'Elegant iris flowers symbolizing wisdom and hope.', colors: ['Purple', 'Blue', 'White', 'Yellow'] },
    { id: 13, name: 'Chrysanthemums', price: 33.00, image: 'https://cdn.pixabay.com/photo/2016/11/29/05/17/chrysanthemum-1867289_640.jpg', description: 'Beautiful chrysanthemums representing joy and optimism.', colors: ['Yellow', 'White', 'Red', 'Pink', 'Purple'] },
    { id: 14, name: 'Daffodils', price: 27.00, image: 'https://cdn.pixabay.com/photo/2016/03/24/22/09/daffodil-1277460_640.jpg', description: 'Cheerful daffodils heralding the arrival of spring.', colors: ['Yellow', 'White', 'Orange'] },
    { id: 15, name: 'Poppies', price: 29.00, image: 'https://cdn.pixabay.com/photo/2018/05/18/22/49/poppy-3411792_640.jpg', description: 'Delicate poppies adding a wild beauty to arrangements.', colors: ['Red', 'Orange', 'Pink', 'White'] },
    { id: 16, name: 'Jasmine', price: 36.00, image: 'https://cdn.pixabay.com/photo/2016/09/29/13/08/jasmine-1702909_640.jpg', description: 'Sweet-scented jasmine flowers for a romantic atmosphere.', colors: ['White', 'Yellow'] },
    { id: 17, name: 'Magnolias', price: 50.00, image: 'https://cdn.pixabay.com/photo/2016/03/09/09/22/magnolia-1245826_640.jpg', description: 'Majestic magnolia blooms representing nobility and dignity.', colors: ['White', 'Pink', 'Purple'] },
    { id: 18, name: 'Anemones', price: 34.00, image: 'https://cdn.pixabay.com/photo/2017/03/27/21/31/anemone-2178924_640.jpg', description: 'Delicate anemones with striking centers.', colors: ['Red', 'Pink', 'White', 'Purple', 'Blue'] },
    { id: 19, name: 'Gardenias', price: 44.00, image: 'https://cdn.pixabay.com/photo/2014/10/07/23/26/gardenia-478581_640.jpg', description: 'Fragrant gardenias symbolizing purity and sweetness.', colors: ['White', 'Cream'] },
    { id: 20, name: 'Freesias', price: 31.00, image: 'https://cdn.pixabay.com/photo/2019/05/11/12/31/freesia-4196552_640.jpg', description: 'Delightfully scented freesias in vibrant colors.', colors: ['White', 'Yellow', 'Pink', 'Purple', 'Red'] },
    { id: 21, name: 'Ranunculus', price: 46.00, image: 'https://cdn.pixabay.com/photo/2018/04/24/18/21/ranunculus-3348506_640.jpg', description: 'Layered petals creating a stunning romantic display.', colors: ['Pink', 'White', 'Red', 'Orange', 'Yellow'] },
    { id: 22, name: 'Calla Lilies', price: 58.00, image: 'https://cdn.pixabay.com/photo/2017/08/01/08/15/calla-2563280_640.jpg', description: 'Sophisticated calla lilies for elegant occasions.', colors: ['White', 'Pink', 'Purple', 'Yellow', 'Black'] },
    { id: 23, name: 'Zinnias', price: 26.00, image: 'https://cdn.pixabay.com/photo/2017/07/21/15/27/zinnia-2526378_640.jpg', description: 'Bold and colorful zinnias bringing joy to any space.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'Purple', 'White'] },
    { id: 24, name: 'Dahlias', price: 43.00, image: 'https://cdn.pixabay.com/photo/2016/08/05/10/00/dahlia-1571022_640.jpg', description: 'Stunning dahlias with intricate petal patterns.', colors: ['Red', 'Pink', 'Purple', 'White', 'Yellow', 'Orange'] },
    { id: 25, name: 'Sweet Peas', price: 24.00, image: 'https://cdn.pixabay.com/photo/2018/04/11/10/25/sweet-pea-3310303_640.jpg', description: 'Delicate sweet peas with a wonderful fragrance.', colors: ['Pink', 'Purple', 'White', 'Red'] }
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
