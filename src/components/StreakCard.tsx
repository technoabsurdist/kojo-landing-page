
import { Check } from "lucide-react";

export const StreakCard = () => {
  const days = ["sun", "mon", "tue", "wed", "thurs"];
  
  return (
    <div className="bg-white p-3 rounded-lg border-2 border-black shadow-md">
      <div className="text-center mb-2">
        <span className="font-bold">5 Day Streak!</span>
      </div>
      <div className="flex space-x-2">
        {days.map((day, index) => (
          <div 
            key={day} 
            className="w-8 h-8 rounded-full bg-kojo-purple flex items-center justify-center border border-black"
          >
            <Check size={16} className="text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};
