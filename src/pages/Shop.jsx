import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter, ShoppingBag, Heart, Star, ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import './Shop.css'

function Shop() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'suits', name: 'Suits' },
  ]

  const products = [
    {
      id: 1,
      name: 'Silk Evening Dress',
      price: 459,
      originalPrice: 599,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      category: 'dresses',
      rating: 5,
      isSale: true,
    },
    {
      id: 2,
      name: 'Cashmere Blend Coat',
      price: 789,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
      category: 'women',
      rating: 5,
      isNew: true,
    },
    {
      id: 3,
      name: 'Tailored Linen Suit',
      price: 599,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      category: 'suits',
      rating: 4,
    },
    {
      id: 4,
      name: 'Artisan Leather Handbag',
      price: 349,
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
      category: 'accessories',
      rating: 5,
      isNew: true,
    },
    {
      id: 5,
      name: 'Velvet Cocktail Dress',
      price: 329,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
      category: 'dresses',
      rating: 5,
    },
    {
      id: 6,
      name: 'Wool Overcoat',
      price: 659,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80',
      category: 'men',
      rating: 4,
      isSale: true,
    },
    {
      id: 7,
      name: 'Silk Scarf',
      price: 89,
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80',
      category: 'accessories',
      rating: 5,
    },
    {
      id: 8,
      name: 'Linen Summer Dress',
      price: 199,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
      category: 'women',
      rating: 4,
      isNew: true,
    },
    {
      id: 9,
      name: 'Classic Tuxedo',
      price: 899,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80',
      category: 'suits',
      rating: 5,
    },
    {
      id: 10,
      name: 'Leather Belt',
      price: 79,
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=80',
      category: 'accessories',
      rating: 4,
    },
    {
      id: 11,
      name: 'Cashmere Sweater',
      price: 289,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
      category: 'women',
      rating: 5,
    },
    {
      id: 12,
      name: 'Tailored Blazer',
      price: 449,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
      category: 'men',
      rating: 4,
    },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="shop">
      <section className="shop-hero">
        <div className="shop-hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Shop"
          />
          <div className="shop-hero-overlay"></div>
        </div>
        <div className="shop-hero-content">
          <h1>Shop</h1>
          <p>Discover our curated collection of elegant fashion</p>
        </div>
      </section>

      <section className="shop-content section">
        <div className="container">
          <div className="shop-header">
            <div className="shop-categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="shop-sort">
              <Filter size={18} />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="products-count">
            Showing {sortedProducts.length} products
          </div>

          <div className="shop-grid">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
              <Button variant="secondary" as={Link} to="/shop">
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="shop-newsletter section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for exclusive offers and new arrivals.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
