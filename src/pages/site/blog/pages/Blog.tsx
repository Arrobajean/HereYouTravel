import { Link } from "react-router-dom";
import { useEffect } from "react";
import { BookOpen, Clock, ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/landing/blog";

const Blog = () => {
  useEffect(() => {
    document.title =
      "Blog de Viajes | Tips y Guías | HereYouTravel - Agencia en Miami";
    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) canonical.setAttribute("href", "https://hereyoutravel.com/blog");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero del blog */}
      <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/landing/turquia-hero.webp"
            alt="Blog de viajes HereYouTravel"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/90 text-white text-sm font-medium rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            Blog de Viajes
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6">
            Tips para tus viajes
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Guías, consejos y recomendaciones de nuestros expertos para que
            aproveches cada destino al máximo.
          </p>
        </div>
      </div>

      {/* Grid de artículos */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-red-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.destination}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} de lectura
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 font-montserrat leading-snug">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                  {post.description}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm group/link transition-colors"
                >
                  Leer artículo
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA bottom */}
      <div className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-4">
            ¿Listo para hacer realidad tu viaje?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Nuestros expertos en Miami te ayudan a planificar el viaje de tus
            sueños con la mejor relación calidad-precio.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Cotiza tu viaje ahora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
