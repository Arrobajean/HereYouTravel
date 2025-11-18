import { HelpCircle, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Por qué elegir nuestra agencia para tu viaje?",
      answer:
        "Elegimos nuestra agencia porque ofrecemos experiencias personalizadas, atención al cliente excepcional y años de experiencia en la industria del turismo. Nos comprometemos a hacer que cada viaje sea único y memorable, adaptándonos a tus necesidades y presupuesto específicos.",
    },
    {
      question: "¿Qué nos diferencia de otras agencias de viajes?",
      answer:
        "Nos diferenciamos por nuestro enfoque personalizado, atención 24/7 durante todo el viaje, relaciones directas con proveedores locales que nos permiten ofrecer mejores precios, y un equipo de expertos que conoce cada destino en profundidad. Además, ofrecemos paquetes completamente personalizables.",
    },
    {
      question: "¿Ofrecen paquetes para grupos o familias?",
      answer:
        "Sí, ofrecemos paquetes especializados para grupos y familias. Podemos organizar viajes para grupos grandes con descuentos especiales, actividades adaptadas a diferentes edades, y opciones de alojamiento que se ajusten a las necesidades familiares. Contáctanos para obtener una cotización personalizada.",
    },
    {
      question: "¿Ofrecen asistencia 24/7 durante el viaje?",
      answer:
        "Absolutamente. Ofrecemos asistencia 24/7 durante todo tu viaje. Nuestro equipo está disponible en cualquier momento para ayudarte con emergencias, cambios de planes, recomendaciones locales, o cualquier consulta que puedas tener. Tu tranquilidad es nuestra prioridad.",
    },
    {
      question: "¿Puedo personalizar el viaje a mi medida?",
      answer:
        "Sí, todos nuestros paquetes son completamente personalizables. Puedes elegir destinos, duración, tipo de alojamiento, actividades, restaurantes, y más. Trabajamos contigo para crear el viaje perfecto que se ajuste a tus gustos, presupuesto y estilo de viaje.",
    },
    {
      question: "¿Cómo empiezo a planear y reservar mi viaje?",
      answer:
        "Puedes comenzar contactándonos a través de nuestro formulario de contacto, llamándonos directamente, o visitando nuestra oficina en Miami. Nuestro equipo te ayudará a definir tus preferencias, te presentará opciones personalizadas, y te guiará a través del proceso de reserva paso a paso.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Icono y título */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              Resolvemos tus dudas
            </h2>

            {/* Línea decorativa con puntos */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <div className="w-16 h-1 bg-red-600 rounded-full"></div>
            </div>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Preguntas y respuestas más comunes que nos hacen nuestros clientes
              al considerar viajar con nuestra agencia de viaje en Miami.
            </p>
          </div>

          {/* Acordeón de preguntas */}
          <Accordion.Root
            type="single"
            collapsible
            className="space-y-0"
          >
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-b-0"
              >
                <Accordion.Trigger
                  className={cn(
                    "w-full flex items-center justify-between py-6 text-left",
                    "hover:text-gray-900 transition-colors",
                    "group"
                  )}
                >
                  <span className="flex items-center gap-3 flex-1 pr-4">
                    <span className="text-lg sm:text-xl font-semibold text-gray-900 font-montserrat">
                      {index + 1}.
                    </span>
                    <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  <div className="flex-shrink-0">
                    <Plus className="w-5 h-5 text-gray-600 group-data-[state=open]:hidden transition-all" />
                    <Minus className="w-5 h-5 text-gray-600 hidden group-data-[state=open]:block transition-all" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content
                  className={cn(
                    "overflow-hidden",
                    "data-[state=closed]:animate-accordion-up",
                    "data-[state=open]:animate-accordion-down"
                  )}
                >
                  <div className="pb-6 pl-8 pr-12">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

