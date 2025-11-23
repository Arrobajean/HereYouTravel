import { Link } from "react-router-dom";
import { MapPin, Calendar, Package } from "lucide-react";
import { useTabNavigation } from "@/hooks/landing/useTabNavigation";
import { destinations, destinationImages } from "@/data/landing/destinations";
import { services } from "@/data/landing/benefits";
import type { Destination } from "@/data/landing/destinations";
import SectionIcon from "@/components/ui/section-icon";

// Función helper para convertir el nombre del destino en un slug
const getDestinationSlug = (destination: string): string => {
  return destination
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
};

// SVG Placeholder para imágenes de servicios
const ServiceImagePlaceholder = ({ name }: { name: string }) => (
  <svg
    className="w-full h-full object-cover"
    viewBox="0 0 300 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="300" height="400" fill="#E5E7EB" />
    <rect x="30" y="30" width="240" height="340" fill="#D1D5DB" rx="8" />
    <circle cx="150" cy="200" r="50" fill="#9CA3AF" />
    <text
      x="150"
      y="300"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="12"
      fontFamily="Arial"
    >
      {name}
    </text>
    <text
      x="150"
      y="320"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="10"
      fontFamily="Arial"
    >
      (Imagen placeholder)
    </text>
  </svg>
);

// Card de destino
export const DestinationCard = ({
  destination,
  packageTitle,
  duration,
  originalPrice,
  discountedPrice,
  discount,
}: Destination) => {
  const imagePath = destinationImages[destination];
  const slug = getDestinationSlug(destination);

  return (
    <Link to={`/destinos/${slug}`} className="block">
      <div className="destination-card-squash perspective-card depth-hover bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer">
        <style>
          {`
          @keyframes cardSquash {
            0% {
              transform: scale(1, 1) translateY(0);
            }
            25% {
              transform: scale(1.015, 0.985) translateY(-2px);
            }
            50% {
              transform: scale(0.99, 1.01) translateY(-1px);
            }
            75% {
              transform: scale(1.008, 0.992) translateY(-1.5px);
            }
            100% {
              transform: scale(1.02, 0.98) translateY(-4px);
            }
          }
          
          @keyframes cardSquashReturn {
            0% {
              transform: scale(1.02, 0.98) translateY(-4px);
            }
            50% {
              transform: scale(0.995, 1.005) translateY(2px);
            }
            100% {
              transform: scale(1, 1) translateY(0);
            }
          }
          
          .destination-card-squash {
            transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1),
                        box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform, box-shadow;
          }
          
          .destination-card-squash:hover {
            transform: translateY(-8px) translateZ(20px) rotateY(1deg) scale(1.02);
            box-shadow: 
              0 25px 50px -12px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(0, 0, 0, 0.08);
          }
          
          .destination-card-squash:not(:hover) {
            transform: translateY(0) translateZ(0) rotateY(0deg) scale(1);
            box-shadow: 
              0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          
          @keyframes imageFollowThrough {
            0% {
              transform: scale(1.08);
            }
            50% {
              transform: scale(1.03);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @keyframes badgeBounce {
            0% {
              transform: scale(0) rotate(-10deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.2) rotate(5deg);
            }
            70% {
              transform: scale(0.9) rotate(-2deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }
          
          .destination-card-image {
            transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform;
          }
          
          .destination-card-squash:hover .destination-card-image {
            transform: scale(1.08);
          }
          
          .destination-card-squash:not(:hover) .destination-card-image {
            animation: imageFollowThrough 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .destination-card-squash:hover .destination-card-badge {
            transform: scale(1.08) rotate(2deg);
            transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          
          .destination-card-badge {
            transition: transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
            animation: badgeBounce var(--timing-entrance) var(--ease-bounce) backwards;
            animation-delay: 300ms;
          }
          
          @keyframes pricePulse {
            0%, 100% {
              transform: scale(1.05);
            }
            50% {
              transform: scale(1.08);
            }
          }
          
          .destination-card-price {
            transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .destination-card-squash:hover .destination-card-price {
            animation: pricePulse 800ms cubic-bezier(0.4, 0, 0.2, 1) 400ms;
          }
        `}
        </style>
        {/* Imagen con badge de descuento */}
        <div className="relative w-full h-64 flex-shrink-0 overflow-hidden">
          {imagePath ? (
            <img
              src={imagePath}
              alt={destination}
              className="destination-card-image w-full h-full object-cover"
              loading="lazy"
              width={400}
              height={256}
              decoding="async"
              fetchPriority="low"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">
                {destination}
              </span>
            </div>
          )}
          <div
            className="destination-card-badge absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-transform"
            style={{
              transitionDuration: "var(--timing-fast)",
              transitionTimingFunction: "var(--ease-bounce)",
            }}
          >
            {discount}% Off
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Ubicación */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700 font-medium">
              {destination}
            </span>
          </div>

          {/* Título del paquete */}
          <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 flex-grow">
            {packageTitle}
          </h3>

          {/* Footer con duración y precio */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{duration}</span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-600 line-through">
                  ${originalPrice}
                </span>
                <span className="destination-card-price text-lg font-bold text-gray-900">
                  ${discountedPrice}
                </span>
              </div>
              <span className="text-xs text-gray-500">Desde</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Card de servicio
const ServiceCard = ({ title }: { title: string }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      {/* Imagen con overlay */}
      <div className="relative h-80 overflow-hidden">
        <ServiceImagePlaceholder name={title} />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Flash Sale
        </div>
        {/* Overlay gradiente para el texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {/* Título sobre la imagen */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

interface PackagesSectionProps {
  defaultTab?: "destinos" | "servicios";
  onTabChange?: (tab: "destinos" | "servicios") => void;
}

const PackagesSection = ({
  defaultTab = "destinos",
  onTabChange,
}: PackagesSectionProps) => {
  const { activeTab, handleTabChange } = useTabNavigation({
    defaultTab,
    onTabChange,
  });

  return (
    <section
      id="packages-section"
      className="py-16 sm:py-20 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido según el tab activo */}
        {activeTab === "destinos" ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            {destinations.map((dest, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fade-in-scale 400ms var(--ease-out) backwards",
                }}
              >
                <DestinationCard {...dest} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesSection;
