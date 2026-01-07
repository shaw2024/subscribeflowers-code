import { useNavigate } from 'react-router-dom'
import { getProductImage } from '../data/images'
import './Shop.css'

interface Product {
  id: number
  name: string
  image: string
}

const Shop = () => {
  const navigate = useNavigate()

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
    </div>
  )
}

export default Shop
