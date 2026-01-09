import { useNavigate, Link } from 'react-router-dom'
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
  const navigate = useNavigate();

  const scrollToPlans = () => {
    const plansSection = document.querySelector('.plans-section')
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubscribeClick = (plan: Plan) => {
    navigate('/subscribe', { state: { plan } });
  }

  const plans: Plan[] = [
    {
      name: 'Blossom Starter',
      price: '$549/year',
      features: [
        '50 flowers per quarter',
        'Seasonal variety',
        'Free delivery'
      ]
    },
    {
      name: 'Floral Enthusiast',
      price: '$899/year',
      features: [
        '100 flowers per quarter',
        'Wide selection of blooms',
        'Free delivery'
      ]
    },
    {
      name: 'Botanical Bliss',
      price: '$1599/year',
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
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'John Smith',
      plan: 'Blossom Starter',
      text: 'I love the variety and quality of flowers I receive every quarter. Highly recommend Subscribe Flowers!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'Mary Johnson',
      plan: 'Botanical Bliss',
      text: 'The subscription is worth every penny. Beautiful flowers delivered right to my door.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    },
    {
      name: 'James Brown',
      plan: 'Floral Enthusiast',
      text: 'Exceptional service and stunning flowers. Subscribe Flowers has exceeded my expectations.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces'
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
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
                <p className="plan-name">{testimonial.plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
