import { useState } from 'react'
import './FAQ.css'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs: FAQItem[] = [
    {
      question: 'How does the flower subscription work?',
      answer: 'Choose a subscription plan that suits your needs. We deliver fresh, handpicked flowers to your doorstep every quarter (4 times a year). You can customize your preferences and manage your subscription anytime.'
    },
    {
      question: 'What is included in each delivery?',
      answer: 'Each delivery includes a beautiful arrangement of fresh flowers based on your chosen plan. The Blossom Starter includes 50 flowers, Floral Enthusiast includes 100 flowers, and Botanical Bliss includes 200 flowers per quarter. All plans include free delivery and seasonal varieties.'
    },
    {
      question: 'Can I customize my flower selection?',
      answer: 'Yes! After subscribing, you can set your flower preferences in your account dashboard. While we curate seasonal selections, we take your preferences into account when preparing your arrangements.'
    },
    {
      question: 'How fresh are the flowers?',
      answer: 'Our flowers are cut fresh from local farms and delivered within 24-48 hours. We guarantee 100% freshness and quality. If you\'re not satisfied with the freshness, we offer a full refund or replacement.'
    },
    {
      question: 'What are the delivery dates?',
      answer: 'Deliveries are scheduled quarterly (every 3 months). You\'ll receive notifications 1 week before each delivery with the expected date. You can also reschedule deliveries up to 3 days before the scheduled date.'
    },
    {
      question: 'Can I pause or cancel my subscription?',
      answer: 'Absolutely! You can pause your subscription for up to 6 months or cancel anytime from your account dashboard. There are no cancellation fees, though we don\'t offer refunds for the current quarter if flowers have already been shipped.'
    },
    {
      question: 'Do you deliver to my area?',
      answer: 'We currently deliver to most areas in the continental United States. Enter your zip code at checkout to confirm delivery availability in your area. We\'re constantly expanding our delivery zones!'
    },
    {
      question: 'What if I\'m not home during delivery?',
      answer: 'Our delivery partners will leave the flowers in a safe location at your doorstep. We package them specially to maintain freshness. You\'ll receive a notification when the delivery is made with a photo of the placement.'
    },
    {
      question: 'Are the flowers eco-friendly?',
      answer: 'Yes! We partner with local farms that use sustainable growing practices. Our packaging is 100% recyclable and biodegradable. We\'re committed to minimizing our environmental impact.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'If you\'re not satisfied with your flowers, contact us within 48 hours of delivery with photos. We\'ll issue a full refund or send a replacement at no extra cost. Your satisfaction is our priority!'
    },
    {
      question: 'Can I gift a subscription to someone?',
      answer: 'Yes! We offer gift subscriptions for all our plans. You can purchase a 1-year subscription as a gift, and the recipient will receive beautiful flowers throughout the year. Perfect for birthdays, anniversaries, or any special occasion!'
    },
    {
      question: 'How do I update my delivery address?',
      answer: 'You can update your delivery address anytime from your account dashboard. Make sure to update it at least 5 days before your next scheduled delivery to ensure the flowers reach the correct location.'
    }
  ]

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our flower subscription service</p>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <h2>Still have questions?</h2>
            <p>Can't find the answer you're looking for? Our customer support team is here to help!</p>
            <a href="/contact" className="contact-button">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
