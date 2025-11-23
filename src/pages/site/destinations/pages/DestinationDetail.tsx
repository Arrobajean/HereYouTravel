import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, Clock, Calendar, Check, X, ArrowLeft } from "lucide-react";
import { destinationsDetails } from "@/data/landing/destinationsDetails";
import CTAButton from "@/components/ui/cta-button";

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Buscar el destino por slug
  const destination = slug ? destinationsDetails[slug] : null;

  // Si no se encuentra el destino, redirigir a la página de destinos
  if (!destination) {
    return <Navigate to="/destinos" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link
              to="/destinos"
              className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a destinos
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-montserrat">
              {destination.destination}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              {destination.packageTitle}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Card - Sticky */}
      <div className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-600" />
                <span className="text-lg font-semibold">
                  {destination.duration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-lg font-semibold">
                  {destination.destination}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 ml-auto">
              <div className="text-right">
                <div className="text-sm text-gray-500 line-through">
                  ${destination.originalPrice}
                </div>
                <div className="text-3xl font-bold text-red-600">
                  ${destination.discountedPrice}
                </div>
                <div className="text-sm text-green-600">
                  Ahorra {destination.discount}%
                </div>
              </div>
              <CTAButton to="/contacto" className="whitespace-nowrap">
                RESERVAR AHORA
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
                Descripción del viaje
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Lo más destacado
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Itinerario detallado
              </h2>
              <div className="space-y-6">
                {destination.itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Día {item.day}: {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Included Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Incluye
                </h3>
                <ul className="space-y-3">
                  {destination.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-600" />
                  No incluye
                </h3>
                <ul className="space-y-3">
                  {destination.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">¿Listo para viajar?</h3>
                <p className="text-white/90 mb-4">
                  Contáctanos para personalizar tu viaje y obtener más
                  información.
                </p>
                <CTAButton
                  to="/contacto"
                  variant="white"
                  className="w-full justify-center"
                >
                  COTIZAR VIAJE
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
