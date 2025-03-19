
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/ui/page-header";
import StoreMap from "../components/StoreMap";
import { MapPin, Clock, Coffee, Utensils, Cake, WifiIcon } from "lucide-react";

const features = [
  { icon: <Coffee className="h-6 w-6" />, name: "Café-Bereich" },
  { icon: <Utensils className="h-6 w-6" />, name: "Snack-Angebot" },
  { icon: <Cake className="h-6 w-6" />, name: "Torten & Kuchen" },
  { icon: <WifiIcon className="h-6 w-6" />, name: "Kostenloses WLAN" },
];

const Stores = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Unsere Fachgeschäfte" 
          subtitle="Entdecken Sie über 70 Filialen in der Region und finden Sie die nächste Bäckerei in Ihrer Nähe"
          imageSrc="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2980&auto=format&fit=crop"
        />

        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-corinthia text-center text-brand mb-12">Filiale finden</h2>
            <StoreMap />
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-corinthia text-brand mb-6">Unsere Filialen im Überblick</h2>
              <p className="text-gray-700">
                In unseren über 70 Fachgeschäften bieten wir Ihnen eine große Auswahl unserer handwerklich hergestellten Backwaren. 
                Viele unserer Filialen verfügen außerdem über ein gemütliches Café mit leckerem Frühstücks- und Mittagsangebot.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-50 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900">{feature.name}</h3>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2848&auto=format&fit=crop" 
                    alt="Unsere Bäckereien" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-corinthia text-brand mb-4">Frische Backwaren den ganzen Tag</h3>
                  <p className="text-gray-700 mb-4">
                    In unseren Fachgeschäften backen wir mehrmals täglich frisch für Sie. So können Sie zu jeder Tageszeit frische Brötchen und knuspriges Brot genießen.
                  </p>
                  <div className="flex items-center text-gray-600 mt-6">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Typische Öffnungszeiten: Mo-Fr 6:00-18:00, Sa 6:00-14:00</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2940&auto=format&fit=crop" 
                    alt="Unsere Cafés" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-corinthia text-brand mb-4">Gemütliche Café-Bereiche</h3>
                  <p className="text-gray-700 mb-4">
                    Viele unserer Fachgeschäfte verfügen über einen gemütlichen Café-Bereich. Hier können Sie in entspannter Atmosphäre unsere Köstlichkeiten genießen.
                  </p>
                  <div className="flex items-center text-gray-600 mt-6">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>Filialen mit Café-Bereich sind in der Filialsuche gekennzeichnet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stores;
