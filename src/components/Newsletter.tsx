
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !email.includes('@')) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-brand bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-brand p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Newsletter abonnieren</h3>
                <p className="mb-6 opacity-90">
                  Erhalten Sie regelmäßig Informationen zu saisonalen Angeboten, Neuigkeiten und exklusiven Rabattaktionen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                    <span>Saisonale Spezialitäten</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                    <span>Exklusive Angebote</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-white rounded-full mr-2"></div>
                    <span>Events & Neuigkeiten</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-10">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Ihre E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.de"
                      className={`w-full px-4 py-3 rounded-md border ${
                        error ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-brand-300'
                      } focus:outline-none focus:ring-2 transition-all`}
                      disabled={isSubmitting || isSubmitted}
                    />
                    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                  </div>
                  
                  <div className="mb-4">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        required
                        className="rounded border-gray-300 text-brand focus:ring-brand h-5 w-5 mt-0.5 mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        Ich stimme zu, dass meine Daten zur Verarbeitung meiner Anfrage verwendet werden. 
                        Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                      </span>
                    </label>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-brand text-white py-3 rounded-md hover:bg-brand-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:opacity-75"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Wird verarbeitet...
                        </span>
                      ) : isSubmitted ? (
                        'Erfolgreich abonniert!'
                      ) : (
                        'Jetzt abonnieren'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
