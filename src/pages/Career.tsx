
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/ui/page-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Bäckermeister/in",
    location: "Zentrale Musterstadt",
    type: "Vollzeit",
    description: "Als Bäckermeister/in sind Sie verantwortlich für die Herstellung unserer handwerklichen Backwaren und die Anleitung unserer Auszubildenden."
  },
  {
    id: 2,
    title: "Verkäufer/in im Bäckereifachgeschäft",
    location: "Filiale Marktplatz",
    type: "Teilzeit",
    description: "Sie beraten unsere Kunden, verkaufen unsere Backwaren und sorgen für ein ansprechendes Erscheinungsbild unserer Filiale."
  },
  {
    id: 3,
    title: "Konditor/in",
    location: "Zentrale Musterstadt",
    type: "Vollzeit",
    description: "Als Konditor/in kreieren Sie unsere Torten und Feingebäck und bringen Ihre kreativen Ideen in unser Sortiment ein."
  },
  {
    id: 4,
    title: "Auszubildende/r Bäcker/in",
    location: "Zentrale Musterstadt",
    type: "Ausbildung",
    description: "In Ihrer dreijährigen Ausbildung lernen Sie alle Aspekte des Bäckerhandwerks kennen und werden Teil unserer Familienbäckerei."
  }
];

const Career = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Karriere bei Musswessels" 
          subtitle="Werden Sie Teil unserer Bäckerfamilie und entdecken Sie vielfältige Karrieremöglichkeiten"
          imageSrc="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?q=80&w=2787&auto=format&fit=crop"
        />

        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-corinthia text-center text-brand mb-12">Unsere Stellenangebote</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                      <span className="px-3 py-1 text-xs font-medium bg-brand-100 text-brand rounded-full">{job.type}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.location}</p>
                    <p className="text-gray-700 mb-5">{job.description}</p>
                    <Button className="w-full">
                      Jetzt bewerben <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-corinthia text-brand mb-6">Warum Musswessels?</h2>
              <p className="text-gray-700 mb-8">
                Als Familienbetrieb in vierter Generation legen wir großen Wert auf ein familiäres Arbeitsumfeld, faire Arbeitsbedingungen und 
                berufliche Entwicklungsmöglichkeiten. Bei uns erwartet Sie ein moderner Arbeitsplatz mit traditionellem Handwerk.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-50 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Team-Events</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-50 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Faire Vergütung</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-50 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Weiterbildungen</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-50 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Flexible Arbeitszeiten</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-corinthia text-brand mb-6">Initiativbewerbung</h2>
              <p className="text-gray-700 mb-8">
                Sie haben keine passende Stelle gefunden? Wir freuen uns immer über motivierte Talente! 
                Senden Sie uns Ihre Initiativbewerbung.
              </p>
              <Button size="lg">
                Jetzt bewerben
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
