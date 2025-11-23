import { useEffect, memo, useMemo, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import CookieConsent from "./components/layout/CookieConsent";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import useScrollToTop from "./hooks/useScrollToTop";
import { useLenis } from "./hooks/useLenis";

// Lazy load de páginas para code splitting
const Home = lazy(() => import("@/pages/site/home/pages/Home"));
const AboutUs = lazy(() => import("@/pages/site/about/pages/AboutUs"));
const Destinations = lazy(() => import("@/pages/site/destinations/pages/Destinations"));
const DestinationDetail = lazy(() => import("@/pages/site/destinations/pages/DestinationDetail"));
const Packages = lazy(() => import("@/pages/site/packages/pages/Packages"));
const Contact = lazy(() => import("@/pages/site/contact/pages/Contact"));
const LegalNotice = lazy(() => import("./pages/legal/LegalNotice"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/legal/CookiesPolicy"));
const NotFound = lazy(() => import("@/pages/site/not-found/pages/NotFound"));

// Componentes memoizados con comparación personalizada para evitar re-renders
const MemoizedNavigation = memo(Navigation, () => true);
const MemoizedFooter = memo(Footer, () => true);
const MemoizedCookieConsent = memo(CookieConsent, () => true);

const queryClient = new QueryClient();

// Componente de loading para Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

// Componente para el contenido que cambia (usa el hook de scroll)
const PageContent = () => {
  useScrollToTop();
  return (
    <main id="main-content">
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

// Layout raíz optimizado
// Nota: Este componente se re-renderiza cuando cambia la ruta (necesario para Outlet)
// pero Navigation y Footer están memoizados y no se re-renderizan
const RootLayout = () => {
  // Inicializar Lenis smooth scroll solo en escritorio
  useLenis();

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
      { path: "destinos/:slug", element: <DestinationDetail /> },
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

