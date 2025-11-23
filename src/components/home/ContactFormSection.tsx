import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactForm } from "@/hooks/landing/useContactForm";
import CTAButton from "@/components/ui/cta-button";

const ContactFormSection = () => {
  const {
    formData,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  } = useContactForm();

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100">
        {/* Placeholder para el background que el usuario agregará */}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            {/* Campo Nombre completo */}
            <div className="mb-6">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Escribe tu nombre y apellido"
                required
                className="w-full px-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Campo Teléfono */}
            <div className="mb-6">
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Teléfono *
              </label>
              <div className="relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center gap-2 pl-4">
                  <img
                    src="https://flagcdn.com/w20/es.png"
                    alt="España"
                    className="w-5 h-4 rounded-sm"
                  />
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="786 280 5607"
                  required
                  className="w-full pl-20 pr-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Campo Correo electrónico */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo electrónico"
                required
                className="w-full px-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Campo Mensaje */}
            <div className="mb-6">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Déjanos los detalles de tu mensaje"
                required
                rows={5}
                className="w-full px-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400 resize-none bg-transparent"
              />
            </div>

            {/* Checkbox Política de Privacidad */}
            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleCheckboxChange}
                  required
                  className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">
                  He leído y acepto la{" "}
                  <Link
                    to="/politica-privacidad"
                    className="text-red-600 hover:text-red-700 underline"
                  >
                    Política de Privacidad
                  </Link>
                  .
                </span>
              </label>
            </div>

            {/* Botón Submit */}
            <CTAButton
              type="submit"
              fullWidth
              uppercase
              centered={false}
            >
              SUBMIT
            </CTAButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
