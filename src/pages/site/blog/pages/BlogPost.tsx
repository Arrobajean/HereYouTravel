import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Lightbulb,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { blogPosts } from "@/data/landing/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog HereYouTravel`;
      const canonical = document.querySelector("link[rel='canonical']");
      if (canonical)
        canonical.setAttribute(
          "href",
          `https://hereyoutravel.com/blog/${post.slug}`
        );
    }
  }, [post]);

  // Si el slug no existe → 404
  if (!post) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero del artículo */}
      <div className="relative bg-gray-900 pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 truncate">{post.destination}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/90 text-white text-xs font-semibold rounded-full mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            {post.destination}
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-montserrat leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} de lectura
            </span>
          </div>
        </div>
      </div>

      {/* Contenido del artículo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 sm:py-16">
        {/* Botón volver */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al blog
        </Link>

        {/* Secciones del artículo */}
        <div className="prose-custom space-y-10">
          {post.content.map((section, i) => {
            if (section.type === "intro") {
              return (
                <p
                  key={i}
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed font-merriweather border-l-4 border-red-600 pl-6 py-1"
                >
                  {section.text}
                </p>
              );
            }

            if (section.type === "list") {
              return (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat mb-8">
                      {section.heading}
                    </h2>
                  )}
                  <ol className="space-y-6">
                    {section.items?.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-colors"
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-red-600 text-white font-bold text-sm flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 font-montserrat mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            }

            if (section.type === "tip") {
              return (
                <div
                  key={i}
                  className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4"
                >
                  <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    {section.heading && (
                      <h3 className="font-bold text-amber-900 font-montserrat mb-2">
                        {section.heading}
                      </h3>
                    )}
                    <p className="text-amber-800 text-sm leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                </div>
              );
            }

            if (section.type === "closing") {
              return (
                <div
                  key={i}
                  className="bg-red-600 text-white rounded-2xl p-8 text-center"
                >
                  <p className="text-lg font-medium mb-6 leading-relaxed">
                    {section.text}
                  </p>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl transition-colors shadow-lg"
                  >
                    Cotiza tu viaje ahora
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Otros artículos */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 font-montserrat mb-8">
            Otros artículos del blog
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    {related.image ? (
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                      {related.destination}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2 mt-1 group-hover:text-red-600 transition-colors">
                      {related.title}
                    </h4>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {related.readTime} de lectura
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
