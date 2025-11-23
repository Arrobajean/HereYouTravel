import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  icon?: LucideIcon;
  centered?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  uppercase?: boolean;
}

const CTAButton = ({
  children,
  to,
  onClick,
  variant = "primary",
  size = "md",
  showArrow = false,
  icon: Icon,
  centered = true,
  fullWidth = false,
  type = "button",
  className = "",
  uppercase = false,
}: CTAButtonProps) => {
  const baseStyles = `font-semibold rounded-full transition-colors duration-200 flex items-center justify-center gap-2 ${
    uppercase ? "uppercase" : ""
  }`;

  const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary:
      "bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900",
    white:
      "bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-300",
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-base",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
  };

  const widthStyles = fullWidth ? "w-full justify-center" : "";

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
      {showArrow && <span className="text-xl">→</span>}
    </>
  );

  const buttonElement = to ? (
    <Link to={to} className={buttonClasses}>
      {content}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );

  if (centered && !fullWidth) {
    return <div className="flex justify-center">{buttonElement}</div>;
  }

  return buttonElement;
};

export default CTAButton;
