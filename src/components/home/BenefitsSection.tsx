import { Check, Play, ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/cta-button";

// SVG Placeholder para la imagen/video
const VideoImagePlaceholder = () => (
  <svg
    className="w-full h-full object-cover rounded-lg"
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="600" height="400" fill="#E5E7EB" />
    <rect x="50" y="50" width="500" height="300" fill="#D1D5DB" rx="8" />
    <circle cx="300" cy="200" r="60" fill="#9CA3AF" />
    <text
      x="300"
      y="280"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="14"
      fontFamily="Arial"
    >
      Imagen/Video placeholder
    </text>
    <text
      x="300"
      y="300"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="12"
      fontFamily="Arial"
    >
      (Reemplazar con imagen/video real)
    </text>
  </svg>
);

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Vuelos a tu medida",
      description:
        "Encontramos los mejores vuelos para ti, con excelente precio y horarios convenientes.",
    },
    {
      title: "Tours personalizados",
      description:
        "Creamos experiencias únicas, adaptadas a tus gustos, sueños y forma de viajar.",
    },
    {
      title: "Guías locales expertos",
      description:
        "Descubre la historia y cultura con guías profesionales para una experiencia auténtica.",
    },
    {
      title: "Transporte confortable",
      description:
        "Disfruta el camino en vehículos modernos, seguros y con comodidades ideales.",
    },
    {
      title: "Alojamiento de calidad",
      description:
        "Descansa en hoteles y resorts exclusivos, elegidos para tu máximo confort.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Beneficios de nuestra agencia
          </h2>

          {/* Línea decorativa con puntos */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="w-16 h-1 bg-red-600 rounded-full"></div>
          </div>

          {/* Descripción */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            En nuestra agencia en viajes en miami, nos aseguramos de que cada
            aventura sea única y completamente adaptada a tus necesidades.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Columna izquierda - Imagen/Video */}
          <div className="relative">
            <div className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <VideoImagePlaceholder />
            </div>
            {/* Botón de play centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Reproducir video"
              >
                <Play className="w-10 h-10 text-red-600 ml-1" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Columna derecha - Lista de beneficios */}
          <div className="flex flex-col justify-center space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                {/* Checkmark rojo */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Contenido */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-montserrat">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón CTA */}
        <CTAButton to="/destinos" icon={ArrowRight} uppercase>
          NUESTROS DESTINOS
        </CTAButton>
      </div>
    </section>
  );
};

export default BenefitsSection;

