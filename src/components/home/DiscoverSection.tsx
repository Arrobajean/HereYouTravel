import { useEffect, useRef, useState } from "react";
import { useCounter } from "@/hooks/useCounter";

// SVG Placeholder para imagen grande (columna izquierda)
const LargeImagePlaceholder = () => (
  <svg
    className="w-full h-full object-cover rounded-lg"
    viewBox="0 0 400 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="400" height="600" fill="#E5E7EB" />
    <rect x="50" y="50" width="300" height="500" fill="#D1D5DB" rx="8" />
    <circle cx="200" cy="200" r="60" fill="#9CA3AF" />
    <rect x="120" y="280" width="160" height="20" fill="#9CA3AF" rx="4" />
    <rect x="100" y="320" width="200" height="20" fill="#9CA3AF" rx="4" />
    <text
      x="200"
      y="400"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="14"
      fontFamily="Arial"
    >
      Imagen placeholder
    </text>
    <text
      x="200"
      y="420"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="12"
      fontFamily="Arial"
    >
      (Reemplazar con imagen real)
    </text>
  </svg>
);


// Componente de estadística con contador
const StatItem = ({
  value,
  label,
  prefix = "+",
}: {
  value: number;
  label: string;
  prefix?: string;
}) => {
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

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl sm:text-6xl font-bold text-red-600 mb-2">
        {prefix}
        {count}
      </div>
      <div className="text-lg sm:text-xl text-gray-800 font-medium">
        {label}
      </div>
    </div>
  );
};

const DiscoverSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Columna izquierda - Imagen grande */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-[500px] lg:h-[600px]">
              <LargeImagePlaceholder />
            </div>
          </div>

          {/* Columna derecha - Texto y título */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              Descubre el mundo con nosotros
            </h2>

            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              Somos una agencia de viajes en Miami especializada en paquetes
              personalizados. Organizamos viajes a destinos como República
              Dominicana, Turquía, Perú, Japón, Dubái, Marruecos, Tailandia y
              Egipto.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Te ofrecemos vuelos al mejor precio, traslados, seguros, hoteles
              y resorts, excursiones a tu medida y una atención personalizada
              antes, durante y después de tu viaje.
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-8 border-t border-gray-200">
          <StatItem value={8} label="Años de experiencia" />
          <StatItem value={100} label="Destinos de viaje" />
          <StatItem value={500} label="Clientes felices" />
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

