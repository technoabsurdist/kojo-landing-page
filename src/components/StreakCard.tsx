import { Check } from "lucide-react";
export const StreakCard = () => {
  const days = ["sun", "mon", "tue", "wed", "thurs"];
  return <div className="bg-kojo-teal rounded-[25px] border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] scale-40 origin-top-right my-[200]">
      <h3 className="text-2xl font-bold mb-4 text-black">Streak</h3>
      <div className="flex justify-between gap-1">
        {days.map(day => <div key={day} className="flex flex-col items-center">
            <div className="bg-kojo-teal border-2 border-black rounded-[14px] w-11 h-11 flex items-center justify-center mb-1">
              <Check className="text-black stroke-[3px]" size={18} />
            </div>
            <span className="text-xs font-medium">{day}</span>
          </div>)}
      </div>
    </div>;
};