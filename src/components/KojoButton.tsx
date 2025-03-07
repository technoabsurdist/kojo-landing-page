import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface KojoButtonProps {
  children: ReactNode;
  variant?: "purple" | "blue" | "teal";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
}

export const KojoButton = ({
  children,
  variant = "purple",
  className,
  onClick,
  icon,
  disabled = false,
}: KojoButtonProps) => {
  const variantClass = {
    purple: "btn-kojo-purple",
    blue: "btn-kojo-blue",
    teal: "btn-kojo-teal",
  };

  return (
    <button
      className={cn(
        variantClass[variant],
        className,
        disabled ? "opacity-70 cursor-not-allowed" : ""
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
