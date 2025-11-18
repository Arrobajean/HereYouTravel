import CTAButton from "@/components/ui/cta-button";

interface AdventureSectionProps {
  activeTab?: "destinos" | "servicios";
  onTabChange?: (tab: "destinos" | "servicios") => void;
}

const AdventureSection = ({ activeTab = "destinos", onTabChange }: AdventureSectionProps) => {
  return (
    <section className="relative">
      {/* Hero Section - Parte superior con background oscuro */}
      <div className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background - El usuario lo agregará después */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
          {/* Placeholder para el background que el usuario agregará */}
        </div>

        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Contenido centrado */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-montserrat leading-tight max-w-4xl mx-auto">
            Descubre el mundo con nuestra agencia de viajes en Miami
          </h2>
          <CTAButton to="/contacto" variant="white" size="lg" uppercase>
            COTIZA TU VIAJE AHORA
          </CTAButton>
        </div>
      </div>

      {/* Content Section - Parte inferior con fondo blanco */}
      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Título secundario */}
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              Tu aventura comienza aquí
            </h3>

            {/* Línea decorativa con puntos */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            </div>

            {/* Párrafo descriptivo */}
            <p className="text-base sm:text-lg text-gray-700 mb-12 leading-relaxed">
              Explora destinos increíbles con experiencias únicas. Disfruta de
              paisajes asombrosos, cultura fascinante y momentos inolvidables en
              cada rincón del mundo.
            </p>

            {/* Botones de navegación */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <CTAButton
                onClick={() => {
                  onTabChange?.("destinos");
                  // Scroll suave a la sección de paquetes
                  setTimeout(() => {
                    document.getElementById("packages-section")?.scrollIntoView({ 
                      behavior: "smooth",
                      block: "start"
                    });
                  }, 100);
                }}
                variant={activeTab === "destinos" ? "primary" : "secondary"}
                className="w-full sm:w-auto min-w-[200px]"
                centered={false}
              >
                Destinos
              </CTAButton>
              <CTAButton
                onClick={() => {
                  onTabChange?.("servicios");
                  // Scroll suave a la sección de paquetes
                  setTimeout(() => {
                    document.getElementById("packages-section")?.scrollIntoView({ 
                      behavior: "smooth",
                      block: "start"
                    });
                  }, 100);
                }}
                variant={activeTab === "servicios" ? "primary" : "secondary"}
                className="w-full sm:w-auto min-w-[200px]"
                centered={false}
              >
                Servicios
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;

