
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Startseite', path: '/' },
  { name: 'Fachgeschäfte', path: '/fachgeschaefte' },
  { name: 'Karriere', path: '/jobs' },
  { name: 'Über Uns', path: '/familienbaeckerei' },
  { name: 'Fototorten-Designer', path: '/fototorten-designer' },
  { name: 'Online-Shop', path: '/shop' },
  { name: 'Vorteilskarte', path: '/vorteilskarte' },
  { name: 'Kundenmeinung', path: '/kundenmeinung' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Musswessels Home"
        >
          <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-full border-2 border-brand transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-brand flex items-center justify-center text-white font-bold text-xl">M</div>
          </div>
          <span className={`text-lg md:text-xl font-semibold transition-all duration-300 ${scrolled ? 'text-brand' : 'text-brand'}`}>
            Musswessels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
                ${
                  location.pathname === item.path
                    ? 'text-brand after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand'
                    : 'text-gray-800 hover:text-brand'
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden rounded-md p-2 text-gray-800 hover:bg-gray-100 transition-colors"
          aria-expanded={isOpen}
          aria-label="Open navigation menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 top-0 z-40 lg:hidden transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20 bg-white`}
      >
        <div className="flex flex-col space-y-3 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-brand-50 text-brand'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
