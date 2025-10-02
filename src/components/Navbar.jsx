import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Cloud } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Über uns', path: '/about' },
    { name: 'Kontakt', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-primary p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
              IMAN CLOUD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : isScrolled
                    ? 'text-neutral-dark hover:text-primary'
                    : 'text-neutral-dark hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-background-light transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neutral-dark" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-card animate-slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-background-light'
                    : 'text-neutral-dark hover:text-primary hover:bg-background-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link to="/contact" className="btn-primary w-full text-center block">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}