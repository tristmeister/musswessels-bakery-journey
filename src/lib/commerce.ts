import { Product } from '@/types/product';

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Champagnerroggen",
    description: "Unser Champagnerroggen – ein Geschmackserlebnis mit regionalen Zutaten, nach traditioneller Rezeptur gebacken.",
    price: 3.95,
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop"
    ],
    category: "bread",
    allergens: ["gluten"],
    nutritionalInfo: {
      calories: 245,
      allergens: ["gluten"]
    },
    availability: {
      inStock: true
    },
    seasonal: false,
    bestBefore: "1 day"
  },
  {
    id: "2",
    name: "Dinkel Vollkornbrot",
    description: "Natürlich gesund und bekömmlich, aus 100% Dinkel aus regionaler Landwirtschaft.",
    price: 4.50,
    images: [
      "https://images.unsplash.com/photo-1565188093730-08b53fa550e4?q=80&w=2670&auto=format&fit=crop"
    ],
    category: "bread",
    allergens: ["gluten"],
    nutritionalInfo: {
      calories: 220,
      allergens: ["gluten"]
    },
    availability: {
      inStock: true
    },
    seasonal: false,
    bestBefore: "3 days"
  },
  {
    id: "3",
    name: "Butterkuchen",
    description: "Zarter Hefeteig mit reichlich Butter und karamellisiertem Zucker – ein süßer Klassiker.",
    price: 2.80,
    images: [
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2670&auto=format&fit=crop"
    ],
    category: "pastries",
    allergens: ["gluten", "milk", "eggs"],
    nutritionalInfo: {
      calories: 320,
      allergens: ["gluten", "milk", "eggs"]
    },
    availability: {
      inStock: true
    },
    seasonal: false,
    bestBefore: "2 days"
  },
  {
    id: "4",
    name: "Erdbeer-Sahnetorte",
    description: "Frische Erdbeeren auf lockerem Biskuit mit unserer hausgemachten Sahne. Saisonal begrenzt verfügbar.",
    price: 18.50,
    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2665&auto=format&fit=crop"
    ],
    category: "cakes",
    allergens: ["gluten", "milk", "eggs"],
    nutritionalInfo: {
      calories: 410,
      allergens: ["gluten", "milk", "eggs"]
    },
    availability: {
      inStock: true
    },
    seasonal: true,
    bestBefore: "1 day"
  },
  {
    id: "5",
    name: "Bärlauch-Baguette",
    description: "Knuspriges Baguette mit frischem Bärlauch aus dem Wald. Nur in der Bärlauch-Saison.",
    price: 3.50,
    images: [
      "https://images.unsplash.com/photo-1533782654613-826a072dd6f3?q=80&w=2669&auto=format&fit=crop"
    ],
    category: "bread",
    allergens: ["gluten"],
    nutritionalInfo: {
      calories: 230,
      allergens: ["gluten"]
    },
    availability: {
      inStock: false,
      nextBakeTime: "Morgen 7:00 Uhr"
    },
    seasonal: true,
    bestBefore: "1 day"
  },
  {
    id: "6",
    name: "Franzbrötchen",
    description: "Hamburger Spezialität: süßes Gebäck mit Zimt und Zucker. Perfekt zum Kaffee.",
    price: 1.95,
    images: [
      "https://images.unsplash.com/photo-1600617953089-20dcba91874a?q=80&w=2670&auto=format&fit=crop"
    ],
    category: "pastries",
    allergens: ["gluten", "milk"],
    nutritionalInfo: {
      calories: 300,
      allergens: ["gluten", "milk"]
    },
    availability: {
      inStock: true
    },
    seasonal: false,
    bestBefore: "1 day"
  },
  {
    id: "7",
    name: "Käsekuchen",
    description: "Cremiger Käsekuchen nach traditionellem Rezept. Ein zeitloser Klassiker.",
    price: 14.50,
    images: [
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=2574&auto=format&fit=crop"
    ],
    category: "cakes",
    allergens: ["gluten", "milk", "eggs"],
    nutritionalInfo: {
      calories: 380,
      allergens: ["gluten", "milk", "eggs"]
    },
    availability: {
      inStock: true
    },
    seasonal: false,
    bestBefore: "2 days"
  },
  {
    id: "8",
    name: "Brezel",
    description: "Handgeformte Brezeln mit grobem Salz. Perfekt als Snack zwischendurch.",
    price: 1.20,
    images: [
      "https://images.unsplash.com/photo-1600619754525-33d161fe3c77?q=80&w=2574&auto=format&fit=crop"
    ],
    category: "pastries",
    allergens: ["gluten"],
    nutritionalInfo: {
      calories: 180,
      allergens: ["gluten"]
    },
    availability: {
      inStock: true
    },
    seasonal: false,
    bestBefore: "1 day"
  },
  {
    id: "9",
    name: "Weihnachtsstollen",
    description: "Traditioneller Stollen mit Rosinen, Mandeln und Marzipan. Ein Muss zur Weihnachtszeit.",
    price: 12.95,
    images: [
      "https://images.unsplash.com/photo-1607477090662-45ab8802f0b2?q=80&w=2574&auto=format&fit=crop"
    ],
    category: "seasonal",
    allergens: ["gluten", "milk", "nuts"],
    nutritionalInfo: {
      calories: 450,
      allergens: ["gluten", "milk", "nuts"]
    },
    availability: {
      inStock: false,
      nextBakeTime: "Ab November"
    },
    seasonal: true,
    bestBefore: "3 weeks"
  }
];

// Simulate API fetch with 500ms delay
export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};

// Get a single product by ID
export const fetchProductById = async (productId: string) => {
  // This would be an API call in a real application
  // For now, we'll just return a mock product
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const products = await fetchProducts();
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return product;
};
