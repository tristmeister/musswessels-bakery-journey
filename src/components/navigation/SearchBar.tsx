
import { useRef, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const SearchBar = ({ isOpen, onClose, onOpen }: SearchBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <div className="animate-fade-in flex items-center bg-white/10 rounded-md overflow-hidden">
        <Input 
          ref={searchInputRef}
          type="search" 
          placeholder="Suchen..." 
          className="border-none focus-visible:ring-0 bg-transparent text-white placeholder:text-white/70 w-[200px]"
          aria-label="Suchen"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="text-white hover:bg-white/20"
          aria-label="Suche schließen"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={onOpen}
      className="text-white hover:bg-white/20"
      aria-label="Suche öffnen"
    >
      <Search className="h-5 w-5" />
    </Button>
  );
};

export default SearchBar;
