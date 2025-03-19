import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search, Cake, Wheat } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <Card className="border-none shadow-xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            {/* 404 Illustration */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-brand/5 rounded-full blur-3xl"></div>
              <div className="relative flex items-center justify-center">
                <div className="text-9xl font-bold text-brand/20">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-brand/10 rounded-full flex items-center justify-center">
                    <Cake className="w-16 h-16 text-brand" />
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ups! Diese Seite scheint verschwunden zu sein
              </h1>
              <p className="text-gray-600 text-lg">
                Entschuldigung, die Seite, die Sie suchen, existiert leider nicht mehr oder wurde verschoben.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button
                variant="outline"
                className="h-auto py-4 group"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur vorherigen Seite
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 group"
                onClick={() => navigate('/')}
              >
                <Home className="w-5 h-5 mr-2" />
                Zur Startseite
              </Button>
            </div>

            {/* Popular Links */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Beliebte Seiten
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="ghost"
                  className="justify-start h-auto py-3 group"
                  onClick={() => navigate('/shop')}
                >
                  <Wheat className="w-5 h-5 mr-2 text-brand" />
                  Online Shop
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start h-auto py-3 group"
                  onClick={() => navigate('/fototorten-designer')}
                >
                  <Cake className="w-5 h-5 mr-2 text-brand" />
                  Fototorten-Designer
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start h-auto py-3 group"
                  onClick={() => navigate('/fachgeschaefte')}
                >
                  <Search className="w-5 h-5 mr-2 text-brand" />
                  Fachgeschäfte
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start h-auto py-3 group"
                  onClick={() => navigate('/karriere')}
                >
                  <Cake className="w-5 h-5 mr-2 text-brand" />
                  Karriere
                </Button>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Benötigen Sie weitere Hilfe?
              </p>
              <Button
                variant="outline"
                className="group"
                onClick={() => window.location.href = 'mailto:info@muesswessels.de'}
              >
                Kontaktieren Sie uns
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
