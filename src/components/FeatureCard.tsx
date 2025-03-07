
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "purple" | "blue" | "teal";
}

export const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    purple: "bg-kojo-purple text-white",
    blue: "bg-kojo-blue text-kojo-dark",
    teal: "bg-kojo-teal text-kojo-dark",
  };

  return (
    <div className="feature-card">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-kojo-dark">{description}</p>
    </div>
  );
};
