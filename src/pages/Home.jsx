import { motion } from 'framer-motion'
import { ArrowRight, Star, Truck, Shield, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import './Home.css'

function Home() {
  const featuredProducts = [
    {
      id: 101,
      name: 'Silk Evening Dress',
      price: 459,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      rating: 5,
      isSale: true,
    },
      {
          id: 102,
          name: 'Cashmere Blend Coat',
          price: 789,
          image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
          rating: 5,
          isNew: true,
        },
    {
      id: 103,
      name: 'Tailored Linen Suit',
      price: 599,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      rating: 4,
    },
    {
      id: 104,
      name: 'Artisan Leather Handbag',
      price: 349,
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
      rating: 5,
      isNew: true,
    },
  ]

  const categories = [
    {
      id: 'women',
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      link: '/shop?category=women',
    },
    {
      id: 'men',
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&q=80',
      link: '/shop?category=men',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80',
      link: '/shop?category=accessories',
    },
  ]

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $200',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '100% protected transactions',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Handcrafted with care',
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
    <div className="home">
      <section className="hero">
        <div className="hero-video-container">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="ÉLÉGANCE Boutique"
            className="hero-video"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="hero-subtitle">New Collection 2026</span>
          <h1 className="hero-title">
            Elegant Fashion for<br />Every Occasion
          </h1>
          <p className="hero-description">
            Discover our curated collection of timeless pieces designed for the modern individual.
          </p>
          <div className="hero-actions">
            <Button
              variant="outline"
              size="large"
              icon={ArrowRight}
              iconPosition="right"
              as={Link}
              to="/shop"
            >
              Shop Now
            </Button>
            <Button
              variant="secondary"
              size="large"
              as={Link}
              to="/about"
            >
              Our Story
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="features">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
              >
                <feature.icon size={32} className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="categories section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Shop by Category</h2>
            <p>Explore our curated collections</p>
          </motion.div>

          <motion.div
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="category-card"
                variants={itemVariants}
              >
                <Link to={category.link}>
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                    <span className="category-link">
                      Shop Now <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="featured-products section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Products</h2>
            <p>Handpicked favorites from our latest collection</p>
          </motion.div>

          <motion.div
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="section-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="secondary" as={Link} to="/Shop">
              View All Products
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="promo-banner">
        <div className="container">
          <motion.div
            className="promo-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="promo-label">Limited Time Offer</span>
            <h2>Summer Collection Launch</h2>
            <p>Up to 30% off on selected items. Free shipping on all orders.</p>
            <Button variant="outline" size="large" as={Link} to="/shop">
              Shop the Sale
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What Our Customers Say</h2>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Sarah M.',
                role: 'Fashion Blogger',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                quote: 'ÉLÉGANCE has completely transformed my wardrobe. The quality is unmatched and the styles are always on trend.',
              },
              {
                name: 'James K.',
                role: 'CEO, Tech StartUp',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
                quote: 'Finally found a boutique that understands modern masculinity. Their suits are absolutely stunning.',
              },
              {
                name: 'Emily R.',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                quote: 'The personal styling service is incredible. They really understand your body type and preferences.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                variants={itemVariants}
              >
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="star filled" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
