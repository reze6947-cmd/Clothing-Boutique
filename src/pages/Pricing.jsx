import { motion } from 'framer-motion'
import { Check, Sparkles, Star, Crown, ArrowRight } from 'lucide-react'
import './Pricing.css'

function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Essential',
      icon: Sparkles,
      price: 149,
      description: 'Perfect for a quick style refresh',
      features: [
        '1-hour styling consultation',
        'Color analysis',
        'Body type assessment',
        '5 curated outfit recommendations',
        'Shopping list creation',
        'Email follow-up',
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: 'Premium',
      icon: Star,
      price: 399,
      description: 'Our most popular comprehensive package',
      features: [
        '2-hour in-depth consultation',
        'Complete wardrobe audit',
        'Color & body analysis',
        '15 curated pieces selected',
        'Personal shopping guide',
        'Mix & match wardrobe plan',
        '30-day support',
        'Seasonal update session',
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: 'VIP',
      icon: Crown,
      price: 899,
      description: 'The ultimate luxury experience',
      features: [
        'Full-day personalized styling',
        'Unlimited wardrobe consultation',
        'Personal shopping companion',
        '30+ curated pieces selected',
        'Custom alterations included',
        'Exclusive designer access',
        'Priority appointments',
        '1-year ongoing support',
        'Complimentary gift box',
        'VIP event invitations',
      ],
      highlighted: false,
    },
  ]

  const additionalServices = [
    {
      title: 'Custom Tailoring',
      startingPrice: 299,
      description: 'Bespoke garments crafted to your exact specifications',
    },
    {
      title: 'Alterations',
      startingPrice: 25,
      description: 'Expert adjustments for the perfect fit',
    },
    {
      title: 'Event Styling',
      startingPrice: 199,
      description: 'Complete look creation for special occasions',
    },
    {
      title: 'Corporate Wardrobe',
      startingPrice: 599,
      description: 'Professional styling for business success',
    },
    {
      title: 'Bridal Party Styling',
      startingPrice: 299,
      description: 'Coordination for your entire wedding party',
    },
    {
      title: 'Seasonal Capsule',
      startingPrice: 249,
      description: 'Curated capsule wardrobe for each season',
    },
  ]

  const faqs = [
    {
      question: 'How long does a styling session take?',
      answer: 'Our Essential session takes about 1 hour, Premium sessions are 2 hours, and VIP experiences can last a full day depending on your needs.',
    },
    {
      question: 'Do I need to bring anything to the consultation?',
      answer: 'Just bring yourself! We recommend wearing comfortable clothes that reflect your style. Photos of outfits you love can also be helpful.',
    },
    {
      question: 'Can I use the service for gifts?',
      answer: 'Absolutely! Gift certificates are available for all our services. They make perfect presents for the fashion-forward in your life.',
    },
    {
      question: 'What happens if I dont like the recommendations?',
      answer: 'Your satisfaction is our priority. We offer unlimited revisions until we find pieces that truly resonate with your style and make you feel confident.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="pricing">
      <section className="pricing-hero">
        <div className="pricing-hero-image">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
            alt="Pricing"
          />
          <div className="pricing-hero-overlay"></div>
        </div>
        <motion.div
          className="pricing-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Services & Pricing</h1>
          <p>Transparent pricing for exceptional styling services</p>
        </motion.div>
      </section>

      <section className="pricing-plans section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Choose Your Style Journey</h2>
            <p>Select the package that best fits your styling needs</p>
          </motion.div>

          <motion.div
            className="plans-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}
                variants={itemVariants}
              >
                {plan.highlighted && (
                  <div className="plan-badge">Most Popular</div>
                )}
                <div className="plan-icon">
                  <plan.icon size={32} />
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <Check size={18} /> {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`plan-cta ${plan.highlighted ? 'primary' : 'secondary'}`}>
                  Book Now <ArrowRight size={18} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="additional-services section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Additional Services</h2>
            <p>Enhance your experience with our specialized offerings</p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
              >
                <div className="service-header">
                  <h3>{service.title}</h3>
                  <span className="service-price">From ${service.startingPrice}</span>
                </div>
                <p>{service.description}</p>
                <a href="/contact" className="service-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pricing-faq section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-guarantee section">
        <div className="container">
          <motion.div
            className="guarantee-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="guarantee-icon">
              <Star size={40} />
            </div>
            <h2>Our Satisfaction Guarantee</h2>
            <p>
              We are confident you will love your styling experience. If you are not
              completely satisfied with our service, we will work with you until we
              get it right - at no additional cost.
            </p>
            <a href="/contact" className="guarantee-cta">
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
