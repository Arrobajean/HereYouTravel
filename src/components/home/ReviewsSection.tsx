import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Info,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useCarousel } from "@/hooks/landing/useCarousel";
import { reviews } from "@/data/landing/reviews";
import type { Review } from "@/data/landing/reviews";
import SectionIcon from "@/components/ui/section-icon";

// Tarjeta de reseña individual - Diseño simplificado con expansión
const ReviewCard = ({
  reviewerName,
  timeAgo,
  reviewText,
  avatarColor,
  hasAvatar = false,
}: Review) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = reviewText.length > 150;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 h-full flex flex-col">
      {/* Header simplificado */}
      <div className="flex items-center gap-2 mb-3">
        {hasAvatar ? (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          </div>
        ) : (
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0"
            style={{ backgroundColor: avatarColor }}
          >
            {reviewerName.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 text-sm truncate">
            {reviewerName}
          </div>
          <div className="text-xs text-gray-500">{timeAgo}</div>
        </div>
      </div>

      {/* Estrellas */}
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Texto de la reseña con altura fija */}
      <div className="flex-1 mb-2">
        <p
          className={`text-gray-700 text-xs leading-relaxed ${
            !isExpanded && isLongText ? "line-clamp-3" : ""
          }`}
        >
          {reviewText}
        </p>
      </div>

      {/* Botón Ver más/Ver menos */}
      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-red-600 hover:text-red-700 font-medium transition-colors text-left"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
};

const ReviewsSection = () => {
  const {
    currentIndex,
    cardsPerView,
    maxIndex,
    handlePrev,
    handleNext,
    goToIndex,
  } = useCarousel({ totalItems: reviews.length });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="flex flex-col items-center justify-center gap-4 mb-6 w-full px-4 py-2 overflow-visible">
            <SectionIcon icon={MessageCircle} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat sm:whitespace-nowrap text-center">
              Opiniones de viajeros
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

          {/* Subtítulo */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Lee opiniones reales sobre nuestros tours, paquetes turísticos y
            destinos favoritos antes de planificar tu próxima aventura.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Columna izquierda - Tarjeta de resumen */}
          <div className="bg-red-600 rounded-2xl p-4 sm:p-8 shadow-lg h-fit">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              {/* Logo más pequeño en móvil */}
              <div className="flex-shrink-0">
                <img
                  src="/logo/logo-heryoutravel.webp"
                  alt="Here You Travel"
                  className="h-12 sm:h-20 lg:h-24 w-auto object-contain"
                  width={250}
                  height={70}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Contenido */}
              <div className="flex-1 w-full sm:w-auto">
                {/* Calificación */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex gap-1 mb-1.5 sm:mb-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white text-xs sm:text-sm text-center">
                    88 reseñas Google
                  </p>
                </div>

                {/* Botón */}
                <div className="flex justify-center">
                  <button className="bg-white border-2 border-white text-red-600 font-semibold py-2 px-4 sm:py-2.5 sm:px-5 rounded-xl hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm">
                    Escribe una reseña
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Carrusel de reseñas */}
          <div className="relative min-h-[200px]">
            {/* Contenedor del carrusel */}
            <div className="overflow-hidden -mx-2">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsPerView)
                  }%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{
                      width: `${100 / cardsPerView}%`,
                    }}
                  >
                    <ReviewCard {...review} />
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de navegación */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors shadow-md"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors shadow-md"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Indicadores de posición */}
            {maxIndex > 0 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => goToIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? "bg-red-600" : "bg-gray-300"
                      }`}
                      aria-label={`Ir a página ${index + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Badge de verificación */}
        <div className="flex justify-center mt-8">
          <div className="bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Verificado por: Trustindex</span>
            <button
              className="ml-2 w-4 h-4 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Más información"
            >
              <Info className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
