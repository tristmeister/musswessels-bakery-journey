
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Stores from "./pages/Stores";
import Career from "./pages/Career";
import AboutUs from "./pages/AboutUs";
import CakeDesigner from "./pages/CakeDesigner";
import Shop from "./pages/Shop";
import LoyaltyCard from "./pages/LoyaltyCard";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fachgeschaefte" element={<Stores />} />
          <Route path="/jobs" element={<Career />} />
          <Route path="/familienbaeckerei" element={<AboutUs />} />
          <Route path="/fototorten-designer" element={<CakeDesigner />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/vorteilskarte" element={<LoyaltyCard />} />
          <Route path="/kundenmeinung" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
