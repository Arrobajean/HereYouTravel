import { Check, Award, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/landing/useInView";
import { benefits } from "@/data/landing/benefits";
import CTAButton from "@/components/ui/cta-button";
import SectionIcon from "@/components/ui/section-icon";

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
  const [sectionRef, sectionInView] = useInView(0.2);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 transition-all ${
            sectionInView ? "animate-fade-in-down opacity-100" : "opacity-0"
          }`}
          style={{ animationDelay: "0ms" }}
        >
          <div className="flex items-center justify-center gap-6 mb-6 w-full px-4 py-2 overflow-visible">
            <SectionIcon icon={Award} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat whitespace-nowrap">
              Beneficios de nuestra agencia
            </h2>
          </div>

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
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 perspective-container"
          style={{ perspective: "1200px" }}
        >
          {/* Columna izquierda - Imagen */}
          <div
            className={`relative transition-all ${
              sectionInView ? "animate-fade-in-right opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "0ms" }}
          >
            <div className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="/assets/landing/agencia-de-viajes-en-miami.webp"
                alt="Agencia de viajes en Miami"
                className="w-full h-full object-cover"
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </div>

          {/* Columna derecha - Lista de beneficios */}
          <div className="flex flex-col justify-center space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex gap-4 transition-all group ${
                  sectionInView
                    ? "animate-fade-in-left opacity-100"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                {/* Checkmark rojo */}
                <div
                  className={`flex-shrink-0 mt-1 ${
                    sectionInView ? "animate-fade-in-scale" : ""
                  }`}
                  style={{
                    animationDelay: `${400 + index * 200}ms`,
                  }}
                >
                  <div
                    className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ transitionDuration: "var(--timing-fast)" }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Contenido */}
                <div
                  className={`flex-1 ${
                    sectionInView ? "animate-fade-in-right" : ""
                  }`}
                  style={{
                    animationDelay: `${500 + index * 200}ms`,
                  }}
                >
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
