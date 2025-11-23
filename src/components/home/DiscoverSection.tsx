import { Globe } from "lucide-react";
import { useInView } from "@/hooks/landing/useInView";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/data/landing/stats";
import type { Stat } from "@/data/landing/stats";
import { useState, useEffect, useRef } from "react";
import SectionIcon from "@/components/ui/section-icon";

// Componente de imagen para la sección
const LargeImage = () => (
  <img
    src="/assets/landing/agenicas-de-viajes-en-miami-2048x1549.webp"
    alt="Agencia de viajes en Miami - HereYouTravel"
    className="w-full h-full object-cover rounded-lg"
    width={2048}
    height={1549}
    loading="lazy"
    decoding="async"
    fetchPriority="low"
  />
);

// Componente de estadística con contador
const StatItem = ({ value, label, prefix = "+" }: Stat) => {
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { count, start } = useCounter(value, { duration: 2000 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            start();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted]);

  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    if (hasStarted && count === value) {
      setShowSparkle(true);
      const timer = setTimeout(() => setShowSparkle(false), 600);
      return () => clearTimeout(timer);
    }
  }, [count, value, hasStarted]);

  return (
    <div ref={ref} className="text-center relative">
      <div
        className="text-2xl sm:text-5xl lg:text-6xl font-bold text-red-600 mb-1 sm:mb-2 transition-all relative"
        style={{
          transitionDuration: "var(--timing-normal)",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        {prefix}
        {count}
        {showSparkle && (
          <span className="absolute -top-2 -right-2 text-yellow-400 animate-sparkle">
            ✨
          </span>
        )}
      </div>
      <div
        className="text-xs sm:text-lg lg:text-xl text-gray-800 font-medium transition-all leading-tight sm:leading-normal"
        style={{
          transitionDuration: "var(--timing-normal)",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const DiscoverSection = () => {
  const [imageRef, imageInView] = useInView(0.2);
  const [textRef, textInView] = useInView(0.2);
  const [statsRef, statsInView] = useInView(0.3);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Icono y título principal */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center gap-4 mb-6 w-full px-4 py-2 overflow-visible">
            <SectionIcon icon={Globe} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat sm:whitespace-nowrap text-center">
              Descubre el mundo con nosotros
            </h2>
          </div>
        </div>

        {/* Sección de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Columna izquierda - Imagen grande */}
          <div
            ref={imageRef}
            className={`order-2 lg:order-1 transition-all ${
              imageInView ? "animate-fade-in-right opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "0ms" }}
          >
            <div className="w-full h-[500px] lg:h-[600px]">
              <LargeImage />
            </div>
          </div>

          {/* Columna derecha - Texto y título */}
          <div
            ref={textRef}
            className={`order-1 lg:order-2 flex flex-col justify-center transition-all ${
              textInView ? "animate-fade-in-left opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Somos una agencia de viajes en Miami especializada en paquetes
              personalizados. Organizamos viajes a destinos como República
              Dominicana, Turquía, Perú, Japón, Dubái, Marruecos, Tailandia y
              Egipto.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Te ofrecemos vuelos al mejor precio, traslados, seguros, hoteles y
              resorts, excursiones a tu medida y una atención personalizada
              antes, durante y después de tu viaje.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Nuestro equipo de expertos en viajes trabaja contigo para crear
              experiencias únicas e inolvidables. Desde la planificación inicial
              hasta el regreso a casa, nos aseguramos de que cada detalle esté
              perfectamente organizado para que solo te preocupes por disfrutar.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Ya sea que busques una escapada romántica, una aventura familiar,
              un viaje de negocios o una experiencia de lujo, tenemos el paquete
              perfecto para ti. Descubre nuevos horizontes y crea recuerdos que
              durarán toda la vida con HereYouTravel.
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-2 sm:gap-8 lg:gap-12 pt-6 sm:pt-8 border-t border-gray-200"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all ${
                statsInView ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
