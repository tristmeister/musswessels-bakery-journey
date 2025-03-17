
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

// Main navigation structure with dropdowns
const navItems = [
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
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    setIsSearchOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-brand shadow-md ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          aria-label="Musswessels Home"
        >
          <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-full border-2 border-white transition-all duration-300 hover:scale-105 bg-white flex items-center justify-center">
            <span className="text-brand font-bold text-xl">M</span>
          </div>
          <span className="text-lg md:text-xl font-semibold text-white">
            Musswessels
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                item.type === 'dropdown' ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20 focus:bg-white/20">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] p-2 gap-1">
                        {item.items.map((subItem) => (
                          <li key={subItem.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={subItem.path}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  location.pathname === subItem.path && "bg-accent"
                                )}
                              >
                                <div className="text-sm font-medium">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white hover:bg-white/20 focus:bg-white/20",
                        location.pathname === item.path && "bg-white/20"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Utility Section (Search, Cart) */}
        <div className="flex items-center gap-2">
          {/* Search */}
          {isSearchOpen ? (
            <div className="animate-fade-in flex items-center bg-white/10 rounded-md overflow-hidden">
              <Input 
                type="search" 
                placeholder="Suchen..." 
                className="border-none focus-visible:ring-0 bg-transparent text-white placeholder:text-white/70 w-[200px]"
                autoFocus
              />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:bg-white/20"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Cart */}
          <Link to="/shop">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-white text-brand rounded-full w-4 h-4 text-xs flex items-center justify-center">0</span>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:bg-white/20"
            variant="ghost"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 top-0 z-40 lg:hidden transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-20 bg-white`}
      >
        <div className="flex flex-col space-y-3 p-4">
          {navItems.map((item) => (
            item.type === 'dropdown' ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-3 text-left text-lg font-medium rounded-md hover:bg-gray-100">
                  {item.name}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.path} asChild>
                      <Link
                        to={subItem.path}
                        className={`block w-full px-4 py-3 text-lg font-medium rounded-md ${
                          location.pathname === subItem.path
                            ? 'bg-brand-50 text-brand'
                            : 'text-gray-800 hover:bg-gray-100'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
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
            )
          ))}
          
          {/* Mobile Search */}
          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Suchen..." 
                className="w-full pl-10 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
