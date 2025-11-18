import { useEffect, useState, useRef } from "react";

interface UseCounterOptions {
  duration?: number;
  startOnMount?: boolean;
}

export const useCounter = (
  target: number,
  options: UseCounterOptions = {}
) => {
  const { duration = 2000, startOnMount = false } = options;
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const start = () => {
    if (isCounting) return;
    
    setIsCounting(true);
    setCount(0);
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = Date.now() - (startTimeRef.current || 0);
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsCounting(false);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (startOnMount) {
      start();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { count, start, isCounting };
};

