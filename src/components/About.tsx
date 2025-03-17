
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-brand opacity-20 rounded-md"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 border-2 border-brand opacity-20 rounded-md"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-10 h-10 border-4 border-brand-300 border-t-brand rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src="https://images.unsplash.com/photo-1605974293687-a25c96fb595e?q=80&w=2670&auto=format&fit=crop"
                alt="Familienbäckerei Musswessels"
                className={`w-full h-full object-cover aspect-[4/3] ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="font-bold text-xl">Familie Musswessels</div>
                <div className="text-sm opacity-80">4. Generation</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="inline-block mb-2 text-sm tracking-wider uppercase text-brand bg-brand-50 px-3 py-1 rounded-sm">
              Seit 1868
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tradition und Handwerk <span className="text-brand">seit vier Generationen</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Als Familienbäckerei blicken wir auf eine lange Geschichte zurück. Seit 1868 steht der Name Musswessels für handwerkliche Backkunst auf höchstem Niveau. Was mit einer kleinen Backstube begann, ist heute zu einem modernen Familienbetrieb mit über 70 Fachgeschäften herangewachsen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trotz unseres Wachstums sind wir unseren Werten treu geblieben: Qualität durch sorgfältig ausgewählte Zutaten, traditionelle Rezepte und moderne, nachhaltige Produktionsverfahren. Jedes unserer Produkte trägt die Handschrift unserer Bäckermeister:innen.
            </p>

            <div className="pt-4">
              <Link
                to="/familienbaeckerei"
                className="button-secondary inline-flex items-center"
              >
                Mehr über uns erfahren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-brand-50 rounded-lg transform transition-transform hover:-translate-y-1 duration-300">
            <div className="text-4xl font-bold text-brand mb-2">1868</div>
            <div className="text-gray-700">Gründungsjahr</div>
          </div>
          <div className="p-6 bg-brand-50 rounded-lg transform transition-transform hover:-translate-y-1 duration-300">
            <div className="text-4xl font-bold text-brand mb-2">4.</div>
            <div className="text-gray-700">Generation</div>
          </div>
          <div className="p-6 bg-brand-50 rounded-lg transform transition-transform hover:-translate-y-1 duration-300">
            <div className="text-4xl font-bold text-brand mb-2">70+</div>
            <div className="text-gray-700">Fachgeschäfte</div>
          </div>
          <div className="p-6 bg-brand-50 rounded-lg transform transition-transform hover:-translate-y-1 duration-300">
            <div className="text-4xl font-bold text-brand mb-2">100+</div>
            <div className="text-gray-700">Produkte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
