import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useCart } from './Navbar'
import './ProductCard.css'

function ProductCard({
  id,
  image,
  name,
  price,
  originalPrice,
  rating = 4,
  isNew = false,
  isSale = false,
}) {
  const { addToCart, toggleWishlist, isInWishlist, showToastMessage } = useCart()
  const inWishlist = isInWishlist(id)

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={`star ${i < count ? 'filled' : ''}`}
      />
    ))
  }

  const handleWishlistClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist({ id, image, name, price })
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({ id, image, name, price })
    showToastMessage(`${name} added to cart!`)
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        
        {isNew && <span className="product-badge new">New</span>}
        {isSale && <span className="product-badge sale">Sale</span>}
        
        <div className="product-actions">
          <button 
            className={`product-action-btn ${inWishlist ? 'active' : ''}`}
            onClick={handleWishlistClick}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
          </button>
          <button 
            className="product-action-btn add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-rating">
          {renderStars(rating)}
        </div>
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          <span className="current-price">${price}</span>
          {originalPrice && (
            <span className="original-price">${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
