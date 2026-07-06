import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowRight,
  Check,
  Users,
  Star,
  Heart,
  Gem,
  Phone,
} from "lucide-react";
import { experiences } from "@/data/landing/experiences";
import CTAButton from "@/components/ui/cta-button";

// Icono por tipo de experiencia
const experienceIcons: Record<string, React.ElementType> = {
  "reunificacion-familiar": Heart,
  "viajes-en-grupo": Users,
  "viajes-de-lujo": Gem,
  "bodas-punta-cana": Star,
};

const Experiences = () => {
  useEffect(() => {
    document.title =
      "Experiencias de Viaje | HereYouTravel - Agencia en Miami";
  }, []);

  const [featured, ...rest] = experiences;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero de la sección */}
      <div className="relative bg-gray-900 pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/landing/turquia-hero.webp"
            alt="Experiencias de viaje"
            className="w-full h-full object-cover opacity-35"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/90 text-white text-sm font-semibold rounded-full mb-6">
            <Star className="w-4 h-4" />
            Cuatro formas de viajar
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-montserrat mb-6 leading-tight">
            Nuestras Experiencias
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Desde reunificaciones familiares hasta bodas en el Caribe. Cada
            servicio está diseñado para que cada detalle de tu viaje esté
            resuelto.
          </p>
        </div>
      </div>

      {/* Stats rápidas */}
      <div className="bg-red-600 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            {[
              { value: "200+", label: "Familias reunidas" },
              { value: "50+", label: "Salidas grupales/año" },
              { value: "80+", label: "Bodas organizadas" },
              { value: "4.8★", label: "Valoración media" },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="text-2xl sm:text-3xl font-bold font-montserrat">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Experiencia destacada */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Destacada
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <Link
          to={`/experiencias/${featured.slug}`}
          className="group block mb-16 sm:mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
            {/* Imagen */}
            <div className="relative h-72 sm:h-80 lg:h-auto min-h-[360px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              {featured.badge && (
                <div
                  className={`absolute top-5 left-5 ${featured.badgeColor ?? "bg-red-600"} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide`}
                >
                  {featured.badge}
                </div>
              )}
            </div>

            {/* Contenido */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              {featured.destinations && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.destinations.slice(0, 4).map((d) => (
                    <span
                      key={d}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 font-montserrat">
                {featured.title}
              </h2>
              <p className="text-red-600 font-semibold mb-4 text-base">
                {featured.tagline}
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                {featured.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {featured.highlights.slice(0, 4).map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-red-600 font-bold group-hover:gap-4 transition-all duration-300">
                Conocer esta experiencia
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        </Link>

        {/* Resto de experiencias */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Todas las experiencias
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {rest.map((exp) => {
            const Icon = experienceIcons[exp.slug] ?? Star;
            return (
              <Link
                key={exp.slug}
                to={`/experiencias/${exp.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col border border-gray-100">
                  {/* Imagen */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {exp.badge && (
                      <div
                        className={`absolute top-4 left-4 ${exp.badgeColor ?? "bg-red-600"} text-white text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {exp.badge}
                      </div>
                    )}
                    {/* Stats rápidas en la imagen */}
                    {exp.stats && (
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                        {exp.stats.slice(0, 2).map((s) => (
                          <div
                            key={s.label}
                            className="bg-black/50 backdrop-blur-sm text-white rounded-lg px-2.5 py-1.5 text-center flex-1"
                          >
                            <div className="text-sm font-bold leading-none">
                              {s.value}
                            </div>
                            <div className="text-xs text-white/70 mt-0.5 leading-none">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-red-600" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 font-montserrat leading-tight">
                        {exp.title}
                      </h2>
                    </div>

                    <p className="text-xs text-red-600 font-semibold mb-3 uppercase tracking-wide">
                      {exp.tagline}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      {exp.description}
                    </p>

                    {/* Highlights compactos */}
                    <ul className="space-y-1.5 mb-5">
                      {exp.highlights.slice(0, 3).map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <Check className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Ver detalles
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Sección "¿Cómo funciona?" */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat text-center mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
            Independientemente de la experiencia que elijas, nuestro proceso es
            siempre el mismo: simple, transparente y con atención personalizada.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Nos consultas",
                desc: "Escríbenos, llámanos o usa el formulario. Sin compromiso.",
              },
              {
                num: "02",
                title: "Te hacemos una propuesta",
                desc: "En menos de 24-48h tienes una propuesta adaptada a ti.",
              },
              {
                num: "03",
                title: "Ajustamos los detalles",
                desc: "Revisamos contigo cada punto hasta que sea perfecto.",
              },
              {
                num: "04",
                title: "Viaja sin preocupaciones",
                desc: "Nos encargamos de todo. Tú solo disfrutas.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 font-montserrat">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 font-montserrat mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
          <img
            src="/assets/destinos/punta-cana.webp"
            alt="Viajes HereYouTravel"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 font-montserrat">
              ¿No sabes cuál elegir?
            </h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
              Cuéntanos qué viaje tienes en mente y te preparamos una propuesta
              sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton to="/contacto" variant="white" uppercase>
                Cotiza tu viaje ahora
              </CTAButton>
              <a
                href="tel:+17863870000"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (786) 387-0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
