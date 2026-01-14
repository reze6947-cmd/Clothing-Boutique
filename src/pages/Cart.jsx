import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ArrowLeft, Plus, Minus, ShoppingBag, Check } from 'lucide-react'
import { useCart } from '../components/Navbar'
import Button from '../components/Button'
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const shipping = cartTotal > 200 ? 0 : 15
  const total = cartTotal + shipping

  const handleCheckout = () => {
    setToastMessage('This is a demo store. Checkout functionality is not available.')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const handleAddToCart = (product) => {
    setToastMessage(`${product.name} added to cart!`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <ShoppingBag size={64} className="cart-empty-icon" />
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Button variant="primary" size="large" as={Link} to="/shop">
              Start Shopping
            </Button>
          </div>
        </div>
        
        <div className={`toast-notification ${showToast ? 'show' : ''}`}>
          <div className="toast-content">
            <Check size={20} />
            <span>{toastMessage}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <section className="cart-hero">
        <div className="cart-hero-content">
          <h1>Shopping Cart</h1>
          <p>{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </section>

      <section className="cart-content section">
        <div className="container">
          <div className="cart-grid">
            <div className="cart-items">
              <div className="cart-header">
                <span className="cart-header-product">Product</span>
                <span className="cart-header-price">Price</span>
                <span className="cart-header-quantity">Quantity</span>
                <span className="cart-header-total">Total</span>
                <span className="cart-header-remove"></span>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-product">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                  <div className="cart-item-price">${item.price}</div>
                  <div className="cart-item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="cart-item-total">${item.price * item.quantity}</div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="cart-item-remove"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              <div className="cart-continue">
                <Link to="/shop" className="continue-link">
                  <ArrowLeft size={18} />
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              {cartTotal < 200 && (
                <div className="shipping-notice">
                  Add ${(200 - cartTotal).toFixed(2)} more for free shipping!
                </div>
              )}
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button 
                variant="primary" 
                size="large" 
                fullWidth
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>

              <div className="secure-notice">
                <ShoppingBag size={16} />
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        <div className="toast-content">
          <Check size={20} />
          <span>{toastMessage}</span>
        </div>
      </div>
    </div>
  )
}

export default Cart
