import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import { LinkPreview } from "@/components/ui/link-preview";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 overflow-visible">
          {/* Columna 1: Información de la empresa */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/logo/logo-heryoutravel.webp"
                  alt="hereyoutravel.com"
                  className="h-auto max-w-[200px]"
                />
              </Link>
            </div>

            {/* Dirección */}
            <p className="text-sm text-white/90 leading-relaxed">
              814 Ponce de Leon STE 405, Coral Gables, FL 33134, Estados Unidos
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>

            {/* Texto final */}
            <p className="text-sm text-white/90">
              Agencias de viaje en Miami, Florida
            </p>
          </div>

          {/* Columna 2: Explorar */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-montserrat">
              Explorar
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/experiencias"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Experiencias
                </Link>
              </li>
              <li>
                <Link
                  to="/destinos"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Destinos
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Importante */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-montserrat">
              Importante
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Blog viajero
                </Link>
              </li>
              <li>
                <Link
                  to="/experiencias/reunificacion-familiar"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Reunificación familiar
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-privacidad"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/aviso-legal"
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  Términos y condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Destinos */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 font-montserrat">
              Destinos
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/destinos/punta-cana"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Punta Cana
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/destinos/turquia"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Turquía
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/destinos/tailandia"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Tailandia
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/destinos/peru"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Perú
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/destinos/marruecos"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Marruecos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/destinos/japon"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Japón
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/destinos/egipto"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Egipto
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/destinos/dubai"
                      className="text-sm text-white/90 hover:text-white transition-colors"
                    >
                      Dubai
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna 5: Pago seguro */}
          <div className="overflow-visible">
            <h3 className="text-lg font-bold text-white mb-4 font-montserrat">
              Pago seguro
            </h3>
            <p className="text-sm text-white/90 mb-6 leading-relaxed">
              Aceptamos todas las tarjetas para que su experiencia de pago sea
              segura.
            </p>
            {/* Logos de métodos de pago */}
            <div className="flex items-center overflow-visible">
              <div className="bg-white rounded-full px-12 py-4">
                <img
                  src="/assets/Tarjetas-scaled.webp"
                  alt="Métodos de pago aceptados"
                  className="h-auto w-[250px] max-w-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-white/90 text-center">
              © 2025. Todos los derechos reservados.
            </p>
            <p className="text-sm text-white/70 text-center">
              Sitio desarrollado por{" "}
              <LinkPreview
                url="https://www.404studios.digital"
                isStatic={true}
                imageSrc="/assets/images/404studios artwork.jpg"
                className="text-white hover:text-white/80 transition-colors underline focus:outline-none rounded"
                width={300}
                height={200}
              >
                404studios
              </LinkPreview>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
