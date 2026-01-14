import { motion } from 'framer-motion'
import { Scissors, User, Ruler, Sparkles, ArrowRight, Check } from 'lucide-react'
import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      icon: Scissors,
      title: 'Custom Tailoring',
      shortDescription: 'Bespoke garments crafted to your exact measurements',
      fullDescription: 'Our master tailors create custom-made garments that fit you perfectly. From suits to dresses, every piece is handcrafted with attention to detail and using the finest fabrics.',
      price: 'From $299',
      duration: '2-4 weeks',
      features: ['Personal consultation', 'Premium fabric selection', 'Multiple fittings', 'Final alterations'],
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
    },
    {
      id: 2,
      icon: User,
      title: 'Personal Styling',
      shortDescription: 'Expert guidance to discover your perfect style',
      fullDescription: 'Our experienced stylists work with you to understand your lifestyle, preferences, and goals, creating a personalized wardrobe that reflects your unique personality.',
      price: 'From $149',
      duration: '2-3 hours',
      features: ['One-on-one consultation', 'Color analysis', 'Body type assessment', 'Complete look creation'],
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
    },
    {
      id: 3,
      icon: Ruler,
      title: 'Alterations',
      shortDescription: 'Expert adjustments for the perfect fit',
      fullDescription: 'Whether you need a hem adjusted, a waist taken in, or shoulders restructured, our alteration experts ensure your garments fit flawlessly.',
      price: 'From $25',
      duration: '1-3 days',
      features: ['Hem adjustments', 'Waist alterations', 'Sleeve changes', 'Repair work'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Wardrobe Consultation',
      shortDescription: 'Complete wardrobe overhaul and organization',
      fullDescription: 'Let us help you build a cohesive, versatile wardrobe. We assess what you have, identify gaps, and create a strategic plan for your fashion future.',
      price: 'From $399',
      duration: 'Full day session',
      features: ['Closet audit', 'Seasonal planning', 'Shopping list creation', 'Mix & match guidance'],
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your needs, preferences, and goals in detail.',
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'We analyze your body type, coloring, and lifestyle requirements.',
    },
    {
      step: '03',
      title: 'Creation',
      description: 'Our experts craft or curate pieces specifically for you.',
    },
    {
      step: '04',
      title: 'Refinement',
      description: 'Multiple iterations to ensure absolute perfection.',
    },
  ]

  const testimonials = [
    {
      quote: 'The personal styling session completely transformed how I approach fashion. I finally understand what works for my body type.',
      author: 'Jennifer L.',
      service: 'Personal Styling',
    },
    {
      quote: 'Custom tailoring at ÉLÉGANCE is unmatched. My suit fits better than anything off the rack ever could.',
      author: 'Michael R.',
      service: 'Custom Tailoring',
    },
  ]

  return (
    <div className="services">
      <section className="services-hero">
        <div className="services-hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Our Services"
          />
          <div className="services-hero-overlay"></div>
        </div>
        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Services</h1>
          <p>Exceptional fashion services tailored to your needs</p>
        </motion.div>
      </section>

      <section className="services-intro section">
        <div className="container">
          <div className="services-intro-content">
            <span className="services-label">What We Offer</span>
            <h2>Elevate Your Style with Expert Services</h2>
            <p>
              At ÉLÉGANCE, we believe that great fashion goes beyond beautiful clothing.
              Our comprehensive range of services ensures that every aspect of your
              style journey is taken care of with expertise and care.
            </p>
          </div>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-card-simple">
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card-content">
                  <div className="service-icon">
                    <service.icon size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-short-description">{service.shortDescription}</p>
                  <p className="service-full-description">{service.fullDescription}</p>
                  <div className="service-meta">
                    <div className="service-meta-item">
                      <span className="meta-label">Price</span>
                      <span className="meta-value">{service.price}</span>
                    </div>
                    <div className="service-meta-item">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{service.duration}</span>
                    </div>
                  </div>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <Check size={14} /> {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="service-cta">
                    Book Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p>How we deliver exceptional results every time</p>
          </div>

          <div className="process-timeline">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-testimonials section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Experiences</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-footer">
                  <span className="testimonial-author">{testimonial.author}</span>
                  <span className="testimonial-service">{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Style?</h2>
            <p>Book your consultation today and let us help you look and feel your best.</p>
            <a href="/contact" className="cta-button">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
