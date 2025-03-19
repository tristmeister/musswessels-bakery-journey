
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
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
  );
};

export default NavLogo;
