import { useEffect, memo, useMemo } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "@/pages/site/home/pages/Home";
import AboutUs from "@/pages/site/about/pages/AboutUs";
import Destinations from "@/pages/site/destinations/pages/Destinations";
import Packages from "@/pages/site/packages/pages/Packages";
import Contact from "@/pages/site/contact/pages/Contact";
import LegalNotice from "./pages/legal/LegalNotice";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import NotFound from "@/pages/site/not-found/pages/NotFound";
import CookieConsent from "./components/layout/CookieConsent";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import useScrollToTop from "./hooks/useScrollToTop";

// Componentes memoizados con comparación personalizada para evitar re-renders
const MemoizedNavigation = memo(Navigation, () => true);
const MemoizedFooter = memo(Footer, () => true);
const MemoizedCookieConsent = memo(CookieConsent, () => true);

const queryClient = new QueryClient();

// Componente para el contenido que cambia (usa el hook de scroll)
const PageContent = () => {
  useScrollToTop();
  return (
    <main id="main-content">
      <Outlet />
    </main>
  );
};

// Layout raíz optimizado
// Nota: Este componente se re-renderiza cuando cambia la ruta (necesario para Outlet)
// pero Navigation y Footer están memoizados y no se re-renderizan
const RootLayout = () => {
  // Asegurar que el navegador no restaure scroll automáticamente entre páginas
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Usar useMemo para mantener referencias estables de Navigation y Footer
  // Esto evita que se re-rendericen incluso si RootLayout se re-renderiza
  const navigation = useMemo(() => <MemoizedNavigation />, []);
  const footer = useMemo(() => <MemoizedFooter />, []);
  const cookieConsent = useMemo(() => <MemoizedCookieConsent />, []);

  return (
    <>
      {cookieConsent}
      {navigation}
      <PageContent />
      {footer}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "nosotros", element: <AboutUs /> },
      { path: "destinos", element: <Destinations /> },
      { path: "paquetes", element: <Packages /> },
      { path: "contacto", element: <Contact /> },
      { path: "aviso-legal", element: <LegalNotice /> },
      { path: "politica-privacidad", element: <PrivacyPolicy /> },
      { path: "politica-cookies", element: <CookiesPolicy /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

