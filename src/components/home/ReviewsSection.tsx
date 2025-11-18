import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Info } from "lucide-react";

// Avatar placeholder con inicial
const AvatarPlaceholder = ({ name, color }: { name: string; color: string }) => {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg`}
      style={{ backgroundColor: color }}
    >
      {initial}
    </div>
  );
};

// Tarjeta de reseña individual
const ReviewCard = ({
  reviewerName,
  timeAgo,
  reviewText,
  avatarColor,
  hasAvatar = false,
}: {
  reviewerName: string;
  timeAgo: string;
  reviewText: string;
  avatarColor: string;
  hasAvatar?: boolean;
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[320px] sm:min-w-[350px] flex-shrink-0">
      {/* Header con avatar, nombre y tiempo */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {hasAvatar ? (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            </div>
          ) : (
            <AvatarPlaceholder name={reviewerName} color={avatarColor} />
          )}
          <div>
            <div className="font-semibold text-gray-900">{reviewerName}</div>
            <div className="text-sm text-gray-500">{timeAgo}</div>
          </div>
        </div>
        {/* Logo de Google */}
        <div className="flex items-center">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>
      </div>

      {/* Estrellas con verificación */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <CheckCircle2 className="w-4 h-4 text-blue-500" />
      </div>

      {/* Texto de la reseña */}
      <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-3">
        {reviewText}
      </p>

      {/* Enlace Leer más */}
      <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
        Leer más
      </button>
    </div>
  );
};

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      reviewerName: "Fanny B",
      timeAgo: "hace 4 meses",
      reviewText:
        "Excelente lugar para tomarse unas vacaciones, linda playa, excelente comida, todo muy limpio, el personal muy atento y amable. Definitivamente volveré.",
      avatarColor: "#EC4899", // rosa
      hasAvatar: true,
    },
    {
      reviewerName: "Gielen V",
      timeAgo: "hace 3 meses",
      reviewText:
        "Increíble experiencia de viaje. La agencia se encargó de todos los detalles y todo salió perfecto. Los destinos fueron espectaculares y el servicio impecable.",
      avatarColor: "#F59E0B", // naranja
    },
    {
      reviewerName: "Madeleyne C",
      timeAgo: "hace 2 meses",
      reviewText:
        "Muy profesional y organizado. Nos ayudaron a planificar el viaje perfecto. Los guías fueron excelentes y conocían muy bien los lugares. Altamente recomendado.",
      avatarColor: "#10B981", // verde
    },
    {
      reviewerName: "Carlos M",
      timeAgo: "hace 5 meses",
      reviewText:
        "La mejor agencia de viajes con la que he trabajado. Precios justos, atención personalizada y destinos increíbles. Sin duda volveré a usar sus servicios.",
      avatarColor: "#3B82F6", // azul
    },
    {
      reviewerName: "Ana L",
      timeAgo: "hace 1 mes",
      reviewText:
        "Experiencia maravillosa desde el principio hasta el final. Todo estuvo perfectamente coordinado y superó nuestras expectativas. Gracias por hacer nuestro viaje inolvidable.",
      avatarColor: "#8B5CF6", // púrpura
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const cardsPerView = 3; // En desktop muestra 3
      return prev > 0 ? prev - 1 : Math.ceil(reviews.length / cardsPerView) - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const cardsPerView = 3; // En desktop muestra 3
      const maxIndex = Math.ceil(reviews.length / cardsPerView) - 1;
      return prev < maxIndex ? prev + 1 : 0;
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Opiniones de viajeros
          </h2>

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
          <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
            {/* Logo */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-lg flex flex-col items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">here</span>
                <span className="text-white text-xs">youtravel.com</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-montserrat">
                Here You Travel
              </h3>
            </div>

            {/* Calificación */}
            <div className="mb-6">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">88 reseñas Google</p>
            </div>

            {/* Botón */}
            <button className="w-full bg-white border-2 border-gray-900 text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              Escribe una reseña
            </button>
          </div>

          {/* Columna derecha - Carrusel de reseñas */}
          <div className="relative">
            {/* Contenedor del carrusel */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
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
            <div className="flex items-center justify-center gap-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-red-600" : "bg-gray-300"
                  }`}
                  aria-label={`Ir a reseña ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Badge de verificación */}
        <div className="flex justify-end mt-8">
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

