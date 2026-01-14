import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin, Send } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Mercer Street', 'SoHo, New York, NY 10012'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (212) 555-0123', 'Mon-Sat: 10AM - 8PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@eleganceboutique.com', 'support@eleganceboutique.com'],
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Monday - Saturday: 10AM - 8PM', 'Sunday: 11AM - 6PM'],
    },
  ]

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
  ]

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Contact Us"
          />
          <div className="contact-hero-overlay"></div>
        </div>
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </motion.div>
      </section>

      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="contact-info-icon">
                  <info.icon size={24} />
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-main-grid">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`form-submit ${formStatus}`}
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                >
                  {formStatus === 'submitting' ? (
                    'Sending...'
                  ) : formStatus === 'success' ? (
                    <>
                      Message Sent! <Mail size={18} />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              className="contact-map-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Find Us</h2>
              <p>Visit our boutique in the heart of SoHo</p>
              
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.232713812743!2d-74.00306368459432!3d40.72256797933084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f98815555b%3A0x5a47aef17a5b6670!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="ÉLÉGANCE Boutique Location"
                ></iframe>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-newsletter section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers, style tips, and new arrival updates.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
