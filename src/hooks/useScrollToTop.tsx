import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenisInstance } from "./useLenis";

const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      // If Lenis is active, use its API so it properly resets its internal scroll state
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      } else {
        // Fallback for mobile (no Lenis)
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    if (hash) {
      scrollToTop();
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      scrollToTop();
    }
  }, [pathname, hash]);
};

export default useScrollToTop;
