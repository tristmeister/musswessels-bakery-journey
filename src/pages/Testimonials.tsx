
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/ui/page-header";
import { Star, Quote, ThumbsUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  productName?: string;
  avatar?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Schmidt",
    location: "Musterstadt",
    rating: 5,
    comment: "Die Brötchen sind jeden Morgen ein Highlight. Besonders die Vollkornbrötchen sind herrlich knusprig und haben einen wunderbaren Geschmack. Ich kaufe seit Jahren bei Musswessels und bin immer wieder begeistert von der gleichbleibend hohen Qualität.",
    date: "15.04.2023",
    featured: true,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 2,
    name: "Thomas Müller",
    location: "Nachbarstadt",
    rating: 5,
    comment: "Das Dinkelbrot ist unübertroffen! Knusprige Kruste, saftiger Kern und ein herrliches Aroma. Meine Familie und ich sind große Fans der Familienbäckerei Musswessels.",
    date: "22.03.2023",
    productName: "Dinkelbrot",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sophia Weber",
    location: "Großstadt",
    rating: 4,
    comment: "Die Konditorei-Produkte sind ein Traum! Besonders die Erdbeertorte zum Geburtstag meiner Tochter war nicht nur optisch ein Highlight, sondern auch geschmacklich ein Genuss.",
    date: "08.05.2023",
    productName: "Erdbeertorte",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Michael Koch",
    location: "Musterstadt",
    rating: 5,
    comment: "Als Stammkunde der Filiale am Marktplatz kann ich nur Positives berichten. Das freundliche Personal, die große Auswahl und die frischen Produkte machen jeden Besuch zu einem Vergnügen.",
    date: "02.04.2023",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 5,
    name: "Julia Becker",
    location: "Nachbarstadt",
    rating: 5,
    comment: "Die Fototorte für den 80. Geburtstag meiner Großmutter hat alle begeistert! Nicht nur optisch ein Hingucker, sondern auch geschmacklich hervorragend. Der Online-Designer war einfach zu bedienen und die Beratung im Geschäft sehr hilfreich.",
    date: "11.02.2023",
    productName: "Fototorte",
    featured: true,
    avatar: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 6,
    name: "Alexander Schulz",
    location: "Großstadt",
    rating: 4,
    comment: "Das Café am Stadtpark ist mein Lieblingsplatz für ein gemütliches Frühstück am Wochenende. Die Croissants sind butterig und luftig - einfach perfekt!",
    date: "30.03.2023",
    productName: "Butter-Croissants",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${
      testimonial.featured ? 'border-2 border-brand md:col-span-2' : ''
    }`}>
      <div className="flex items-start">
        {testimonial.avatar && (
          <div className="mr-4 flex-shrink-0">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
          </div>
        )}
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {testimonial.location} • {testimonial.date}
            {testimonial.productName && ` • ${testimonial.productName}`}
          </p>
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 h-6 w-6 text-brand-100 opacity-50" />
            <p className="text-gray-700 pt-2 pl-4">{testimonial.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [filter, setFilter] = useState('all');
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter testimonials based on selection
  useEffect(() => {
    if (filter === 'all') {
      setFilteredTestimonials(testimonials);
    } else if (filter === 'featured') {
      setFilteredTestimonials(testimonials.filter(t => t.featured));
    } else if (filter === 'highest') {
      setFilteredTestimonials([...testimonials].sort((a, b) => b.rating - a.rating));
    } else if (filter === 'newest') {
      setFilteredTestimonials([...testimonials].sort((a, b) => 
        new Date(b.date.split('.').reverse().join('-')).getTime() - 
        new Date(a.date.split('.').reverse().join('-')).getTime()
      ));
    }
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Kundenmeinungen" 
          subtitle="Erfahren Sie, was unsere Kunden über uns sagen und teilen Sie Ihre eigene Erfahrung mit uns"
          imageSrc="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2787&auto=format&fit=crop"
        />

        <section className="py-16">
          <div className="container">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-4xl font-corinthia text-brand">Was unsere Kunden sagen</h2>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={filter === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  Alle anzeigen
                </Button>
                <Button 
                  variant={filter === 'featured' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setFilter('featured')}
                >
                  Hervorgehoben
                </Button>
                <Button 
                  variant={filter === 'highest' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setFilter('highest')}
                >
                  Beste Bewertungen
                </Button>
                <Button 
                  variant={filter === 'newest' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setFilter('newest')}
                >
                  Neueste
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredTestimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-corinthia text-brand text-center mb-8">Ihre Meinung ist uns wichtig</h2>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-6 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Wie bewerten Sie uns?</h3>
                  <div className="flex justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-8 w-8 cursor-pointer ${
                          (rating >= star || hoverRating >= star) 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      />
                    ))}
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Ihre E-Mail"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Ihre Meinung</label>
                    <Textarea 
                      id="comment" 
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Teilen Sie Ihre Erfahrungen mit uns..."
                      rows={5}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="button" className="inline-flex items-center">
                      Bewertung senden
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-corinthia mb-6">Vielen Dank für Ihr Vertrauen</h2>
              <p className="mb-8">
                Als Familienbetrieb liegt uns die Zufriedenheit unserer Kunden besonders am Herzen. 
                Ihre Meinungen und Anregungen helfen uns, uns kontinuierlich zu verbessern und unsere Qualität zu sichern.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center">
                  <ThumbsUp className="h-10 w-10 mr-3" />
                  <div className="text-left">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm">Zufriedene Kunden</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-10 w-10 fill-white mr-3" />
                  <div className="text-left">
                    <div className="text-3xl font-bold">4.8/5</div>
                    <div className="text-sm">Durchschnittliche Bewertung</div>
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

export default Testimonials;
