import { Routes, Route } from 'react-router-dom'
import Navbar, { CartProvider } from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
