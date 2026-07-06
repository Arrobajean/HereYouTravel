import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Headset,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { stats } from "@/data/landing/stats";
import CTAButton from "@/components/ui/cta-button";

const values = [
  {
    icon: ShieldCheck,
    title: "Confianza ante todo",
    description:
      "Trabajamos con proveedores verificados y precios claros. Lo que cotizamos es lo que pagas, sin sorpresas al final.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description:
      "Cada viaje lo arma una persona, no un formulario. Te asesoramos en español y adaptamos el itinerario a tu presupuesto.",
  },
  {
    icon: Headset,
    title: "Acompañamiento real",
    description:
      "No desaparecemos después de la venta: seguimos disponibles antes y durante tu viaje para resolver cualquier imprevisto.",
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    description:
      "Atendemos de lunes a viernes de 9:00 a 18:00 y sábados de 10:00 a 14:00, por teléfono, correo o WhatsApp.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Historia + imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              Sobre Nosotros
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              HereYouTravel es una agencia de viajes en Miami, Florida,
              especializada en paquetes turísticos internacionales,
              reunificación familiar y viajes a medida para la comunidad
              hispana de Estados Unidos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Empezamos ayudando a familias a reencontrarse y hoy organizamos
              viajes en grupo a destinos como Japón, Perú, Tailandia, Turquía y
              Egipto, además de bodas en Punta Cana y escapadas de lujo
              diseñadas a medida.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestra oficina está en Coral Gables, pero atendemos a viajeros
              de todo el país. Si nos cuentas qué viaje tienes en mente,
              nosotros nos encargamos del resto.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/assets/landing/agencia-de-viajes-en-miami.webp"
              alt="Agencia de viajes HereYouTravel en Miami, Florida"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-white rounded-2xl shadow-md px-6 sm:px-12 py-10 sm:py-12 mb-16 sm:mb-20">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-5xl font-bold text-red-600 mb-2 font-montserrat">
                  {stat.prefix}
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-montserrat text-center">
            Cómo trabajamos
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Lo que puedes esperar de nosotros en cada viaje, desde la primera
            cotización hasta que vuelves a casa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
                  <value.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 font-montserrat">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ubicación y contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
              Visítanos o llámanos
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  814 Ponce de Leon STE 405, Coral Gables, FL 33134, Estados
                  Unidos
                </span>
              </div>
              <a
                href="tel:+17863870000"
                className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors"
              >
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="font-semibold">+1 (786) 387-0000</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  Lunes a viernes de 9:00 a 18:00, sábados de 10:00 a 14:00
                </span>
              </div>
            </div>
            <CTAButton to="/contacto" uppercase centered={false}>
              Cotiza tu viaje ahora
            </CTAButton>
          </div>
          <div className="bg-red-600 rounded-2xl p-8 sm:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-montserrat">
              ¿Quieres conocer nuestros viajes?
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              Explora nuestras experiencias de viaje o revisa los destinos con
              salidas programadas este año.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/experiencias"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold rounded-full px-6 py-3 transition-colors"
              >
                Ver experiencias
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/destinos"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full px-6 py-3 transition-colors"
              >
                Ver destinos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
