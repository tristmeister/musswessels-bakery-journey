
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import NavLogo from './navigation/NavLogo';
import SearchBar from './navigation/SearchBar';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import CartIcon from './shop/cart/CartIcon';
import { NavItem } from '@/types/navigation';

// Main navigation structure with dropdowns
const navItems: NavItem[] = [
  { 
    name: 'Startseite', 
    path: '/' 
  },
  { 
    name: 'Fachgeschäfte & Karriere',
    type: 'dropdown',
    items: [
      { name: 'Fachgeschäfte', path: '/fachgeschaefte' },
      { name: 'Karriere', path: '/jobs' }
    ]
  },
  { 
    name: 'Über Uns', 
    path: '/familienbaeckerei' 
  },
  {
    name: 'Produkte & Services',
    type: 'dropdown',
    items: [
      { name: 'Fototorten-Designer', path: '/fototorten-designer' },
      { name: 'Online-Shop', path: '/shop' },
      { name: 'Vorteilskarte', path: '/vorteilskarte' }
    ]
  },
  { 
    name: 'Kundenmeinung', 
    path: '/kundenmeinung' 
  },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key for search and mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSearchOpen) {
          setIsSearchOpen(false);
        } else if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, isOpen]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-brand shadow-md ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <NavLogo />

        {/* Desktop Navigation */}
        {!isMobile && <DesktopNav items={navItems} />}

        {/* Utility Section (Search, Cart) */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <SearchBar 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
            onOpen={() => setIsSearchOpen(true)} 
          />

          {/* Cart */}
          <CartIcon />

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:bg-white/20"
            variant="ghost"
            aria-expanded={isOpen}
            aria-label="Navigationsmenü anzeigen"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        items={navItems} 
      />
    </header>
  );
};

export default Navbar;
