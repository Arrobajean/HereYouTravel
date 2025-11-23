import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileExperienciasOpen, setIsMobileExperienciasOpen] =
    useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  // Páginas con hero (no muestran background al inicio)
  const pagesWithHero = ["/"];
  const hasHero = pagesWithHero.includes(location.pathname);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    // Anticipation: Primero indicamos que algo va a pasar
    setIsHovering(true);
    // Luego abrimos el dropdown después de un pequeño delay
    setTimeout(() => {
      setIsExperienciasOpen(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    closeTimeoutRef.current = setTimeout(() => {
      setIsExperienciasOpen(false);
    }, 150);
  };

  // Detectar scroll y mostrar/ocultar navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si estamos en la parte superior, siempre mostrar sin background
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Si scrolleamos hacia abajo, ocultar
        // Si scrolleamos hacia arriba, mostrar
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determinar si debe mostrar el background
  // - En páginas sin hero: siempre mostrar
  // - En páginas con hero: solo después de hacer scroll
  const shouldShowBackground = !hasHero || (lastScrollY > 10 && isVisible);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileExperienciasOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 overflow-x-hidden w-full transition-all duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
          shouldShowBackground && "backdrop-blur-sm bg-black/20"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full">
          <div className="flex items-center justify-between pt-6 pb-4 w-full">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start flex-1 lg:flex-initial">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src="/logo/logo-heryoutravel.webp"
                  alt="Here You Travel"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                  width={200}
                  height={56}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </Link>
            </div>

            {/* Menú de navegación centrado */}
            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-10">
              {/* Dropdown EXPERIENCIAS */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownMenu.Root
                  open={isExperienciasOpen}
                  onOpenChange={setIsExperienciasOpen}
                >
                  <DropdownMenu.Trigger asChild>
                    <button
                      className="text-white hover:text-red-600 font-bold text-base uppercase flex items-center gap-1 whitespace-nowrap transition-all hover:scale-110 font-montserrat"
                      style={{
                        transition:
                          "color var(--timing-fast) var(--ease-out), transform var(--timing-fast) var(--ease-out)",
                      }}
                    >
                      EXPERIENCIAS
                      <ChevronDown
                        className="w-4 h-4 transition-transform"
                        style={{
                          transform:
                            isHovering || isExperienciasOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transitionDuration: "var(--timing-fast)",
                          transitionTimingFunction: "var(--ease-out)",
                        }}
                      />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className={cn(
                        "min-w-[220px] max-w-[220px] bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-2 z-50",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                      )}
                      style={{
                        transitionDuration: "var(--timing-fast)",
                        transitionTimingFunction: "var(--ease-out)",
                        maxWidth: "calc(100vw - 2rem)",
                      }}
                      sideOffset={8}
                      align="start"
                      alignOffset={0}
                      avoidCollisions={true}
                      collisionPadding={16}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <DropdownMenu.Item asChild>
                        <Link
                          to="/experiencias/viajes-en-grupo"
                          className={`block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all cursor-pointer ${
                            isExperienciasOpen ? "animate-fade-in-left" : ""
                          }`}
                          style={{
                            transitionDuration: "var(--timing-fast)",
                            transitionTimingFunction: "var(--ease-out)",
                            animationDelay: "0ms",
                          }}
                        >
                          Viajes en grupo
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          to="/experiencias/viajes-de-lujo"
                          className={`block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all cursor-pointer ${
                            isExperienciasOpen ? "animate-fade-in-left" : ""
                          }`}
                          style={{
                            transitionDuration: "var(--timing-fast)",
                            transitionTimingFunction: "var(--ease-out)",
                            animationDelay: "50ms",
                          }}
                        >
                          Viajes de lujo
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          to="/experiencias/reunificacion-familiar"
                          className={`block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all cursor-pointer ${
                            isExperienciasOpen ? "animate-fade-in-left" : ""
                          }`}
                          style={{
                            transitionDuration: "var(--timing-fast)",
                            transitionTimingFunction: "var(--ease-out)",
                            animationDelay: "100ms",
                          }}
                        >
                          Reunificación familiar
                        </Link>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        <Link
                          to="/experiencias/bodas-punta-cana"
                          className={`block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all cursor-pointer ${
                            isExperienciasOpen ? "animate-fade-in-left" : ""
                          }`}
                          style={{
                            transitionDuration: "var(--timing-fast)",
                            transitionTimingFunction: "var(--ease-out)",
                            animationDelay: "150ms",
                          }}
                        >
                          Bodas en Punta Cana
                        </Link>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>

              <Link
                to="/destinos"
                className="text-white hover:text-red-600 font-bold text-base uppercase flex items-center gap-1 whitespace-nowrap transition-all hover:scale-110 font-montserrat"
              >
                DESTINOS
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-red-600 font-bold text-base uppercase flex items-center gap-1 whitespace-nowrap transition-all hover:scale-110 font-montserrat"
              >
                BLOG DE VIAJES
              </Link>
              <Link
                to="/nosotros"
                className="text-white hover:text-red-600 font-bold text-base uppercase flex items-center gap-1 whitespace-nowrap transition-all hover:scale-110 font-montserrat"
              >
                NOSOTROS
              </Link>
              <Link
                to="/contacto"
                className="text-white hover:text-red-600 font-bold text-base uppercase flex items-center gap-1 whitespace-nowrap transition-all hover:scale-110 font-montserrat"
              >
                CONTACTO
              </Link>
            </div>

            {/* CTA a la derecha - Teléfono y banderas */}
            <div className="flex items-center justify-end gap-3 lg:gap-4">
              <a
                href="tel:+17863870000"
                className="hidden md:flex flex-col items-end text-white hover:text-white/80 transition-colors"
              >
                <span className="text-xs font-medium">Llámanos ahora</span>
                <span className="text-sm font-semibold flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  +1 (786) 387-0000
                </span>
              </a>

              {/* Banderas de idioma - ocultas en móvil pequeño */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  className="w-6 h-4 rounded-sm overflow-hidden border border-white/30 hover:border-white/50 transition-colors"
                  aria-label="Español"
                >
                  <img
                    src="https://flagcdn.com/w40/es.png"
                    alt="Español"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  className="w-6 h-4 rounded-sm overflow-hidden border border-white/30 hover:border-white/50 transition-colors"
                  aria-label="English"
                >
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>

              {/* Botón hamburguesa en móvil */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú móvil deslizante */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú móvil */}
          <div className="flex items-center justify-between p-6 border-b">
            <img
              src="/logo/logo-heryoutravel.webp"
              alt="Here You Travel"
              className="h-10 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links del menú móvil */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-1">
              {/* Experiencias - Acordeón */}
              <div>
                <button
                  onClick={() =>
                    setIsMobileExperienciasOpen(!isMobileExperienciasOpen)
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-900 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="font-montserrat">EXPERIENCIAS</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform",
                      isMobileExperienciasOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isMobileExperienciasOpen ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      to="/experiencias/viajes-en-grupo"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      Viajes en grupo
                    </Link>
                    <Link
                      to="/experiencias/viajes-de-lujo"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      Viajes de lujo
                    </Link>
                    <Link
                      to="/experiencias/reunificacion-familiar"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      Reunificación familiar
                    </Link>
                    <Link
                      to="/experiencias/bodas-punta-cana"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      Bodas en Punta Cana
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/destinos"
                className="block px-4 py-3 text-gray-900 font-semibold hover:bg-gray-100 rounded-lg transition-colors font-montserrat"
              >
                DESTINOS
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-3 text-gray-900 font-semibold hover:bg-gray-100 rounded-lg transition-colors font-montserrat"
              >
                BLOG DE VIAJES
              </Link>
              <Link
                to="/nosotros"
                className="block px-4 py-3 text-gray-900 font-semibold hover:bg-gray-100 rounded-lg transition-colors font-montserrat"
              >
                NOSOTROS
              </Link>
              <Link
                to="/contacto"
                className="block px-4 py-3 text-gray-900 font-semibold hover:bg-gray-100 rounded-lg transition-colors font-montserrat"
              >
                CONTACTO
              </Link>
            </div>
          </div>

          {/* Footer del menú móvil */}
          <div className="p-6 border-t space-y-4">
            <a
              href="tel:+17863870000"
              className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 (786) 387-0000</span>
            </a>

            {/* Banderas en móvil */}
            <div className="flex items-center justify-center gap-3">
              <button
                className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300 hover:border-gray-400 transition-colors"
                aria-label="Español"
              >
                <img
                  src="https://flagcdn.com/w40/es.png"
                  alt="Español"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300 hover:border-gray-400 transition-colors"
                aria-label="English"
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="English"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay del menú móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
