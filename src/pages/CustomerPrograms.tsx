
import { useEffect, useState } from "react";
import { Check, Heart, Gift, Star, Award, Compass, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomerPrograms = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("vorteilskarte");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Unsere Kundenprogramme" 
        subtitle="Profitieren Sie von unseren exklusiven Vorteilen für Stammkunden"
        imageSrc="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
      />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-ephesis text-brand mb-4">Genießen Sie besondere Privilegien</h2>
            <p className="text-gray-600">Als Familienbäckerei legen wir großen Wert auf die Zufriedenheit unserer Kunden. Entdecken Sie unsere Treueprogramme und sichern Sie sich exklusive Vorteile.</p>
          </div>

          <Tabs defaultValue="vorteilskarte" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full max-w-3xl h-auto">
                <TabsTrigger value="vorteilskarte" className="py-3">
                  <Star className="mr-2 h-4 w-4" />
                  Vorteilskarte
                </TabsTrigger>
                <TabsTrigger value="treuepunkte" className="py-3">
                  <Award className="mr-2 h-4 w-4" />
                  Treuepunkte
                </TabsTrigger>
                <TabsTrigger value="gutscheine" className="py-3">
                  <Gift className="mr-2 h-4 w-4" />
                  Gutscheine
                </TabsTrigger>
                <TabsTrigger value="newsletter" className="py-3">
                  <Heart className="mr-2 h-4 w-4" />
                  Newsletter
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="vorteilskarte" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-ephesis text-2xl text-brand">Die Musswessels Vorteilskarte</CardTitle>
                    <CardDescription>Genießen Sie attraktive Rabatte und exklusive Vorteile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                      alt="Vorteilskarte" 
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>5% Rabatt auf alle Einkäufe</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Kostenloser Kaffee zu jedem Frühstück</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Geburtstagsüberraschung jedes Jahr</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Jetzt beantragen</Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-ephesis text-2xl text-brand">So funktioniert's</CardTitle>
                    <CardDescription>Einfach und unkompliziert</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-2 mr-3">
                        <Compass className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <h4 className="font-medium">Vorteilskarte beantragen</h4>
                        <p className="text-sm text-gray-500">Füllen Sie das Formular in einer unserer Filialen aus oder beantragen Sie die Karte online.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-2 mr-3">
                        <Clock className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <h4 className="font-medium">Karte abholen</h4>
                        <p className="text-sm text-gray-500">Nach 3-5 Werktagen können Sie Ihre persönliche Vorteilskarte in Ihrer Filiale abholen.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-2 mr-3">
                        <Star className="h-5 w-5 text-brand" />
                      </div>
                      <div>
                        <h4 className="font-medium">Vorteile genießen</h4>
                        <p className="text-sm text-gray-500">Zeigen Sie Ihre Karte bei jedem Einkauf vor und sammeln Sie Punkte.</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Mehr erfahren</Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-ephesis text-2xl text-brand">Häufige Fragen</CardTitle>
                    <CardDescription>Alle Antworten auf einen Blick</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Wie lange ist die Karte gültig?</h4>
                      <p className="text-sm text-gray-500">Die Karte ist 2 Jahre gültig und kann kostenlos verlängert werden.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Gibt es eine Jahresgebühr?</h4>
                      <p className="text-sm text-gray-500">Nein, unsere Vorteilskarte ist komplett kostenfrei.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Was passiert bei Verlust?</h4>
                      <p className="text-sm text-gray-500">Bei Verlust können Sie eine Ersatzkarte beantragen, Ihre gesammelten Punkte bleiben erhalten.</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="w-full">Weitere Fragen und Antworten</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="treuepunkte" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-ephesis text-brand mb-4">So sammeln Sie Treuepunkte</h3>
                  <p className="text-gray-600 mb-4">Mit jeder Einkauf sammeln Sie wertvolle Treuepunkte. Je 1 € Einkaufswert erhalten Sie 1 Treuepunkt.</p>
                  
                  <div className="relative mt-8 mb-6 py-4">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-brand rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>0 Punkte</span>
                      <span>50 Punkte</span>
                      <span>100 Punkte</span>
                    </div>
                    <div className="absolute -top-4 left-[60%] transform -translate-x-1/2">
                      <div className="bg-brand text-white text-xs px-2 py-1 rounded">60 Punkte</div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Punkte einlösen</Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-ephesis text-brand mb-4">Ihre Prämien</h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center pb-3 border-b">
                      <div className="flex items-center">
                        <div className="bg-brand-50 p-2 rounded mr-3">
                          <img src="https://images.unsplash.com/photo-1567002260451-50e095d75073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Kaffee" className="w-12 h-12 object-cover rounded" />
                        </div>
                        <div>
                          <h4 className="font-medium">Kaffee & Croissant</h4>
                          <p className="text-sm text-gray-500">Ein perfektes Frühstück</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-brand font-bold">25 Punkte</span>
                        <Button size="sm" variant="link" className="text-xs">Einlösen</Button>
                      </div>
                    </li>
                    <li className="flex justify-between items-center pb-3 border-b">
                      <div className="flex items-center">
                        <div className="bg-brand-50 p-2 rounded mr-3">
                          <img src="https://images.unsplash.com/photo-1551404973-761c83da473f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="Torte" className="w-12 h-12 object-cover rounded" />
                        </div>
                        <div>
                          <h4 className="font-medium">Geburtstagstorte</h4>
                          <p className="text-sm text-gray-500">10-12 Personen</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-brand font-bold">75 Punkte</span>
                        <Button size="sm" variant="link" className="text-xs">Einlösen</Button>
                      </div>
                    </li>
                    <li className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-brand-50 p-2 rounded mr-3">
                          <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="Brunch" className="w-12 h-12 object-cover rounded" />
                        </div>
                        <div>
                          <h4 className="font-medium">Brunch für 2</h4>
                          <p className="text-sm text-gray-500">Inkl. Getränke</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-brand font-bold">100 Punkte</span>
                        <Button size="sm" variant="link" className="text-xs">Einlösen</Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gutscheine" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br from-brand-50 to-white">
                  <CardHeader>
                    <CardTitle className="font-ephesis text-2xl text-brand">Geschenkgutschein</CardTitle>
                    <CardDescription>Das perfekte Geschenk für jeden Anlass</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white rounded-md shadow-sm p-4 mb-4 border border-brand-100">
                      <div className="flex justify-between items-center">
                        <span className="font-ephesis text-3xl text-brand">25 €</span>
                        <img src="/lovable-uploads/8e70f726-e9d9-4b10-8e08-b54c2f09176d.png" alt="Musswessels Logo" className="h-10 w-10 object-contain" />
                      </div>
                      <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                        <p className="text-xs text-gray-500 text-center">Einlösbar in allen Musswessels Filialen</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Verschenken Sie Freude mit unseren Gutscheinen. Frei wählbarer Betrag und individuell gestaltbar.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Gutschein kaufen</Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br from-brand-50 to-white">
                  <CardHeader>
                    <CardTitle className="font-ephesis text-2xl text-brand">Erlebnis-Gutschein</CardTitle>
                    <CardDescription>Für ein besonderes Erlebnis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white rounded-md shadow-sm p-4 mb-4 border border-brand-100">
                      <div className="flex justify-between items-center">
                        <span className="font-ephesis text-3xl text-brand">Brunch</span>
                        <img src="/lovable-uploads/8e70f726-e9d9-4b10-8e08-b54c2f09176d.png" alt="Musswessels Logo" className="h-10 w-10 object-contain" />
                      </div>
                      <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                        <p className="text-xs text-gray-500 text-center">Für 2 Personen inkl. Getränke</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Verschenken Sie ein kulinarisches Erlebnis in unseren ausgewählten Filialen mit Café-Bereich.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Gutschein kaufen</Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-gradient-to-br from-brand-50 to-white">
                  <CardHeader>
                    <CardTitle className="font-ephesis text-2xl text-brand">Digital-Gutschein</CardTitle>
                    <CardDescription>Sofort ausdrucken oder verschicken</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white rounded-md shadow-sm p-4 mb-4 border border-brand-100">
                      <div className="flex justify-between items-center">
                        <span className="font-ephesis text-3xl text-brand">50 €</span>
                        <img src="/lovable-uploads/8e70f726-e9d9-4b10-8e08-b54c2f09176d.png" alt="Musswessels Logo" className="h-10 w-10 object-contain" />
                      </div>
                      <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                        <p className="text-xs text-gray-500 text-center">Mit persönlicher Nachricht</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">Personalisieren Sie Ihren Gutschein mit einer Nachricht und senden Sie ihn direkt per E-Mail.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Gutschein kaufen</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="newsletter" className="mt-6">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6">
                      <h3 className="text-2xl font-ephesis text-brand mb-4">Newsletter Anmeldung</h3>
                      <p className="text-gray-600 mb-6">Melden Sie sich für unseren Newsletter an und erhalten Sie regelmäßig Informationen über:</p>
                      
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Saisonale Spezialitäten und Neuheiten</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Exklusive Angebote für Newsletter-Abonnenten</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Einladungen zu Verkostungen und Events</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Rezepte und Tipps rund ums Backen</span>
                        </li>
                      </ul>
                      
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input 
                              type="text" 
                              id="name" 
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Ihr Name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                            <input 
                              type="email" 
                              id="email" 
                              className="w-full p-2 border border-gray-300 rounded-md"
                              placeholder="Ihre E-Mail-Adresse"
                            />
                          </div>
                        </div>
                        <div className="flex items-start">
                          <input type="checkbox" id="privacy" className="mt-1 mr-2" />
                          <label htmlFor="privacy" className="text-xs text-gray-500">
                            Ich habe die Datenschutzerklärung gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage elektronisch erhoben und gespeichert werden.
                          </label>
                        </div>
                        <Button className="w-full">Anmelden</Button>
                      </form>
                    </div>
                    
                    <div className="bg-brand-50 p-6 flex items-center">
                      <div>
                        <img 
                          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Newsletter" 
                          className="rounded-md shadow-md mb-6"
                        />
                        <div className="bg-white p-4 rounded-md shadow">
                          <h4 className="font-medium text-brand mb-2">Aktuelle Ausgabe</h4>
                          <p className="text-sm text-gray-600 mb-3">Unser aktueller Newsletter enthält Rezepte für die Sommerzeit und stellt unsere neuen Eissorten vor.</p>
                          <Button variant="outline" size="sm" className="w-full">Newsletter ansehen</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-brand-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-ephesis text-brand mb-4">Haben Sie Fragen?</h2>
              <p className="text-gray-600 mb-8">Unser Kundenservice steht Ihnen gerne bei allen Fragen rund um unsere Kundenprogramme zur Verfügung.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="default" size="lg">
                  Kontakt aufnehmen
                </Button>
                <Button variant="outline" size="lg">
                  FAQ ansehen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerPrograms;
