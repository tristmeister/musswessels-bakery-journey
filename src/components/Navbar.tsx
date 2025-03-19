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

// Updated navigation structure with mega menu
const navItems: NavItem[] = [
  { 
    name: 'Startseite', 
    path: '/' 
  },
  { 
    name: 'Shop', 
    path: '/shop' 
  },
  { 
    name: 'Über Uns', 
    path: '/familienbaeckerei' 
  },
  {
    name: 'Produkte & Services',
    type: 'mega-menu',
    megaMenu: {
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      columns: [
        {
          header: "Unsere Produkte",
          links: [
            { name: 'Brot & Brötchen', path: '/shop?category=bread' },
            { name: 'Kuchen & Torten', path: '/shop?category=cakes' },
            { name: 'Feingebäck', path: '/shop?category=pastries' },
            { name: 'Saisonales', path: '/shop?category=seasonal' }
          ]
        },
        {
          header: "Online Services",
          links: [
            { name: 'Fototorten-Designer', path: '/fototorten-designer' },
            { name: 'Online-Shop', path: '/shop' },
            { name: 'Bestellungen', path: '/bestellungen' },
            { name: 'Warenkorb', path: '/checkout' }
          ]
        },
        {
          header: "Kundenprogramme",
          links: [
            { name: 'Kundenprogramme', path: '/kundenprogramme' },
            { name: 'Vorteilskarte', path: '/vorteilskarte' },
            { name: 'Treuepunkte', path: '/kundenprogramme?tab=treuepunkte' },
            { name: 'Gutscheine', path: '/kundenprogramme?tab=gutscheine' }
          ]
        },
        {
          header: "Fachgeschäfte & Karriere",
          links: [
            { name: 'Fachgeschäfte', path: '/fachgeschaefte' },
            { name: 'Karriere', path: '/jobs' }
          ]
        }
      ]
    },
    items: [
      { name: 'Fototorten-Designer', path: '/fototorten-designer' },
      { name: 'Online-Shop', path: '/shop' },
      { name: 'Kundenprogramme', path: '/kundenprogramme' }
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-brand/95 backdrop-blur-sm shadow-md' 
          : 'py-4 bg-brand shadow-md'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 relative">
        {/* Logo */}
        <NavLogo />

        {/* Desktop Navigation */}
        {!isMobile && <DesktopNav items={navItems} />}

        {/* Utility Section (Search, Cart) */}
        <div className="flex items-center gap-3">
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
            className="lg:hidden text-white hover:bg-white/30 focus:bg-white/20 transition-colors duration-200"
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
