import { useState, useEffect, createContext, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import './Navbar.css'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  useEffect(() => {
    const savedCart = localStorage.getItem('elegance-cart')
    const savedWishlist = localStorage.getItem('elegance-wishlist')
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  useEffect(() => {
    localStorage.setItem('elegance-cart', JSON.stringify(cart))
    localStorage.setItem('elegance-wishlist', JSON.stringify(wishlist))
  }, [cart, wishlist])

  const showToastMessage = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
    showToastMessage(`${product.name} added to cart!`)
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    setCart(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ))
  }

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        const newWishlist = prev.filter(item => item.id !== product.id)
        showToastMessage(`${product.name} removed from wishlist`)
        return newWishlist
      }
      showToastMessage(`${product.name} added to wishlist!`)
      return [...prev, product]
    })
  }

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId)
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      isInWishlist,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
      toast,
      showToastMessage
    }}>
      {children}
      <div className={`toast-notification ${toast.show ? 'show' : ''}`}>
        <div className="toast-content">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toast.message}</span>
        </div>
      </div>
    </CartContext.Provider>
  )
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          ÉLÉGANCE
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="nav-icon-btn cart-btn">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>
          <button 
            className="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
