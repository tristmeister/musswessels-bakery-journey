
import React, { useEffect, useRef, useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  zip: string;
  lat: number;
  lng: number;
  phone: string;
  hours: string;
}

const stores: Store[] = [
  {
    id: 1,
    name: "Bäckerei Musswessels Zentrale",
    address: "Hauptstraße 12",
    city: "Musterstadt",
    zip: "12345",
    lat: 51.1657,
    lng: 10.4515,
    phone: "+49 1234 567890",
    hours: "Mo-Fr: 6:00-18:00, Sa: 6:00-14:00, So: 7:00-12:00"
  },
  {
    id: 2,
    name: "Filiale Marktplatz",
    address: "Marktplatz 3",
    city: "Musterstadt",
    zip: "12345",
    lat: 51.0504,
    lng: 10.6551,
    phone: "+49 1234 567891",
    hours: "Mo-Fr: 6:00-18:00, Sa: 6:00-14:00, So: geschlossen"
  },
  {
    id: 3,
    name: "Café am Stadtpark",
    address: "Parkstraße 45",
    city: "Musterstadt",
    zip: "12345",
    lat: 51.2277,
    lng: 10.2483,
    phone: "+49 1234 567892",
    hours: "Täglich: 8:00-20:00"
  },
  {
    id: 4,
    name: "Filiale Bahnhofstraße",
    address: "Bahnhofstraße 22",
    city: "Nachbarstadt",
    zip: "12346",
    lat: 50.9375,
    lng: 10.7368,
    phone: "+49 1234 567893",
    hours: "Mo-Fr: 5:30-19:00, Sa: 6:00-16:00, So: 7:00-12:00"
  },
  {
    id: 5,
    name: "Filiale Einkaufszentrum",
    address: "Handelsweg 11",
    city: "Großstadt",
    zip: "23456",
    lat: 51.3398,
    lng: 10.0317,
    phone: "+49 1234 567894",
    hours: "Mo-Sa: 7:00-20:00, So: geschlossen"
  }
];

const StoreMap: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [filteredStores, setFilteredStores] = useState<Store[]>(stores);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredStores(stores);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredStores(
        stores.filter(
          (store) =>
            store.name.toLowerCase().includes(query) ||
            store.address.toLowerCase().includes(query) ||
            store.city.toLowerCase().includes(query) ||
            store.zip.includes(query)
        )
      );
    }
  }, [searchQuery]);

  const handleStoreSelect = (store: Store) => {
    setSelectedStore(store);
    
    // In a real implementation, this would center the map on the selected store
    console.log(`Selected store: ${store.name} at coordinates: ${store.lat}, ${store.lng}`);
  };

  return (
    <div className="grid md:grid-cols-5 gap-8 h-[600px]">
      {/* Store list */}
      <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Filiale oder PLZ suchen..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto">
          {filteredStores.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              Keine Filialen gefunden.
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredStores.map((store) => (
                <li 
                  key={store.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    selectedStore?.id === store.id ? 'bg-brand-50 border-l-4 border-brand' : ''
                  }`}
                  onClick={() => handleStoreSelect(store)}
                >
                  <h3 className="font-medium text-gray-900">{store.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {store.address}, {store.zip} {store.city}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{store.phone}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Map and store details */}
      <div className="md:col-span-3 flex flex-col gap-4">
        {/* Map (Mockup) */}
        <div className="bg-gray-200 rounded-lg overflow-hidden flex-grow relative" ref={mapRef}>
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto text-brand mb-2" />
              <p>Interaktive Filialsuche</p>
              <p className="text-sm text-gray-400 mt-1">Wählen Sie eine Filiale, um Details zu sehen</p>
            </div>
          </div>

          {/* Map Markers (for visualization) */}
          {stores.map((store) => (
            <div 
              key={store.id}
              className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                selectedStore?.id === store.id ? 'scale-125' : 'scale-100'
              }`}
              style={{ 
                left: `${(store.lng - 9.5) * 100 + 50}%`,
                top: `${(52 - store.lat) * 200}%`
              }}
              onClick={() => handleStoreSelect(store)}
            >
              <div className={`
                w-full h-full rounded-full flex items-center justify-center bg-white border-2
                ${selectedStore?.id === store.id ? 'border-brand text-brand' : 'border-gray-400 text-gray-600'}
              `}>
                <span className="text-xs font-bold">{store.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected store details */}
        {selectedStore && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-gray-900 mb-2">{selectedStore.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Adresse</h4>
                <p className="text-gray-600">
                  {selectedStore.address}<br />
                  {selectedStore.zip} {selectedStore.city}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Kontakt</h4>
                <p className="text-gray-600">{selectedStore.phone}</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Öffnungszeiten</h4>
                <p className="text-gray-600">{selectedStore.hours}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreMap;
