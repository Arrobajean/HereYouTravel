import { useState } from "react";

export interface ContactFormData {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
  privacidad: boolean;
}

/**
 * Hook para manejar el estado y lógica del formulario de contacto
 */
export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    privacidad: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, privacidad: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // TODO: Implementar envío del formulario
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      mensaje: "",
      privacidad: false,
    });
  };

  return {
    formData,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    resetForm,
  };
};

