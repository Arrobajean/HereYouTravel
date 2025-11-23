import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    // Solo inicializar Lenis en escritorio (pantallas >= 768px)
    const checkDesktop = () => window.innerWidth >= 768;
    const isDesktop = checkDesktop();

    if (!isDesktop) {
      return;
    }

    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Desactivar en móvil
      touchMultiplier: 2,
      infinite: false,
    });

    // Agregar clase al HTML
    document.documentElement.classList.add("lenis", "lenis-smooth");

    // Función de animación
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpiar al desmontar
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);
};

