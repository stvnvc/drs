//Reusable button
import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  children,
  className,
  disabled,
  type = "button",
  ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    };

    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm gap-1.5",
        md: "px-4 py-2 text-base gap-2",
        lg: "px-6 py-3 text-lg gap-2.5",
    };

  const spinnerSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
};