
import { Check } from "lucide-react";

export const StreakCard = () => {
  const days = ["sun", "mon", "tue", "wed", "thurs"];
  
  return (
    <div className="bg-kojo-teal rounded-[30px] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
      <h3 className="text-3xl font-bold mb-6 text-black">Streak</h3>
      <div className="flex justify-between">
        {days.map((day) => (
          <div key={day} className="flex flex-col items-center">
            <div className="bg-kojo-teal border-2 border-black rounded-[18px] w-16 h-16 flex items-center justify-center mb-2">
              <Check className="text-black stroke-[3px]" size={28} />
            </div>
            <span className="text-sm font-medium">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
