import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    privacidad: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacidad: e.target.checked }));
  };

  return (
    <div className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Formulario */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
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
                className="w-full px-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400"
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
                  className="w-full pl-20 pr-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400"
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
                className="w-full px-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400"
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
                className="w-full px-4 py-3 border-b-2 border-red-600 focus:outline-none focus:border-red-700 text-gray-900 placeholder-gray-400 resize-none"
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
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg uppercase"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


