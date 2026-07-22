import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { roseProducts } from '../data/roseProducts'
import './RosesShop.css'

type SortOption = 'featured' | 'name'

const RosesShop = () => {
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState<string>('All')
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const colors = useMemo(() => {
    const uniqueColors = Array.from(new Set(roseProducts.map((product) => product.color)))
    return ['All', ...uniqueColors]
  }, [])

  const filteredRoses = useMemo(() => {
    const colorFiltered =
      selectedColor === 'All'
        ? roseProducts
        : roseProducts.filter((product) => product.color === selectedColor)

    const sorted = [...colorFiltered]

    if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    }

    return sorted
  }, [selectedColor, sortBy])

  return (
    <div className="roses-shop">
      <section className="roses-hero">
        <div className="container">
          <p className="eyebrow">Rose Collection</p>
          <h1>Find Your Perfect Roses</h1>
          <p className="hero-copy">
            Curated premium roses for every emotion and occasion, from timeless red to enchanting
            lavender.
          </p>
          <button className="back-link" onClick={() => navigate('/shop')}>
            Back to All Flowers
          </button>
        </div>
      </section>

      <section className="roses-controls">
        <div className="container controls-wrap">
          <div className="filter-group" role="group" aria-label="Filter by rose color">
            {colors.map((color) => (
              <button
                key={color}
                className={`filter-pill ${selectedColor === color ? 'active' : ''}`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>

          <label className="sort-control">
            Sort by
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}>
              <option value="featured">Featured</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>
      </section>

      <section className="roses-grid-section">
        <div className="container">
          <p className="results-count">Showing {filteredRoses.length} rose styles</p>
          <div className="roses-grid">
            {filteredRoses.map((rose) => (
              <article key={rose.id} className="rose-card">
                <img src={rose.image} alt={rose.altText} className="rose-image" loading="lazy" />
                <div className="rose-details">
                  <span className="rose-color">{rose.color}</span>
                  <h2>{rose.name}</h2>
                  <p className="rose-description">{rose.description}</p>
                  <p className="rose-symbolism">
                    <strong>Meaning:</strong> {rose.symbolism}
                  </p>
                  <div className="rose-footer">
                    <button
                      className="subscribe-rose-button"
                      onClick={() => navigate('/#plans')}
                    >
                      Subscribe
                    </button>
                    <button
                      className="view-rose-button"
                      onClick={() =>
                        navigate(`/product/1?color=${encodeURIComponent(rose.color.toLowerCase())}`)
                      }
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RosesShop
