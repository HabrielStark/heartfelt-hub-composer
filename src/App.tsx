import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Public Pages
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import HowToHelp from "./pages/HowToHelp";
import FinancialTransparency from "./pages/FinancialTransparency";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Kids from "./pages/KidsEvents";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import Donations from "./pages/admin/Donations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/how-to-help" element={<HowToHelp />} />
            <Route path="/financial-transparency" element={<FinancialTransparency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kids" element={<Kids />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/donations" element={<Donations />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
