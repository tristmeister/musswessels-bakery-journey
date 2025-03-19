
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '@/lib/commerce';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Heart, MinusCircle, PlusCircle, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId || ''),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Skeleton className="h-[500px] w-full rounded-md" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-3/4 rounded-md" />
                <Skeleton className="h-6 w-1/4 rounded-md" />
                <Skeleton className="h-24 w-full rounded-md" />
                <div className="space-y-2">
                  <Skeleton className="h-10 w-full rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4 text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Produkt nicht gefunden</h2>
            <p className="text-gray-600 mb-8">
              Das gesuchte Produkt existiert nicht oder es gab einen Fehler beim Laden der Daten.
            </p>
            <Button asChild>
              <a href="/shop">Zurück zum Shop</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleAddToWishlist = () => {
    toast.success("Produkt wurde zur Wunschliste hinzugefügt!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border bg-gray-50">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(0, 4).map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-md border bg-gray-50">
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(12 Bewertungen)</span>
                </div>
              </div>

              <div className="text-2xl font-bold text-brand">
                {product.price.toFixed(2).replace('.', ',')} €
              </div>

              <p className="text-gray-700">{product.description}</p>

              {/* Availability */}
              <div>
                {product.availability.inStock ? (
                  <Badge variant="default" className="bg-green-600">Auf Lager</Badge>
                ) : (
                  <Badge variant="destructive">Ausverkauft</Badge>
                )}
                {!product.availability.inStock && product.availability.nextBakeTime && (
                  <p className="mt-1 text-sm text-gray-500">
                    Nächste Backzeit: {product.availability.nextBakeTime}
                  </p>
                )}
              </div>

              {/* Allergens */}
              {product.allergens.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Allergene:</h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.allergens.map((allergen, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-100">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              {product.availability.inStock && (
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-brand hover:bg-brand-700"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      In den Warenkorb
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={handleAddToWishlist}
                    >
                      <Heart className="mr-2 h-4 w-4" />
                      Merken
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details">
              <TabsList className="mb-8 w-full justify-start">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="nutritional">Nährwertangaben</TabsTrigger>
                <TabsTrigger value="reviews">Kundenbewertungen</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4">
                <h3 className="text-lg font-medium">Produktdetails</h3>
                <p className="text-gray-700">
                  {product.description}
                </p>

                {product.bestBefore && (
                  <div className="mt-4">
                    <h4 className="font-medium">Haltbarkeit</h4>
                    <p className="text-gray-700">
                      Mindestens haltbar bis: {product.bestBefore}
                    </p>
                  </div>
                )}
                
                {product.customization && (
                  <div className="mt-4">
                    <h4 className="font-medium">Anpassungsoptionen</h4>
                    <div className="mt-2 space-y-2">
                      {product.customization.options.size.length > 0 && (
                        <div>
                          <p className="text-sm font-medium">Größen:</p>
                          <ul className="list-disc list-inside text-gray-700 ml-2">
                            {product.customization.options.size.map((size, index) => (
                              <li key={index}>{size}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {product.customization.options.extras.length > 0 && (
                        <div>
                          <p className="text-sm font-medium">Extras:</p>
                          <ul className="list-disc list-inside text-gray-700 ml-2">
                            {product.customization.options.extras.map((extra, index) => (
                              <li key={index}>{extra}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="nutritional">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Nährwertangaben</h3>
                  <p className="text-gray-700">
                    Kalorien: {product.nutritionalInfo.calories} kcal pro 100g
                  </p>
                  
                  <div>
                    <h4 className="font-medium">Allergene:</h4>
                    <ul className="list-disc list-inside text-gray-700 ml-2">
                      {product.nutritionalInfo.allergens.map((allergen, index) => (
                        <li key={index}>{allergen}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Kundenbewertungen</h3>
                  <p className="text-gray-700">
                    Noch keine Bewertungen für dieses Produkt.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
