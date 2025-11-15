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

interface ProductDetailProps {
  onAddToCart?: (product: any) => void
}

const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const allProducts: Product[] = [
    { id: 1, name: 'Rose Bouquet', price: 45.00, image: '🌹', description: 'Classic roses, the symbol of love and beauty. Perfect for any romantic occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Orange', 'Lavender'] },
    { id: 2, name: 'Tulip Arrangement', price: 35.00, image: '🌷', description: 'Elegant tulips representing perfect love. Ideal for spring celebrations.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple', 'Orange'] },
    { id: 3, name: 'Sunflower Bouquet', price: 32.00, image: '🌻', description: 'Bright and cheerful sunflowers that bring warmth to any space.', colors: ['Yellow', 'Orange', 'Red'] },
    { id: 4, name: 'Lily Elegance', price: 42.00, image: '🌺', description: 'Stunning lilies with a beautiful fragrance. Symbol of purity and refined beauty.', colors: ['White', 'Pink', 'Orange', 'Yellow', 'Red'] },
    { id: 5, name: 'Orchid Display', price: 55.00, image: '🌸', description: 'Exotic orchids representing luxury and sophistication.', colors: ['White', 'Purple', 'Pink', 'Yellow', 'Blue'] },
    { id: 6, name: 'Peony Collection', price: 48.00, image: '💐', description: 'Lush peonies symbolizing romance and prosperity.', colors: ['Pink', 'White', 'Red', 'Coral'] },
    { id: 7, name: 'Carnation Classic', price: 28.00, image: '🏵️', description: 'Long-lasting carnations perfect for any occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple'] },
    { id: 8, name: 'Daisy Delight', price: 25.00, image: '🌼', description: 'Cheerful daisies representing innocence and purity.', colors: ['White', 'Yellow', 'Pink'] },
    { id: 9, name: 'Hydrangea Bouquet', price: 52.00, image: '💙', description: 'Voluminous hydrangeas for a stunning display.', colors: ['Blue', 'Pink', 'White', 'Purple'] },
    { id: 10, name: 'Lavender Bundle', price: 30.00, image: '💜', description: 'Fragrant lavender bringing calm and serenity.', colors: ['Purple', 'White', 'Pink'] },
    { id: 11, name: 'Gerbera Daisy Mix', price: 38.00, image: '🌸', description: 'Vibrant gerbera daisies perfect for brightening any room.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'White'] },
    { id: 12, name: 'Iris Collection', price: 40.00, image: '💐', description: 'Elegant iris flowers symbolizing wisdom and hope.', colors: ['Purple', 'Blue', 'White', 'Yellow'] },
    { id: 13, name: 'Chrysanthemum Bunch', price: 33.00, image: '🌼', description: 'Beautiful chrysanthemums representing joy and optimism.', colors: ['Yellow', 'White', 'Red', 'Pink', 'Purple'] },
    { id: 14, name: 'Daffodil Spring', price: 27.00, image: '🌻', description: 'Cheerful daffodils heralding the arrival of spring.', colors: ['Yellow', 'White', 'Orange'] },
    { id: 15, name: 'Poppy Garden', price: 29.00, image: '🌺', description: 'Delicate poppies adding a wild beauty to arrangements.', colors: ['Red', 'Orange', 'Pink', 'White'] },
    { id: 16, name: 'Jasmine Fragrance', price: 36.00, image: '🌸', description: 'Sweet-scented jasmine flowers for a romantic atmosphere.', colors: ['White', 'Yellow'] },
    { id: 17, name: 'Magnolia Elegance', price: 50.00, image: '💐', description: 'Majestic magnolia blooms representing nobility and dignity.', colors: ['White', 'Pink', 'Purple'] },
    { id: 18, name: 'Anemone Arrangement', price: 34.00, image: '🏵️', description: 'Delicate anemones with striking centers.', colors: ['Red', 'Pink', 'White', 'Purple', 'Blue'] },
    { id: 19, name: 'Gardenia Beauty', price: 44.00, image: '🌼', description: 'Fragrant gardenias symbolizing purity and sweetness.', colors: ['White', 'Cream'] },
    { id: 20, name: 'Freesia Fresh', price: 31.00, image: '🌷', description: 'Delightfully scented freesias in vibrant colors.', colors: ['White', 'Yellow', 'Pink', 'Purple', 'Red'] },
    { id: 21, name: 'Ranunculus Romance', price: 46.00, image: '🌹', description: 'Layered petals creating a stunning romantic display.', colors: ['Pink', 'White', 'Red', 'Orange', 'Yellow'] },
    { id: 22, name: 'Calla Lily Luxury', price: 58.00, image: '🌺', description: 'Sophisticated calla lilies for elegant occasions.', colors: ['White', 'Pink', 'Purple', 'Yellow', 'Black'] },
    { id: 23, name: 'Zinnia Bright', price: 26.00, image: '🌻', description: 'Bold and colorful zinnias bringing joy to any space.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'Purple', 'White'] },
    { id: 24, name: 'Dahlia Delight', price: 43.00, image: '🌸', description: 'Stunning dahlias with intricate petal patterns.', colors: ['Red', 'Pink', 'Purple', 'White', 'Yellow', 'Orange'] },
    { id: 25, name: 'Sweet Pea Bundle', price: 24.00, image: '💐', description: 'Delicate sweet peas with a wonderful fragrance.', colors: ['Pink', 'Purple', 'White', 'Red'] }
  ]

  const colorEmojis: { [key: string]: { [key: string]: string } } = {
    'Rose Bouquet': { 'Red': '🌹', 'Pink': '🌸', 'White': '🤍', 'Yellow': '💛', 'Orange': '🧡', 'Lavender': '💜' },
    'Tulip Arrangement': { 'Red': '🌷', 'Pink': '🌸', 'White': '🤍', 'Yellow': '💛', 'Purple': '💜', 'Orange': '🧡' },
    'Sunflower Bouquet': { 'Yellow': '🌻', 'Orange': '🧡', 'Red': '❤️' },
    'Lily Elegance': { 'White': '🤍', 'Pink': '🌸', 'Orange': '🧡', 'Yellow': '💛', 'Red': '❤️' },
    'Orchid Display': { 'White': '🤍', 'Purple': '💜', 'Pink': '🌸', 'Yellow': '💛', 'Blue': '💙' },
    'Peony Collection': { 'Pink': '🌸', 'White': '🤍', 'Red': '❤️', 'Coral': '🧡' },
    'Carnation Classic': { 'Red': '❤️', 'Pink': '🌸', 'White': '🤍', 'Yellow': '💛', 'Purple': '💜' },
    'Daisy Delight': { 'White': '🤍', 'Yellow': '💛', 'Pink': '🌸' },
    'Hydrangea Bouquet': { 'Blue': '💙', 'Pink': '🌸', 'White': '🤍', 'Purple': '💜' },
    'Lavender Bundle': { 'Purple': '💜', 'White': '🤍', 'Pink': '🌸' },
    'Gerbera Daisy Mix': { 'Red': '❤️', 'Pink': '🌸', 'Orange': '🧡', 'Yellow': '💛', 'White': '🤍' },
    'Iris Collection': { 'Purple': '💜', 'Blue': '💙', 'White': '🤍', 'Yellow': '💛' },
    'Chrysanthemum Bunch': { 'Yellow': '💛', 'White': '🤍', 'Red': '❤️', 'Pink': '🌸', 'Purple': '💜' },
    'Daffodil Spring': { 'Yellow': '💛', 'White': '🤍', 'Orange': '🧡' },
    'Poppy Garden': { 'Red': '❤️', 'Orange': '🧡', 'Pink': '🌸', 'White': '🤍' },
    'Jasmine Fragrance': { 'White': '🤍', 'Yellow': '💛' },
    'Magnolia Elegance': { 'White': '🤍', 'Pink': '🌸', 'Purple': '💜' },
    'Anemone Arrangement': { 'Red': '❤️', 'Pink': '🌸', 'White': '🤍', 'Purple': '💜', 'Blue': '💙' },
    'Gardenia Beauty': { 'White': '🤍', 'Cream': '💛' },
    'Freesia Fresh': { 'White': '🤍', 'Yellow': '💛', 'Pink': '🌸', 'Purple': '💜', 'Red': '❤️' },
    'Ranunculus Romance': { 'Pink': '🌸', 'White': '🤍', 'Red': '❤️', 'Orange': '🧡', 'Yellow': '💛' },
    'Calla Lily Luxury': { 'White': '🤍', 'Pink': '🌸', 'Purple': '💜', 'Yellow': '💛', 'Black': '🖤' },
    'Zinnia Bright': { 'Red': '❤️', 'Pink': '🌸', 'Orange': '🧡', 'Yellow': '💛', 'Purple': '💜', 'White': '🤍' },
    'Dahlia Delight': { 'Red': '❤️', 'Pink': '🌸', 'Purple': '💜', 'White': '🤍', 'Yellow': '💛', 'Orange': '🧡' },
    'Sweet Pea Bundle': { 'Pink': '🌸', 'Purple': '💜', 'White': '🤍', 'Red': '❤️' }
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

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      selectedColor,
      quantity
    }
    
    console.log('Adding to cart:', cartItem)
    
    if (onAddToCart) {
      onAddToCart(cartItem)
    }
    
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate('/shop')} className="back-button">
          ← Back to Shop
        </button>

        <div className="product-detail-content">
          <div className="product-image-section">
            <div className="product-main-image">{getFlowerEmoji()}</div>
            <p className="color-preview-text">Preview: {selectedColor}</p>
          </div>

          <div className="product-info-section">
            <h1>{product.name}</h1>
            <p className="product-price">${product.price.toFixed(2)}</p>
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
                onClick={handleAddToCart}
              >
                {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
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
