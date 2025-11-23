import { useState, useEffect } from "react";

interface UseCarouselOptions {
  totalItems: number;
  initialIndex?: number;
}

interface UseCarouselReturn {
  currentIndex: number;
  cardsPerView: number;
  maxIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  goToIndex: (index: number) => void;
}

/**
 * Hook para manejar la lógica de un carrusel responsivo
 * @param options - Opciones del carrusel
 * @returns Objeto con estado y funciones de control del carrusel
 */
export const useCarousel = ({
  totalItems,
  initialIndex = 0,
}: UseCarouselOptions): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Detectar el número de cards por vista según el tamaño de pantalla
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // lg: 3 cards
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2); // sm: 2 cards
      } else {
        setCardsPerView(1); // mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, totalItems - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  return {
    currentIndex,
    cardsPerView,
    maxIndex,
    handlePrev,
    handleNext,
    goToIndex,
  };
};

