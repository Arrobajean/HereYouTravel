import { Link } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center pt-6 pb-4">
          {/* Logo a la izquierda */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <img
                src="/logo/logo-heryoutravel.webp"
                alt="Here You Travel"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Menú de navegación centrado */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-10">
            {/* Dropdown EXPERIENCIAS */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="text-white hover:text-white/80 transition-colors font-medium text-sm uppercase flex items-center gap-1 whitespace-nowrap">
                  EXPERIENCIAS
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className={cn(
                    "min-w-[220px] bg-white/95 backdrop-blur-md rounded-lg shadow-xl p-2 z-50",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out",
                    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                  )}
                  sideOffset={8}
                >
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/experiencias/viajes-en-grupo"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                    >
                      Viajes en grupo
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/experiencias/viajes-de-lujo"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                    >
                      Viajes de lujo
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/experiencias/reunificacion-familiar"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                    >
                      Reunificación familiar
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link
                      to="/experiencias/bodas-punta-cana"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
                    >
                      Bodas en Punta Cana
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <Link
              to="/destinos"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm uppercase whitespace-nowrap"
            >
              DESTINOS
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm uppercase whitespace-nowrap"
            >
              BLOG DE VIAJES
            </Link>
            <Link
              to="/nosotros"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm uppercase whitespace-nowrap"
            >
              NOSOTROS
            </Link>
            <Link
              to="/contacto"
              className="text-white hover:text-white/80 transition-colors font-medium text-sm uppercase whitespace-nowrap"
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
              <span className="text-xs sm:text-sm font-medium">Llámanos ahora</span>
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

