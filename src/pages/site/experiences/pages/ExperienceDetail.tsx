import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  ChevronDown,
  ChevronRight,
  MapPin,
  Quote,
  Star,
} from "lucide-react";
import { experiences, getExperienceBySlug } from "@/data/landing/experiences";
import CTAButton from "@/components/ui/cta-button";

// Accordion item para FAQs
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

const ExperienceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug ? getExperienceBySlug(slug) : undefined;

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} | HereYouTravel - Agencia de Viajes Miami`;
    }
  }, [experience]);

  if (!experience) {
    return <Navigate to="/experiencias" replace />;
  }

  const otherExperiences = experiences.filter(
    (exp) => exp.slug !== experience.slug
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[480px] md:h-[560px] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                to="/experiencias"
                className="hover:text-white transition-colors"
              >
                Experiencias
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white/90">{experience.title}</span>
            </nav>

            {experience.badge && (
              <div
                className={`inline-block ${experience.badgeColor ?? "bg-red-600"} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-4`}
              >
                {experience.badge}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-montserrat leading-tight max-w-3xl">
              {experience.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {experience.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Stats rápidas */}
      {experience.stats && (
        <div className="bg-red-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {experience.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-5 px-4 text-center text-white ${
                    i < experience.stats!.length - 1
                      ? "border-r border-red-500"
                      : ""
                  }`}
                >
                  <div className="text-2xl font-bold font-montserrat">
                    {stat.value}
                  </div>
                  <div className="text-sm text-red-100 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-14">
            {/* Descripción larga */}
            <section>
              <Link
                to="/experiencias"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Volver a experiencias
              </Link>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 font-montserrat">
                ¿En qué consiste?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5 font-merriweather border-l-4 border-red-600 pl-6">
                {experience.description}
              </p>
              {experience.longDescription && (
                <p className="text-gray-600 leading-relaxed">
                  {experience.longDescription}
                </p>
              )}

              {/* Ideal para */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
                <Star className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-900 block mb-1">
                    Ideal para:
                  </span>
                  <span className="text-amber-800 text-sm leading-relaxed">
                    {experience.idealFor}
                  </span>
                </div>
              </div>
            </section>

            {/* Destinos si aplica */}
            {experience.destinations && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                  Destinos incluidos
                </h2>
                <div className="flex flex-wrap gap-3">
                  {experience.destinations.map((d) => (
                    <div
                      key={d}
                      className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5"
                    >
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-gray-800">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Lo que nos diferencia */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Lo que nos diferencia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-gray-800 text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pasos / Cómo funciona */}
            {experience.steps && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-montserrat">
                  ¿Cómo funciona?
                </h2>
                <div className="space-y-0">
                  {experience.steps.map((step, idx) => (
                    <div key={step.number} className="flex gap-6">
                      {/* Línea vertical + número */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 font-montserrat shadow-md">
                          {step.number}
                        </div>
                        {idx < experience.steps!.length - 1 && (
                          <div className="w-0.5 bg-red-200 flex-1 my-2 min-h-[2rem]" />
                        )}
                      </div>
                      {/* Contenido */}
                      <div className={`pb-8 ${idx === experience.steps!.length - 1 ? "pb-0" : ""}`}>
                        <h3 className="font-bold text-gray-900 font-montserrat mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonio */}
            {experience.testimonial && (
              <section className="bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden shadow-sm">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-100" />
                <p className="text-gray-800 text-lg leading-relaxed italic mb-6 relative z-10">
                  "{experience.testimonial.text}"
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{
                      backgroundColor: experience.testimonial.avatarColor,
                    }}
                  >
                    {experience.testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {experience.testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {experience.testimonial.location}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* FAQs */}
            {experience.faqs && experience.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                  Preguntas frecuentes
                </h2>
                <div className="space-y-3">
                  {experience.faqs.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Otras experiencias */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                Otras experiencias
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherExperiences.map((exp) => (
                  <Link
                    key={exp.slug}
                    to={`/experiencias/${exp.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-sm mb-0.5 font-montserrat group-hover:text-red-600 transition-colors">
                        {exp.shortTitle}
                      </h3>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                        {exp.tagline}
                      </p>
                      <span className="inline-flex items-center gap-1 text-red-600 font-semibold text-xs group-hover:gap-2 transition-all">
                        Ver detalles
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:sticky lg:top-28 space-y-6">
              {/* Cabecera del sidebar */}
              <div className="text-center pb-5 border-b border-gray-100">
                <div className="inline-flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  88 reseñas verificadas en Google
                </p>
              </div>

              {/* Qué incluye */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4 font-montserrat">
                  Qué incluye nuestro servicio
                </h3>
                <ul className="space-y-3">
                  {experience.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Separador */}
              <div className="border-t border-gray-100 pt-5 space-y-3">
                <CTAButton to="/contacto" fullWidth uppercase>
                  Cotiza tu viaje ahora
                </CTAButton>
                <a
                  href="tel:+17863870000"
                  className="flex items-center justify-center gap-2 text-gray-700 hover:text-red-600 font-semibold transition-colors text-sm py-2.5 rounded-xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +1 (786) 387-0000
                </a>
                <p className="text-xs text-gray-400 text-center">
                  Atención en español · Respuesta en 24h
                </p>
              </div>

              {/* Stats del sidebar */}
              {experience.stats && (
                <div className="border-t border-gray-100 pt-5">
                  <div className="grid grid-cols-2 gap-3">
                    {experience.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-gray-50 rounded-xl p-3 text-center"
                      >
                        <div className="text-lg font-bold text-gray-900 font-montserrat leading-none">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
