import { useState, useEffect } from "react";

type TabType = "destinos" | "servicios";

interface UseTabNavigationOptions {
  defaultTab?: TabType;
  onTabChange?: (tab: TabType) => void;
}

/**
 * Hook para manejar la navegación entre tabs
 */
export const useTabNavigation = ({
  defaultTab = "destinos",
  onTabChange,
}: UseTabNavigationOptions = {}) => {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);

  // Sincronizar el estado cuando cambia defaultTab desde el padre
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return {
    activeTab,
    handleTabChange,
  };
};

/**
 * Utilidad para hacer scroll suave a una sección
 */
export const scrollToSection = (sectionId: string, delay = 100) => {
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, delay);
};

