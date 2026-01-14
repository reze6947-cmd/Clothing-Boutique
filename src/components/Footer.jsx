import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    shop: [
      { label: 'All Products', path: '/shop' },
      { label: 'Women', path: '/shop?category=women' },
      { label: 'Men', path: '/shop?category=men' },
      { label: 'Accessories', path: '/shop?category=accessories' },
      { label: 'New Arrivals', path: '/shop' },
      { label: 'Sale', path: '/shop' },
    ],
    about: [
      { label: 'Our Story', path: '/about' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' },
    ],
    support: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'FAQs', path: '/faqs' },
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'Size Guide', path: '/size-guide' },
    ],
  }

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              ÉLÉGANCE
            </Link>
            <p className="footer-tagline">
              Curated fashion for the modern individual. Where timeless elegance meets contemporary style.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
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

          <div className="footer-links-section">
            <div className="footer-links-column">
              <h4>Shop</h4>
              <ul>
                {footerLinks.shop.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>About</h4>
              <ul>
                {footerLinks.about.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-items">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>123 Mercer Street, SoHo, NY 10012</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+1 (212) 555-0123</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>hello@eleganceboutique.com</span>
                </div>
                <div className="contact-item">
                  <Clock size={16} />
                  <span>Mon-Sat: 10AM - 8PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ÉLÉGANCE Boutique. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
