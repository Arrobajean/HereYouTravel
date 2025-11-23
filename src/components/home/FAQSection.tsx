import { HelpCircle, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/landing/faqs";
import SectionIcon from "@/components/ui/section-icon";

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Icono y título */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center justify-center gap-4 mb-6 w-full px-4 py-2 overflow-visible">
              <SectionIcon icon={HelpCircle} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat sm:whitespace-nowrap text-center">
                Resolvemos tus dudas
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

            {/* Descripción */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Preguntas y respuestas más comunes que nos hacen nuestros clientes
              al considerar viajar con nuestra agencia de viaje en Miami.
            </p>
          </div>

          {/* Acordeón de preguntas */}
          <Accordion.Root type="single" collapsible className="space-y-0">
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
