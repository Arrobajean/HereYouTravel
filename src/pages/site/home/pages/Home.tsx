import { useState, lazy, Suspense, useEffect, useRef } from "react";

// Componente de avatar con fallback
const AvatarWithFallback = ({
  name,
  initials,
  index,
  isVisible,
  animationDelay,
}: {
  name: string;
  initials: string;
  index: number;
  isVisible: boolean;
  animationDelay: number;
}) => {
  const [imgError, setImgError] = useState(false);
  const avatarUrl = `https://avatar-placeholder.iran.liara.run/?text=${encodeURIComponent(
    initials
  )}`;
  const bgColor = `hsl(${(index * 137.5) % 360}, 70%, 50%)`;

  if (imgError) {
    return (
      <div
        className="w-10 h-10 rounded-full border-2 border-white/30 backdrop-blur-sm hover:scale-110 transition-transform flex items-center justify-center text-white text-sm font-bold"
        style={{
          backgroundColor: bgColor,
          animationDelay: `${animationDelay}ms`,
          transitionDuration: "var(--timing-fast)",
          transitionTimingFunction: "var(--ease-out)",
          animation: isVisible
            ? "fade-in-scale 500ms cubic-bezier(0.16, 1, 0.3, 1) backwards"
            : "none",
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={avatarUrl}
      alt={name}
      className="w-10 h-10 rounded-full border-2 border-white/30 backdrop-blur-sm hover:scale-110 transition-transform object-cover"
      style={{
        animationDelay: `${animationDelay}ms`,
        transitionDuration: "var(--timing-fast)",
        transitionTimingFunction: "var(--ease-out)",
        animation: isVisible
          ? "fade-in-scale 500ms cubic-bezier(0.16, 1, 0.3, 1) backwards"
          : "none",
      }}
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      onError={() => setImgError(true)}
    />
  );
};
import {
  MapPin,
  DollarSign,
  Clock,
  Search,
  ChevronDown,
  Star,
} from "lucide-react";
import DiscoverSection from "@/components/home/DiscoverSection";
import AdventureSection from "@/components/home/AdventureSection";
import PackagesSection from "@/components/home/PackagesSection";

// Lazy load de secciones que están fuera del viewport inicial
const BenefitsSection = lazy(() => import("@/components/home/BenefitsSection"));
const ReviewsSection = lazy(() => import("@/components/home/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const ContactFormSection = lazy(
  () => import("@/components/home/ContactFormSection")
);
const BlogSection = lazy(() => import("@/components/home/BlogSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

// Componente de placeholder para secciones lazy
const SectionPlaceholder = () => (
  <div className="py-16 sm:py-20 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Datos de los heroes con sus destinos
const heroImages = [
  {
    src: "/assets/landing/turquia-hero.webp",
    destination: "Turquía",
    alt: "Turquía - Destino de viaje",
  },
  {
    src: "/assets/landing/miami-hero.png",
    destination: "Miami",
    alt: "Miami - Destino de viaje",
  },
  {
    src: "/assets/landing/tokio-shibuya-hero.webp",
    destination: "Tokio",
    alt: "Tokio - Destino de viaje",
  },
  {
    src: "/assets/landing/paris-hero.jpeg",
    destination: "París",
    alt: "París - Destino de viaje",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState<"destinos" | "servicios">(
    "destinos"
  );
  const [isVisible, setIsVisible] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotación automática de imágenes del hero cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background - Imágenes con transición */}
        <div className="absolute inset-0">
          {heroImages.map((hero, index) => (
            <img
              key={index}
              src={hero.src}
              alt={hero.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
              width={1920}
              height={1080}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding={index === 0 ? "sync" : "async"}
            />
          ))}
        </div>

        {/* Badge del destino en la esquina inferior derecha */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs sm:text-sm font-semibold border border-white/20 shadow-lg transition-all duration-500">
            {heroImages[currentHeroIndex].destination}
          </div>
        </div>

        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido del Hero */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Columna izquierda - Contenido */}
            <div className="text-white">
              {/* Badge - Staging: Aparece primero */}
              <div
                className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 backdrop-blur-sm rounded-lg mb-4 sm:mb-6 text-xs sm:text-sm font-medium transition-all ${
                  isVisible ? "animate-fade-in-down opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "0ms" }}
              >
                Agencia de viajes en Miami, Florida
              </div>

              {/* Título principal - Staging: Aparece segundo */}
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight transition-all ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                Viaja a destinos increíbles ahora
              </h1>

              {/* Subtítulo - Staging: Aparece tercero */}
              <p
                className={`text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl transition-all ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "400ms" }}
              >
                ¡Escápate con nuestros paquetes de viajes! Vuelos desde
                cualquier parte del mundo a destinos perfectos, desde playas
                hasta aventuras urbanas.
              </p>

              {/* Social Proof - Staging: Aparece cuarto */}
              <div
                className={`mt-6 sm:mt-8 lg:mt-12 space-y-3 sm:space-y-4 transition-all ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: "600ms" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-white/90 text-xs sm:text-sm">
                    Nos recomiendan:
                  </span>
                  <div className="flex -space-x-1.5 sm:-space-x-2">
                    {["María García", "Carlos Rodríguez", "Ana Martínez"].map(
                      (name, i) => {
                        // Obtener las iniciales del nombre
                        const initials = name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase();
                        return (
                          <AvatarWithFallback
                            key={i}
                            name={name}
                            initials={initials}
                            index={i}
                            isVisible={isVisible}
                            animationDelay={800 + i * 100}
                          />
                        );
                      }
                    )}
                    <a
                      href="https://www.google.com/maps/place/?q=HereYouTravel+Miami"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500/50 border-2 border-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-gray-500/70 hover:scale-110 transition-all cursor-pointer group"
                      aria-label="Añadir reseña en Google Maps"
                      style={{
                        animationDelay: "1100ms",
                        transitionDuration: "var(--timing-fast)",
                        transitionTimingFunction: "var(--ease-out)",
                        animation: isVisible
                          ? "fade-in-scale 500ms cubic-bezier(0.16, 1, 0.3, 1) backwards"
                          : "none",
                      }}
                    >
                      <span className="text-white text-xs font-bold group-hover:scale-125 transition-transform">
                        +
                      </span>
                    </a>
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm ml-1 sm:ml-2">
                    100+ Destinos turísticos
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform"
                        style={{
                          animationDelay: `${1200 + i * 100}ms`,
                          transitionDuration: "var(--timing-fast)",
                          transitionTimingFunction: "var(--ease-out)",
                          animation: isVisible
                            ? "fade-in-scale 500ms cubic-bezier(0.16, 1, 0.3, 1) backwards"
                            : "none",
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-white/90 text-xs sm:text-sm">
                    (4,6) Reseñas positivas
                  </span>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario de búsqueda - Staging: Aparece último */}
            <div
              className={`lg:pl-8 transition-all ${
                isVisible ? "animate-fade-in-left opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: "800ms" }}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl max-w-md mx-auto lg:mx-0">
                <form className="space-y-2.5 sm:space-y-3">
                  {/* Campo Destinos */}
                  <div className="relative group">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 group-hover:text-white/90 transition-colors pointer-events-none z-10" />
                    <select className="glass-select w-full pl-9 pr-8 py-2.5 rounded-lg text-sm font-medium appearance-none focus:outline-none cursor-pointer transition-all">
                      <option value="" className="text-white">
                        Destinos
                      </option>
                      <option value="paris" className="text-white">
                        París, Francia
                      </option>
                      <option value="tokio" className="text-white">
                        Tokio, Japón
                      </option>
                      <option value="nueva-york" className="text-white">
                        Nueva York, USA
                      </option>
                      <option value="barcelona" className="text-white">
                        Barcelona, España
                      </option>
                      <option value="bali" className="text-white">
                        Bali, Indonesia
                      </option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 pointer-events-none group-hover:text-white/90 transition-colors" />
                  </div>

                  {/* Campo Precio */}
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 group-hover:text-white/90 transition-colors pointer-events-none z-10" />
                    <select className="glass-select w-full pl-9 pr-8 py-2.5 rounded-lg text-sm font-medium appearance-none focus:outline-none cursor-pointer transition-all">
                      <option value="" className="text-white">
                        $800 - $4,899
                      </option>
                      <option value="500-1000" className="text-white">
                        $500 - $1,000
                      </option>
                      <option value="1000-2500" className="text-white">
                        $1,000 - $2,500
                      </option>
                      <option value="2500-5000" className="text-white">
                        $2,500 - $5,000
                      </option>
                      <option value="5000+" className="text-white">
                        $5,000+
                      </option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 pointer-events-none group-hover:text-white/90 transition-colors" />
                  </div>

                  {/* Campo Duración */}
                  <div className="relative group">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 group-hover:text-white/90 transition-colors pointer-events-none z-10" />
                    <select className="glass-select w-full pl-9 pr-8 py-2.5 rounded-lg text-sm font-medium appearance-none focus:outline-none cursor-pointer transition-all">
                      <option value="" className="text-white">
                        0 Días - 15 Días
                      </option>
                      <option value="1-3" className="text-white">
                        1-3 Días
                      </option>
                      <option value="4-7" className="text-white">
                        4-7 Días
                      </option>
                      <option value="8-15" className="text-white">
                        8-15 Días
                      </option>
                      <option value="16+" className="text-white">
                        16+ Días
                      </option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 pointer-events-none group-hover:text-white/90 transition-colors" />
                  </div>

                  {/* Botón Buscar */}
                  <button
                    type="submit"
                    className="w-full bg-red-600/90 backdrop-blur-sm hover:bg-red-700 active:scale-[0.98] text-white font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg text-sm border border-red-500/30 hover:border-red-400/50 mt-3"
                  >
                    <Search className="w-4 h-4" />
                    Buscar Destino
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Descubre el mundo */}
      <DiscoverSection />

      {/* Sección Tu aventura comienza aquí */}
      <AdventureSection activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Sección de Paquetes y Servicios */}
      <PackagesSection defaultTab={activeTab} onTabChange={setActiveTab} />

      {/* Sección de Beneficios - Lazy loaded */}
      <Suspense fallback={<SectionPlaceholder />}>
        <BenefitsSection />
      </Suspense>

      {/* Sección de Reseñas - Lazy loaded */}
      <Suspense fallback={<SectionPlaceholder />}>
        <ReviewsSection />
      </Suspense>

      {/* Sección de FAQs - Lazy loaded */}
      <Suspense fallback={<SectionPlaceholder />}>
        <FAQSection />
      </Suspense>

      {/* Sección de Formulario de Contacto - Lazy loaded */}
      <Suspense fallback={<SectionPlaceholder />}>
        <ContactFormSection />
      </Suspense>

      {/* Sección de Blog - Lazy loaded */}
      <Suspense fallback={<SectionPlaceholder />}>
        <BlogSection />
      </Suspense>

      {/* Sección CTA - Lazy loaded */}
      <Suspense fallback={<SectionPlaceholder />}>
        <CTASection />
      </Suspense>
    </>
  );
};

export default Home;
