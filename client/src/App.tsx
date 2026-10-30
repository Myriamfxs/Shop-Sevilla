/** Diseño: Showroom de selección. Marco ligero para una landing pública centrada en categorías y servicios de tienda. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieBanner from "./components/CookieBanner";
import Cookies from "./pages/Cookies";
import Privacy from "./pages/Privacy";
import LegalNotice from "./pages/LegalNotice";
import Home from "./pages/Home";
import Products from "./pages/Products";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/productos" component={Products} /><Route path="/cookies" component={Cookies} /><Route path="/privacy" component={Privacy} /><Route path="/aviso-legal" component={LegalNotice} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /><FloatingWhatsApp /><CookieBanner /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
