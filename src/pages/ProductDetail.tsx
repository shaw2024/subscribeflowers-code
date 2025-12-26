import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
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
  const { isAuthenticated, customer, getRemainingFlowers } = useAuth()
  const { addToCart } = useCart()
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [currentImage, setCurrentImage] = useState<string>('')

  // Flower color images mapping
  const flowerColorImages: { [key: string]: { [key: string]: string } } = {
    'Roses': {
      'Red': 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Pink': 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'White': 'https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Yellow': 'https://images.pexels.com/photos/1322724/pexels-photo-1322724.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Orange': 'https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Lavender': 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    'Tulips': {
      'Red': 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Pink': 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'White': 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Yellow': 'https://images.pexels.com/photos/42069/tulips-flowers-spring-yellow-42069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Purple': 'https://images.pexels.com/photos/1682316/pexels-photo-1682316.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'Orange': 'https://images.pexels.com/photos/1390365/pexels-photo-1390365.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  }

  const allProducts: Product[] = [
    { id: 1, name: 'Roses', price: 45.00, image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Classic roses, the symbol of love and beauty. Perfect for any romantic occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Orange', 'Lavender'] },
    { id: 2, name: 'Tulips', price: 35.00, image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Elegant tulips representing perfect love. Ideal for spring celebrations.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple', 'Orange'] },
    { id: 3, name: 'Sunflowers', price: 32.00, image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Bright and cheerful sunflowers that bring warmth to any space.', colors: ['Yellow', 'Orange', 'Red'] },
    { id: 4, name: 'Lilies', price: 42.00, image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Stunning lilies with a beautiful fragrance. Symbol of purity and refined beauty.', colors: ['White', 'Pink', 'Orange', 'Yellow', 'Red'] },
    { id: 5, name: 'Orchids', price: 55.00, image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Exotic orchids representing luxury and sophistication.', colors: ['White', 'Purple', 'Pink', 'Yellow', 'Blue'] },
    { id: 6, name: 'Peonies', price: 48.00, image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Lush peonies symbolizing romance and prosperity.', colors: ['Pink', 'White', 'Red', 'Coral'] },
    { id: 7, name: 'Carnations', price: 28.00, image: 'https://images.pexels.com/photos/1458603/pexels-photo-1458603.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Long-lasting carnations perfect for any occasion.', colors: ['Red', 'Pink', 'White', 'Yellow', 'Purple'] },
    { id: 8, name: 'Daisies', price: 25.00, image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Cheerful daisies representing innocence and purity.', colors: ['White', 'Yellow', 'Pink'] },
    { id: 9, name: 'Hydrangeas', price: 52.00, image: 'https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Voluminous hydrangeas for a stunning display.', colors: ['Blue', 'Pink', 'White', 'Purple'] },
    { id: 10, name: 'Lavender', price: 30.00, image: 'https://images.pexels.com/photos/207518/pexels-photo-207518.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Fragrant lavender bringing calm and serenity.', colors: ['Purple', 'White', 'Pink'] },
    { id: 11, name: 'Gerbera Daisies', price: 38.00, image: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Vibrant gerbera daisies perfect for brightening any room.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'White'] },
    { id: 12, name: 'Irises', price: 40.00, image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Elegant iris flowers symbolizing wisdom and hope.', colors: ['Purple', 'Blue', 'White', 'Yellow'] },
    { id: 13, name: 'Chrysanthemums', price: 33.00, image: 'https://images.pexels.com/photos/1301862/pexels-photo-1301862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Beautiful chrysanthemums representing joy and optimism.', colors: ['Yellow', 'White', 'Red', 'Pink', 'Purple'] },
    { id: 14, name: 'Daffodils', price: 27.00, image: 'https://images.pexels.com/photos/54320/pexels-photo-54320.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Cheerful daffodils heralding the arrival of spring.', colors: ['Yellow', 'White', 'Orange'] },
    { id: 15, name: 'Poppies', price: 29.00, image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Delicate poppies adding a wild beauty to arrangements.', colors: ['Red', 'Orange', 'Pink', 'White'] },
    { id: 16, name: 'Jasmine', price: 36.00, image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Sweet-scented jasmine flowers for a romantic atmosphere.', colors: ['White', 'Yellow'] },
    { id: 17, name: 'Magnolias', price: 50.00, image: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Majestic magnolia blooms representing nobility and dignity.', colors: ['White', 'Pink', 'Purple'] },
    { id: 18, name: 'Anemones', price: 34.00, image: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Delicate anemones with striking centers.', colors: ['Red', 'Pink', 'White', 'Purple', 'Blue'] },
    { id: 19, name: 'Gardenias', price: 44.00, image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Fragrant gardenias symbolizing purity and sweetness.', colors: ['White', 'Cream'] },
    { id: 20, name: 'Freesias', price: 31.00, image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Delightfully scented freesias in vibrant colors.', colors: ['White', 'Yellow', 'Pink', 'Purple', 'Red'] },
    { id: 21, name: 'Ranunculus', price: 46.00, image: 'https://images.pexels.com/photos/931175/pexels-photo-931175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Layered petals creating a stunning romantic display.', colors: ['Pink', 'White', 'Red', 'Orange', 'Yellow'] },
    { id: 22, name: 'Calla Lilies', price: 58.00, image: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Sophisticated calla lilies for elegant occasions.', colors: ['White', 'Pink', 'Purple', 'Yellow', 'Black'] },
    { id: 23, name: 'Zinnias', price: 26.00, image: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Bold and colorful zinnias bringing joy to any space.', colors: ['Red', 'Pink', 'Orange', 'Yellow', 'Purple', 'White'] },
    { id: 24, name: 'Dahlias', price: 43.00, image: 'https://images.pexels.com/photos/1301862/pexels-photo-1301862.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Stunning dahlias with intricate petal patterns.', colors: ['Red', 'Pink', 'Purple', 'White', 'Yellow', 'Orange'] },
    { id: 25, name: 'Sweet Peas', price: 24.00, image: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', description: 'Delicate sweet peas with a wonderful fragrance.', colors: ['Pink', 'Purple', 'White', 'Red'] }
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
      const firstColor = product.colors[0]
      setSelectedColor(firstColor)
      // Set initial image based on product and color
      if (flowerColorImages[product.name] && flowerColorImages[product.name][firstColor]) {
        setCurrentImage(flowerColorImages[product.name][firstColor])
      } else {
        setCurrentImage(product.image)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  // Update image when color changes
  useEffect(() => {
    if (product && selectedColor && flowerColorImages[product.name]) {
      const colorImage = flowerColorImages[product.name][selectedColor]
      if (colorImage) {
        setCurrentImage(colorImage)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColor])

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



  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate('/shop')} className="back-button">
          ← Back to Shop
        </button>

        <div className="product-detail-content">
          <div className="product-image-section">
            <img 
              src={currentImage || product.image} 
              alt={`${product.name} - ${selectedColor}`}
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

            <div className="product-actions">
              {isAuthenticated ? (
                <>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => {
                      const remainingFlowers = getRemainingFlowers();
                      if (remainingFlowers > 0) {
                        addToCart({
                          id: product.id.toString(),
                          name: `${product.name} (${selectedColor})`,
                          price: 0,
                          quantity: 1,
                          image: currentImage || product.image,
                        });
                        alert(`${product.name} (${selectedColor}) added to cart!`);
                      } else {
                        alert('You have reached your quarterly limit. Please upgrade your plan or wait for next quarter.');
                      }
                    }}
                    disabled={getRemainingFlowers() === 0}
                  >
                    {getRemainingFlowers() > 0 ? 'Add to Cart' : 'Limit Reached'}
                  </button>
                  {getRemainingFlowers() > 0 && (
                    <p className="subscription-info">✓ Included in your subscription ({getRemainingFlowers()} remaining)</p>
                  )}
                  {getRemainingFlowers() === 0 && (
                    <p className="limit-warning">⚠ Quarterly limit reached. Wait for next quarter or upgrade plan.</p>
                  )}
                </>
              ) : (
                <button 
                  className="subscribe-now-btn"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const plansSection = document.querySelector('.plans-section');
                      if (plansSection) {
                        plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                >
                  Subscribe Now
                </button>
              )}
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
