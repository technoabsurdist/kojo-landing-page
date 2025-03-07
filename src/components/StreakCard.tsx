
import { Check } from "lucide-react";

export const StreakCard = () => {
  const days = ["sun", "mon", "tue", "wed", "thurs"];
  
  return (
    <div className="bg-kojo-teal rounded-2xl border-2 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <h3 className="text-xl font-bold mb-2 border-b-2 border-black pb-2">Streak</h3>
      <div className="flex justify-between mt-3">
        {days.map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <div className="bg-kojo-teal bg-opacity-80 w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center">
              {index !== 0 && <Check className="text-black" size={20} />}
            </div>
            <span className="text-xs font-medium mt-1">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
