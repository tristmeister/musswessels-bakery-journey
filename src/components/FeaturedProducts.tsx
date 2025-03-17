
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Champagnerroggen',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop',
    description: 'Unser Champagnerroggen – ein Geschmackserlebnis mit regionalen Zutaten, nach traditioneller Rezeptur gebacken.',
    seasonal: false,
    price: '3,95 €'
  },
  {
    id: 2,
    name: 'Dinkel Vollkornbrot',
    image: 'https://images.unsplash.com/photo-1565188093730-08b53fa550e4?q=80&w=2670&auto=format&fit=crop',
    description: 'Natürlich gesund und bekömmlich, aus 100% Dinkel aus regionaler Landwirtschaft.',
    seasonal: false,
    price: '4,50 €'
  },
  {
    id: 3,
    name: 'Butterkuchen',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2670&auto=format&fit=crop',
    description: 'Zarter Hefeteig mit reichlich Butter und karamellisiertem Zucker – ein süßer Klassiker.',
    seasonal: false,
    price: '2,80 €'
  },
  {
    id: 4,
    name: 'Erdbeer-Sahnetorte',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2665&auto=format&fit=crop',
    description: 'Frische Erdbeeren auf lockerem Biskuit mit unserer hausgemachten Sahne. Saisonal begrenzt verfügbar.',
    seasonal: true,
    price: '18,50 €'
  },
  {
    id: 5,
    name: 'Bärlauch-Baguette',
    image: 'https://images.unsplash.com/photo-1533782654613-826a072dd6f3?q=80&w=2669&auto=format&fit=crop',
    description: 'Knuspriges Baguette mit frischem Bärlauch aus dem Wald. Nur in der Bärlauch-Saison.',
    seasonal: true,
    price: '3,50 €'
  },
];

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsPerView = 3;
  const [showArrows, setShowArrows] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(products.length).fill(false));

  useEffect(() => {
    const updateShowArrows = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setShowArrows(products.length > 1);
      } else if (width < 1024) {
        setShowArrows(products.length > 2);
      } else {
        setShowArrows(products.length > 3);
      }
    };

    const updateItemWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const items = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        setItemWidth(containerWidth / items);
      }
    };

    updateShowArrows();
    updateItemWidth();

    window.addEventListener('resize', () => {
      updateShowArrows();
      updateItemWidth();
    });

    return () => {
      window.removeEventListener('resize', () => {
        updateShowArrows();
        updateItemWidth();
      });
    };
  }, []);

  const handleImageLoad = (index: number) => {
    const newLoaded = [...isLoaded];
    newLoaded[index] = true;
    setIsLoaded(newLoaded);
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollNext = () => {
    if (currentIndex < products.length - getItemsPerView()) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const getItemsPerView = () => {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return itemsPerView;
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title after:mt-4">Unsere Backwaren</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie handgemachte Spezialitäten aus unserer Backstube – traditionell gefertigt mit Zutaten aus der Region.
          </p>
        </div>

        <div className="relative">
          {showArrows && (
            <>
              <button
                onClick={scrollPrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 transition-all duration-300 ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                }`}
                aria-label="Previous products"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={scrollNext}
                disabled={currentIndex >= products.length - getItemsPerView()}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 transition-all duration-300 ${
                  currentIndex >= products.length - getItemsPerView()
                    ? 'opacity-50 cursor-not-allowed'
                    : 'opacity-100'
                }`}
                aria-label="Next products"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div 
            className="overflow-hidden px-4" 
            ref={containerRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * itemWidth}px)`,
              }}
            >
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="p-4 flex-shrink-0"
                  style={{ width: `${itemWidth}px` }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative overflow-hidden h-64">
                      {!isLoaded[index] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="w-10 h-10 border-4 border-brand-300 border-t-brand rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out ${
                          isLoaded[index] ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(index)}
                      />
                      {product.seasonal && (
                        <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-xs font-medium">
                          Saisonal
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 flex-grow mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-brand">{product.price}</span>
                        <Link
                          to="/shop"
                          className="text-sm font-medium text-brand border border-brand px-4 py-2 rounded-md hover:bg-brand hover:text-white transition-colors duration-300"
                        >
                          Zum Shop
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="button-primary inline-flex items-center"
          >
            Alle Produkte entdecken
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
