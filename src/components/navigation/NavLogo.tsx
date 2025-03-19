
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center"
      aria-label="Musswessels Home"
    >
      <div className="relative h-12 w-12 mr-3 overflow-hidden rounded-full border-2 border-white transition-all duration-300 hover:scale-105 bg-white flex items-center justify-center">
        <img src="/lovable-uploads/8e70f726-e9d9-4b10-8e08-b54c2f09176d.png" alt="Musswessels Logo" className="h-full w-full object-contain" />
      </div>
      <span className="text-lg md:text-xl font-ephesis text-white">
        Musswessels
      </span>
    </Link>
  );
};

export default NavLogo;
