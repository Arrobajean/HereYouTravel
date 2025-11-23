import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 overflow-x-hidden w-full transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        shouldShowBackground && "backdrop-blur-sm bg-black/20"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full">
        <div className="grid grid-cols-3 items-center pt-6 pb-4 w-full">
          {/* Logo a la izquierda */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <img
                src="/logo/logo-heryoutravel.webp"
                alt="Here You Travel"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
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
          <div className="flex items-center justify-end gap-4">
            <a
              href="tel:+17863870000"
              className="hidden sm:flex flex-col items-end text-white hover:text-white/80 transition-colors"
            >
              <span className="text-xs sm:text-sm font-medium">
                Llámanos ahora
              </span>
              <span className="text-sm sm:text-base font-semibold flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +1 (786) 387-0000
              </span>
            </a>

            {/* Banderas de idioma */}
            <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
