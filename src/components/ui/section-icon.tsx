import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionIconProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}

// Variantes de animación usando Framer Motion (fuera del componente para evitar problemas de serialización)
const bounceVariants: Variants = {
  initial: {
    y: 0,
  },
  bounce: {
    y: [0, -8, -4, -6, 0],
    transition: {
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
};

const SectionIcon = ({
  icon: Icon,
  className,
  iconClassName,
  size = "md",
}: SectionIconProps) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 600);
  };

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        sizeClasses[size],
        "bg-red-600 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0 overflow-visible",
        className
      )}
      variants={bounceVariants}
      initial="initial"
      whileInView="bounce"
      viewport={{ once: true, amount: 0.3 }}
      whileTap="bounce"
      animate={isBouncing ? "bounce" : "initial"}
      style={{ willChange: "transform" }}
    >
      <Icon
        className={cn(
          !iconClassName?.includes("text-") && "text-white",
          iconSizeClasses[size],
          iconClassName
        )}
      />
    </motion.button>
  );
};

export default SectionIcon;
