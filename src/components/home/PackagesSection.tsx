import { useState, useEffect } from "react";
import { MapPin, Calendar } from "lucide-react";

// SVG Placeholder para imágenes de destinos
const DestinationImagePlaceholder = ({ name }: { name: string }) => (
  <svg
    className="w-full h-full object-cover"
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="400" height="300" fill="#E5E7EB" />
    <rect x="50" y="50" width="300" height="200" fill="#D1D5DB" rx="8" />
    <circle cx="200" cy="150" r="40" fill="#9CA3AF" />
    <text
      x="200"
      y="220"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="14"
      fontFamily="Arial"
    >
      {name}
    </text>
    <text
      x="200"
      y="240"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="12"
      fontFamily="Arial"
    >
      (Imagen placeholder)
    </text>
  </svg>
);

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
const DestinationCard = ({
  destination,
  packageTitle,
  duration,
  originalPrice,
  discountedPrice,
  discount,
}: {
  destination: string;
  packageTitle: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Imagen con badge de descuento - Ocupa toda la parte superior */}
      <div className="relative w-full h-64 flex-shrink-0 overflow-hidden">
        <DestinationImagePlaceholder name={destination} />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
          {discount}% Off
        </div>
      </div>

      {/* Contenido - Parte inferior */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Ubicación */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700 font-medium">{destination}</span>
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
              <span className="text-lg font-bold text-gray-900">
                ${discountedPrice}
              </span>
            </div>
            <span className="text-xs text-gray-500">Desde</span>
          </div>
        </div>
      </div>
    </div>
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
  onTabChange 
}: PackagesSectionProps) => {
  const [activeTab, setActiveTab] = useState<"destinos" | "servicios">(defaultTab);

  // Sincronizar el estado cuando cambia defaultTab desde el padre
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (tab: "destinos" | "servicios") => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  const destinations = [
    {
      destination: "Japón",
      packageTitle: "Paquete de Viaje a Japón: Explora la Tierra del Sol Naciente",
      duration: "10 Días",
      originalPrice: "5,790",
      discountedPrice: "4,899",
      discount: "15",
    },
    {
      destination: "Perú",
      packageTitle: "Paquete de Viaje a Perú: Descubriendo lo Mejor de los Andes",
      duration: "15 Días",
      originalPrice: "3,300",
      discountedPrice: "2,799",
      discount: "15",
    },
    {
      destination: "Tailandia",
      packageTitle: "Paquete de Viaje a Tailandia: Descubre el Sudeste Asiático",
      duration: "15 Días",
      originalPrice: "3,400",
      discountedPrice: "2,899",
      discount: "15",
    },
    {
      destination: "República Dominicana",
      packageTitle: "Paquete de Viaje a República Dominicana: Paraíso Caribeño",
      duration: "7 Días",
      originalPrice: "2,500",
      discountedPrice: "2,125",
      discount: "15",
    },
    {
      destination: "Turquía",
      packageTitle: "Paquete de Viaje a Turquía: Entre Europa y Asia",
      duration: "12 Días",
      originalPrice: "4,200",
      discountedPrice: "3,570",
      discount: "15",
    },
    {
      destination: "Egipto",
      packageTitle: "Paquete de Viaje a Egipto: Descubre los Misterios del Nilo",
      duration: "10 Días",
      originalPrice: "3,800",
      discountedPrice: "3,230",
      discount: "15",
    },
  ];

  const services = [
    "Viajes en grupo",
    "Boda en playa",
    "Reunificación Familiar",
    "Destinos de lujo",
  ];

  return (
    <section id="packages-section" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido según el tab activo */}
        {activeTab === "destinos" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {destinations.map((dest, index) => (
              <DestinationCard key={index} {...dest} />
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

