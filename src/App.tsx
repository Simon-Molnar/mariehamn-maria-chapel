import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gudstjanster from "./pages/Gudstjanster";
import GudstjanstTyper from "./pages/GudstjanstTyper";
import Verksamhet from "./pages/Verksamhet";
import Sakrament from "./pages/Sakrament";
import Andligt from "./pages/Andligt";
import Butik from "./pages/Butik";
import ProduktDetalj from "./pages/ProduktDetalj";
import OmOss from "./pages/OmOss";
import Kontakt from "./pages/Kontakt";
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
          <Route path="/gudstjanster" element={<Gudstjanster />} />
          <Route path="/gudstjanst-typer" element={<GudstjanstTyper />} />
          <Route path="/verksamhet" element={<Verksamhet />} />
          <Route path="/sakrament" element={<Sakrament />} />
          <Route path="/andligt" element={<Andligt />} />
          <Route path="/butik" element={<Butik />} />
          <Route path="/butik/produkt/:handle" element={<ProduktDetalj />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/kontakt" element={<Kontakt />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
