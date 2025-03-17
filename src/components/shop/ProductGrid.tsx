
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

const ProductGrid = ({ products, isLoading }: ProductGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill(0).map((_, index) => (
          <Card key={index} className="overflow-hidden animate-pulse">
            <div className="h-64 bg-gray-200"></div>
            <CardHeader className="pb-2">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">Keine Produkte gefunden</h3>
        <p className="text-gray-500">Versuchen Sie es mit anderen Filtereinstellungen oder Suchbegriffen.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden transition-shadow hover:shadow-lg">
          <div className="relative h-64 overflow-hidden bg-gray-100">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {product.seasonal && (
              <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-xs font-medium">
                Saisonal
              </div>
            )}
            {!product.availability.inStock && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <p className="text-white font-semibold px-4 py-2 bg-brand/80 rounded">
                  {product.availability.nextBakeTime 
                    ? `Nächste Backzeit: ${product.availability.nextBakeTime}` 
                    : 'Ausverkauft'}
                </p>
              </div>
            )}
          </div>
          
          <CardHeader className="pb-2">
            <h3 className="text-xl font-semibold">{product.name}</h3>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-600 line-clamp-2 mb-2">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {product.allergens.map((allergen, index) => (
                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {allergen}
                </span>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between items-center">
            <span className="text-lg font-medium text-brand">
              {product.price.toFixed(2).replace('.', ',')} €
            </span>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                asChild
              >
                <Link to={`/shop/${product.id}`}>
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="default" 
                className="bg-brand hover:bg-brand-700"
                disabled={!product.availability.inStock}
                onClick={() => console.log(`Added ${product.name} to cart`)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">In den Warenkorb</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
