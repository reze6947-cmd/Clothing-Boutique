import { motion } from 'framer-motion'
import { Award, Heart, Star, ArrowRight } from 'lucide-react'
import './About.css'

function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Every piece is meticulously crafted by skilled artisans using the finest materials.',
    },
    {
      icon: Heart,
      title: 'Sustainable Fashion',
      description: 'We are committed to ethical sourcing and environmentally conscious production.',
    },
    {
      icon: Star,
      title: 'Timeless Design',
      description: 'Our collections blend contemporary trends with timeless elegance.',
    },
  ]

  const team = [
    {
      name: 'Victoria Chen',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      bio: 'With over 15 years in haute couture, Victoria brings her passion for elegance to every collection.',
    },
    {
      name: 'Marcus Williams',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      bio: 'Marcus combines modern aesthetics with classic tailoring techniques.',
    },
    {
      name: 'Sophia Laurent',
      role: 'Stylist & Consultant',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      bio: 'Sophia helps clients discover their personal style through personalized consultations.',
    },
  ]

  const timeline = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'ÉLÉGANCE opened its first boutique in SoHo, New York.',
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Launched our online store and expanded to international shipping.',
    },
    {
      year: '2020',
      title: 'Sustainability Initiative',
      description: 'Committed to 100% sustainable and ethical fashion practices.',
    },
    {
      year: '2024',
      title: 'Global Recognition',
      description: 'Named one of the top 10 boutique fashion brands globally.',
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
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80"
            alt="ÉLÉGANCE Boutique"
          />
          <div className="about-hero-overlay"></div>
        </div>
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Story</h1>
          <p>Where timeless elegance meets contemporary style</p>
        </motion.div>
      </section>

      <section className="about-intro section">
        <div className="container">
          <div className="about-intro-grid">
            <motion.div
              className="about-intro-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="about-label">Since 2015</span>
              <h2>Crafting Elegance, One Piece at a Time</h2>
              <p>
                ÉLÉGANCE was born from a simple yet powerful vision: to create a boutique
                that offers more than just clothing. We wanted to curate an experience
                where every piece tells a story, where quality meets creativity, and
                where fashion becomes a form of self-expression.
              </p>
              <p>
                Today, ÉLÉGANCE has grown from a small SoHo boutique to a renowned
                destination for fashion-forward individuals who appreciate the finer
                things in life. Our collections are carefully selected to blend
                timeless elegance with contemporary trends, ensuring that each piece
                is both current and enduring.
              </p>
            </motion.div>
            <motion.div
              className="about-intro-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="ÉLÉGANCE Store"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} className="value-card" variants={itemVariants}>
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about-timeline section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Journey</h2>
          </motion.div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p>The creative minds behind ÉLÉGANCE</p>
          </motion.div>

          <motion.div
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div key={index} className="team-card" variants={itemVariants}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Experience ÉLÉGANCE in Person</h2>
            <p>Visit our boutique or book a personalized styling session</p>
            <a href="/contact" className="cta-link">
              Get in Touch <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
