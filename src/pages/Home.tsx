import { useState } from 'react'
import { Link } from 'react-router-dom'
import { saveSubscription } from '../firebase/database'
import './Home.css'

interface Plan {
  name: string
  price: string
  features: string[]
}

interface Testimonial {
  name: string
  plan: string
  text: string
  avatar: string
}

const Home = () => {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [subscriptionForm, setSubscriptionForm] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false)

  const handleSubscribeClick = (plan: Plan) => {
    setSelectedPlan(plan)
    setShowSubscribeModal(true)
  }

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedPlan) return

    const result = await saveSubscription({
      ...subscriptionForm,
      plan: selectedPlan.name,
      price: selectedPlan.price
    })

    if (result.success) {
      setSubscriptionSuccess(true)
      setTimeout(() => {
        setShowSubscribeModal(false)
        setSubscriptionSuccess(false)
        setSubscriptionForm({ name: '', email: '', phone: '' })
        setSelectedPlan(null)
      }, 3000)
    } else {
      alert('Error submitting subscription. Please try again.')
    }
  }

  const plans: Plan[] = [
    {
      name: 'Blossom Starter',
      price: '$299/year',
      features: [
        '50 flowers per quarter',
        'Seasonal variety',
        'Free delivery'
      ]
    },
    {
      name: 'Floral Enthusiast',
      price: '$599/year',
      features: [
        '100 flowers per quarter',
        'Wide selection of blooms',
        'Free delivery'
      ]
    },
    {
      name: 'Botanical Bliss',
      price: '$999/year',
      features: [
        '200 flowers per quarter',
        'Premium and rare varieties',
        'Free delivery'
      ]
    }
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Jane Doe',
      plan: 'Floral Enthusiast',
      text: 'Subscribe Flowers has brought so much joy to my home. The flowers are always fresh and beautiful!',
      avatar: '👩'
    },
    {
      name: 'John Smith',
      plan: 'Blossom Starter',
      text: 'I love the variety and quality of flowers I receive every quarter. Highly recommend Subscribe Flowers!',
      avatar: '👨'
    },
    {
      name: 'Mary Johnson',
      plan: 'Botanical Bliss',
      text: 'The subscription is worth every penny. Beautiful flowers delivered right to my door.',
      avatar: '👩‍🦰'
    },
    {
      name: 'James Brown',
      plan: 'Floral Enthusiast',
      text: 'Exceptional service and stunning flowers. Subscribe Flowers has exceeded my expectations.',
      avatar: '👨‍🦱'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Subscribe Flowers</h1>
          <p>Fresh blooms delivered to your doorstep, all year round</p>
          <Link to="/shop" className="cta-button">View Flowers</Link>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            At Subscribe Flowers, we believe in bringing the beauty of nature into your home. 
            Choose a subscription plan that suits you, and we'll deliver handpicked, fresh flowers 
            right to your doorstep.
          </p>
        </div>
      </section>

      <section className="plans-section">
        <div className="container">
          <h2>Our Subscription Plans</h2>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div key={index} className="plan-card">
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="cta-button" onClick={() => handleSubscribeClick(plan)}>
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="avatar">{testimonial.avatar}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
                <p className="plan-name">{testimonial.plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showSubscribeModal && (
        <div className="subscribe-modal" onClick={() => setShowSubscribeModal(false)}>
          <div className="subscribe-content" onClick={(e) => e.stopPropagation()}>
            <h2>Subscribe to {selectedPlan?.name}</h2>
            <p className="plan-price">{selectedPlan?.price}</p>
            
            {subscriptionSuccess && (
              <div className="success-message">
                Subscription request submitted! We'll contact you soon. ✓
              </div>
            )}
            
            <form onSubmit={handleSubscriptionSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  value={subscriptionForm.name}
                  onChange={(e) => setSubscriptionForm({...subscriptionForm, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  value={subscriptionForm.email}
                  onChange={(e) => setSubscriptionForm({...subscriptionForm, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={subscriptionForm.phone}
                  onChange={(e) => setSubscriptionForm({...subscriptionForm, phone: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Submit Subscription
                </button>
                <button type="button" className="cancel-btn" onClick={() => setShowSubscribeModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
