import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Subscribe Flowers</h1>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, Subscribe Flowers was born from a simple idea: everyone deserves 
              to have fresh, beautiful flowers in their home, without the hassle of going to 
              the florist every week.
            </p>
            <p>
              We partner with local flower farms and expert florists to curate stunning arrangements 
              that capture the essence of each season. Our commitment to quality and customer 
              satisfaction has made us a trusted name in flower subscriptions.
            </p>

            <h2>Our Mission</h2>
            <p>
              To bring joy, beauty, and the healing power of nature into every home we serve. 
              We believe that flowers are more than just decoration—they're a way to celebrate 
              life's moments, big and small.
            </p>

            <h2>Why Choose Us?</h2>
            <ul className="features-list">
              <li>🌿 <strong>Farm Fresh</strong> - Direct from local farms to your door</li>
              <li>📦 <strong>Convenient Delivery</strong> - Scheduled deliveries that fit your life</li>
              <li>🎨 <strong>Expert Curation</strong> - Professionally designed arrangements</li>
              <li>♻️ <strong>Sustainable</strong> - Eco-friendly packaging and practices</li>
              <li>💯 <strong>Quality Guarantee</strong> - 100% satisfaction or your money back</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
