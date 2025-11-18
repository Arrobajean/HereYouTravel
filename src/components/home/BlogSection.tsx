import { Link } from "react-router-dom";

// SVG Placeholder para imágenes de blog
const BlogImagePlaceholder = ({ destination }: { destination: string }) => (
  <svg
    className="w-full h-full object-cover"
    viewBox="0 0 400 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="400" height="250" fill="#E5E7EB" />
    <rect x="50" y="50" width="300" height="150" fill="#D1D5DB" rx="8" />
    <circle cx="200" cy="125" r="30" fill="#9CA3AF" />
    <text
      x="200"
      y="180"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="12"
      fontFamily="Arial"
    >
      {destination}
    </text>
    <text
      x="200"
      y="200"
      textAnchor="middle"
      fill="#6B7280"
      fontSize="10"
      fontFamily="Arial"
    >
      (Imagen placeholder)
    </text>
  </svg>
);

// Card de blog
const BlogCard = ({
  destination,
  title,
  description,
  imagePlaceholder,
}: {
  destination: string;
  title: string;
  description: string;
  imagePlaceholder: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Imagen - Parte superior redondeada */}
      <div className="w-full h-64 overflow-hidden">
        {imagePlaceholder}
      </div>

      {/* Contenido - Parte inferior */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-base text-gray-700 mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Botón VER MÁS */}
        <Link
          to={`/blog/${destination.toLowerCase()}`}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
        >
          VER MÁS
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      destination: "Dubái",
      title: "Los 10 mejores tours en Dubái",
      description:
        "Descubre los 10 mejores tours en Dubái que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    },
    {
      destination: "Miami",
      title: "Los 10 mejores tours en Miami",
      description:
        "Descubre los 10 mejores tours en Miami que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    },
    {
      destination: "Turquía",
      title: "Los 10 mejores tours en Turquía",
      description:
        "Descubre los 10 mejores tours en Turquía que no pueden faltar en tu viaje con experiencias únicas, seguras y altamente recomendadas por viajeros.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Inspiración y tips para tus viajes
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
            Te contamos sobre los mejores destinos, actividades imperdibles y
            todo lo que necesitas saber para viajar con tranquilidad.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              destination={post.destination}
              title={post.title}
              description={post.description}
              imagePlaceholder={
                <BlogImagePlaceholder destination={post.destination} />
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

