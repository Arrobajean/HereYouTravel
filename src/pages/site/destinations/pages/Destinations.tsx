import { DestinationCard } from "@/components/home/PackagesSection";
import { destinations } from "@/data/landing/destinations";

const Destinations = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Destinos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los destinos más increíbles del mundo con nuestros paquetes
            exclusivos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
