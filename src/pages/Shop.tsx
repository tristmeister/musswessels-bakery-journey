
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FilterX, SlidersHorizontal, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/shop/ProductGrid";
import { fetchProducts } from "../lib/commerce";
import CategoryFilter from "../components/shop/filters/CategoryFilter";
import PriceFilter from "../components/shop/filters/PriceFilter";
import AllergenFilter from "../components/shop/filters/AllergenFilter";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 20,
    allergens: [] as string[],
  });
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch products
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    // Search query filter
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Category filter
    if (activeFilters.category && product.category !== activeFilters.category) {
      return false;
    }

    // Price filter
    if (
      product.price < activeFilters.minPrice ||
      product.price > activeFilters.maxPrice
    ) {
      return false;
    }

    // Allergen filter
    if (activeFilters.allergens.length > 0) {
      const productAllergens = product.allergens || [];
      if (
        activeFilters.allergens.some((allergen) =>
          productAllergens.includes(allergen)
        )
      ) {
        return false;
      }
    }

    return true;
  });

  const handleClearFilters = () => {
    setActiveFilters({
      category: "",
      minPrice: 0,
      maxPrice: 20,
      allergens: [],
    });
    setSearchQuery("");
  };

  const categoryOptions = [
    { value: "", label: "Alle Produkte" },
    { value: "bread", label: "Brot" },
    { value: "pastries", label: "Gebäck" },
    { value: "cakes", label: "Kuchen & Torten" },
    { value: "seasonal", label: "Saisonale Produkte" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Online-Shop</h1>
          
          {/* Search and filter section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Suchen Sie nach Produkten..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Drawer open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4" />
                      <span className="hidden md:inline">Filter</span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="p-4">
                    <div className="max-w-md mx-auto">
                      <h3 className="text-lg font-medium mb-4">Produktfilter</h3>
                      
                      <div className="space-y-6">
                        <CategoryFilter 
                          options={categoryOptions}
                          value={activeFilters.category}
                          onChange={(value) => setActiveFilters({...activeFilters, category: value})}
                        />
                        
                        <PriceFilter 
                          min={0} 
                          max={20} 
                          value={[activeFilters.minPrice, activeFilters.maxPrice]}
                          onChange={(value) => setActiveFilters({
                            ...activeFilters, 
                            minPrice: value[0], 
                            maxPrice: value[1]
                          })}
                        />
                        
                        <AllergenFilter 
                          value={activeFilters.allergens}
                          onChange={(value) => setActiveFilters({...activeFilters, allergens: value})}
                        />
                      </div>
                      
                      <div className="flex justify-between mt-6">
                        <Button 
                          variant="outline" 
                          onClick={handleClearFilters}
                          className="flex items-center gap-2"
                        >
                          <FilterX className="h-4 w-4" />
                          Filter zurücksetzen
                        </Button>
                        <Button onClick={() => setIsFilterDrawerOpen(false)}>
                          Anwenden
                        </Button>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
                
                {(activeFilters.category || activeFilters.minPrice > 0 || 
                  activeFilters.maxPrice < 20 || activeFilters.allergens.length > 0) && (
                  <Button 
                    variant="ghost" 
                    onClick={handleClearFilters}
                    className="flex items-center gap-2"
                  >
                    <FilterX className="h-4 w-4" />
                    <span className="hidden md:inline">Zurücksetzen</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
          
          {/* Product categories tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto flex justify-between mb-6 bg-background border overflow-auto">
              <TabsTrigger value="all" className="flex-1">Alle</TabsTrigger>
              <TabsTrigger value="bread" className="flex-1">Brote</TabsTrigger>
              <TabsTrigger value="pastries" className="flex-1">Gebäck</TabsTrigger>
              <TabsTrigger value="cakes" className="flex-1">Torten</TabsTrigger>
              <TabsTrigger value="seasonal" className="flex-1">Saisonal</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <ProductGrid products={filteredProducts} isLoading={isLoading} />
            </TabsContent>
            
            <TabsContent value="bread">
              <ProductGrid 
                products={products.filter(p => p.category === 'bread')} 
                isLoading={isLoading} 
              />
            </TabsContent>
            
            <TabsContent value="pastries">
              <ProductGrid 
                products={products.filter(p => p.category === 'pastries')} 
                isLoading={isLoading} 
              />
            </TabsContent>
            
            <TabsContent value="cakes">
              <ProductGrid 
                products={products.filter(p => p.category === 'cakes')} 
                isLoading={isLoading} 
              />
            </TabsContent>
            
            <TabsContent value="seasonal">
              <ProductGrid 
                products={products.filter(p => p.category === 'seasonal')} 
                isLoading={isLoading} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
