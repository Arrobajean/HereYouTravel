import { Send } from "lucide-react";
import { useInView } from "@/hooks/landing/useInView";
import CTAButton from "@/components/ui/cta-button";
import SectionIcon from "@/components/ui/section-icon";

const CTASection = () => {
  const [sectionRef, sectionInView] = useInView(0.3);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-300">
        {/* Placeholder para el background que el usuario agregará */}
      </div>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido centrado */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icono y título */}
          <div
            className={`flex flex-col items-center justify-center gap-4 mb-6 w-full px-4 py-2 overflow-visible transition-all ${
              sectionInView ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <SectionIcon
              icon={Send}
              className="bg-white shadow-lg"
              iconClassName="text-gray-900"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-montserrat sm:whitespace-nowrap text-center">
              ¿Listo para tu próxima aventura?
            </h2>
          </div>

          {/* Descripción */}
          <p
            className={`text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto transition-all ${
              sectionInView ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "500ms" }}
          >
            Habla con nuestros expertos en viajes y recibe atención
            personalizada para planear las vacaciones ideales en el destino de
            tus sueños.
          </p>

          {/* Botón CTA */}
          <div
            className={`transition-all ${
              sectionInView ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "700ms" }}
          >
            <CTAButton to="/contacto" showArrow uppercase>
              RESERVA TU VIAJE
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
