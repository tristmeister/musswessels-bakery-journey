
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavItem } from '@/types/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

const MobileNav = ({ isOpen, onClose, items }: MobileNavProps) => {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when navigating
  useEffect(() => {
    onClose();
    setOpenDropdowns({});
  }, [location, onClose]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (name: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div
      ref={mobileMenuRef}
      className={`fixed inset-0 top-0 z-40 lg:hidden transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out pt-20 bg-white`}
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col space-y-3 p-4 max-h-[calc(100vh-80px)] overflow-y-auto">
        {/* Mobile Navigation Close Button */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:bg-gray-100"
          variant="ghost"
          size="icon"
          aria-label="Navigationsmenü schließen"
        >
          <X className="h-6 w-6" />
        </Button>

        {items.map((item) => (
          item.type === 'dropdown' ? (
            <div key={item.name} className="border-b border-gray-100 pb-2">
              {/* Mobile Dropdown Toggle */}
              <button
                onClick={() => toggleMobileDropdown(item.name)}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-lg font-medium rounded-md hover:bg-gray-100 transition-colors"
                aria-expanded={openDropdowns[item.name]}
              >
                {item.name}
                {openDropdowns[item.name] ? (
                  <ChevronUp className="h-5 w-5 ml-2" />
                ) : (
                  <ChevronDown className="h-5 w-5 ml-2" />
                )}
              </button>
              
              {/* Mobile Dropdown Content */}
              {openDropdowns[item.name] && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className={`block px-4 py-2 rounded-md text-base transition-colors ${
                        location.pathname === subItem.path
                          ? 'bg-brand-50 text-brand font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={onClose}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.path}
              to={item.path || '/'}
              className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors border-b border-gray-100 ${
                location.pathname === item.path
                  ? 'bg-brand-50 text-brand'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={onClose}
            >
              {item.name}
            </Link>
          )
        ))}
        
        {/* Mobile Search */}
        <div className="px-4 py-3 mt-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              type="search" 
              placeholder="Suchen..." 
              className="w-full pl-10 border-gray-300"
              aria-label="Suchen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
