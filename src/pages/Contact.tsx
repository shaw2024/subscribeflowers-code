import { useState, FormEvent } from 'react'
import { saveContactForm } from '../firebase/database'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Save to Firebase
    const result = await saveContactForm(formData)
    
    setLoading(false)
    
    if (result.success) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    } else {
      alert('Error submitting form. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>info@subscribeflowers.com</p>
              </div>
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="info-item">
                <h3>📍 Address</h3>
                <p>123 Blossom Street<br />Garden City, CA 90210</p>
              </div>
              <div className="info-item">
                <h3>🕐 Hours</h3>
                <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              {submitted && (
                <div className="success-message">
                  Thank you! We'll get back to you soon. ✓
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
