
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/ui/page-header";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    year: "1868",
    title: "Gründung",
    description: "Gründung der Bäckerei durch Franz Musswessels in einer kleinen Backstube"
  },
  {
    year: "1902",
    title: "Zweite Generation",
    description: "Der Sohn Wilhelm Musswessels übernimmt den Betrieb und erweitert ihn um ein Café"
  },
  {
    year: "1953",
    title: "Dritte Generation",
    description: "Karl Musswessels modernisiert den Betrieb und gründet die ersten Filialen"
  },
  {
    year: "1988",
    title: "Vierte Generation",
    description: "Heinrich Musswessels übernimmt und baut das Unternehmen regional aus"
  },
  {
    year: "2010",
    title: "Modernisierung",
    description: "Neubau der Produktionsstätte mit modernsten Technologien und Fokus auf Nachhaltigkeit"
  },
  {
    year: "Heute",
    title: "Familienbetrieb",
    description: "Über 70 Filialen in der Region, weiterhin in Familienhand mit traditionellen Werten"
  }
];

const AboutUs = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Unsere Familienbäckerei" 
          subtitle="Tradition und Handwerk seit 1868 - Vier Generationen Backkunst und Leidenschaft"
          imageSrc="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2726&auto=format&fit=crop"
        />

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-2 text-sm tracking-wider uppercase text-brand bg-brand-50 px-3 py-1 rounded-sm">
                  Seit 1868
                </div>
                <h2 className="text-4xl font-corinthia text-brand mb-6">Unsere Geschichte</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Die Geschichte der Familienbäckerei Musswessels beginnt im Jahr 1868, als der Bäckermeister Franz Musswessels seine kleine Backstube in Musterstadt eröffnete. Mit seinem Handwerk und seiner Leidenschaft für qualitativ hochwertige Backwaren legte er den Grundstein für unser heutiges Unternehmen.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Über vier Generationen hinweg wurde das Wissen, die Leidenschaft und die Geheimnisse der Backkunst weitergegeben. Jede Generation brachte ihre eigenen Ideen ein, modernisierte den Betrieb und entwickelte neue Rezepturen. Was jedoch stets bewahrt wurde, ist unser Anspruch an höchste Qualität und die Verbundenheit zum traditionellen Bäckerhandwerk.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Heute führt Heinrich Musswessels in vierter Generation das Unternehmen. Mit über 70 Filialen in der Region sind wir zu einem wichtigen Teil der lokalen Gemeinschaft geworden. Trotz unseres Wachstums bleiben wir unseren Wurzeln treu: handwerkliche Qualität, sorgfältig ausgewählte Zutaten und die persönliche Beziehung zu unseren Kunden.
                </p>
              </div>
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                    alt="Historische Bäckerei" 
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">Historische Aufnahme der Bäckerei Musswessels, um 1920</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-4xl font-corinthia text-center text-brand mb-12">Unsere Zeitreise</h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-100"></div>
                
                {/* Timeline events */}
                <div className="space-y-16">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className={`relative flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                      {/* Year bubble */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-lg font-semibold">
                          {event.year}
                        </div>
                      </div>
                      
                      {/* Content box */}
                      <div className={`w-full md:w-5/12 bg-white p-6 rounded-lg shadow-md ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      }`}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-corinthia text-brand mb-6">Unsere Werte</h2>
              <p className="text-gray-700">
                Als Familienbetrieb legen wir großen Wert auf Traditionen, Qualität und Nachhaltigkeit. Diese Werte prägen unser tägliches Handeln und die Herstellung unserer Produkte.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-corinthia text-2xl text-center mb-4">Qualität</h3>
                <p className="text-gray-700 text-center">
                  Wir verwenden nur die besten Zutaten und setzen auf traditionelle Herstellungsverfahren, um erstklassige Backwaren herzustellen.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="font-corinthia text-2xl text-center mb-4">Tradition</h3>
                <p className="text-gray-700 text-center">
                  Unsere Rezepte sind teilweise über Generationen überliefert und werden mit modernen Methoden behutsam weiterentwickelt.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
                  </svg>
                </div>
                <h3 className="font-corinthia text-2xl text-center mb-4">Nachhaltigkeit</h3>
                <p className="text-gray-700 text-center">
                  Wir achten auf regionale Zutaten, kurze Transportwege und einen verantwortungsvollen Umgang mit Ressourcen.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="inline-flex items-center">
                Mehr über unsere Produkte
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
