
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2532&auto=format&fit=crop',
    title: 'Willkommen bei Ihrer Lieblingsbäckerei seit 1868',
    subtitle: 'Tradition, Qualität und Leidenschaft in jedem Bissen',
    cta: 'Jetzt entdecken'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop',
    title: 'Handgemachte Backwaren',
    subtitle: 'Aus regionalen Zutaten täglich frisch für Sie gebacken',
    cta: 'Zu unseren Produkten'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1592811773343-1fa652d0e9a2?q=80&w=2670&auto=format&fit=crop',
    title: 'Über 70 Fachgeschäfte',
    subtitle: 'Unsere Backwaren sind ganz in Ihrer Nähe',
    cta: 'Filiale finden'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const length = slides.length;

  useEffect(() => {
    const preloadImages = () => {
      const promises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="w-16 h-16 border-4 border-brand-300 border-t-brand rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-out'
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
                <span className="inline-block mb-2 text-sm md:text-base tracking-wider uppercase text-white bg-brand px-3 py-1 rounded-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Familienbäckerei
                </span>
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="text-lg md:text-xl text-white mb-8 animate-fade-in"
                  style={{ animationDelay: '0.7s' }}
                >
                  {slide.subtitle}
                </p>
                <Link 
                  to="/shop" 
                  className="inline-block bg-brand hover:bg-brand-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: '0.9s' }}
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-brand' : 'bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
