
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Search } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Backhaus Zentrale',
    address: 'Bäckerstraße 12, 12345 Musterstadt',
    image: 'https://images.unsplash.com/photo-1596567181771-c28cd52298e7?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Filiale Marktplatz',
    address: 'Marktplatz 3, 12345 Musterstadt',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Café am Stadtpark',
    address: 'Parkstraße 45, 12345 Musterstadt',
    image: 'https://images.unsplash.com/photo-1520866342094-40adb4e57631?q=80&w=2672&auto=format&fit=crop',
  },
];

const Locations = () => {
  const [searchValue, setSearchValue] = useState('');
  const [imagesLoaded, setImagesLoaded] = useState(Array(locations.length).fill(false));

  const handleImageLoad = (index: number) => {
    const newLoaded = [...imagesLoaded];
    newLoaded[index] = true;
    setImagesLoaded(newLoaded);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title after:mt-4">Unsere Fachgeschäfte</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Besuchen Sie eine unserer über 70 Filialen in der Region und entdecken Sie frische Backwaren und herzlichen Service.
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Ort oder Postleitzahl eingeben..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={location.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-10 h-10 border-4 border-brand-300 border-t-brand rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={location.image}
                  alt={location.name}
                  className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out ${
                    imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-brand mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">{location.address}</p>
                </div>
                <Link
                  to="/fachgeschaefte"
                  className="mt-2 inline-block text-brand font-medium hover:underline"
                >
                  Details ansehen
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/fachgeschaefte"
            className="button-primary inline-flex items-center"
          >
            Alle Fachgeschäfte finden
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Locations;
