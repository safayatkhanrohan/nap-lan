import { ArrowUpRight } from "lucide-react";
import React from "react";
import { cn } from "../../utils/utils";

interface ButtonCircleProps {
     onClick?: () => void;
     className?: string;
}

const ButtonCircle: React.FC<ButtonCircleProps> = ({ onClick, className = "" }) => {
     return (
          <div className={cn("relative w-[46px] h-[46px] flex-none group", className)}>
               {/* Main circular button background with shadow effects */}
               <div className="absolute inset-0 rounded-full bg-[#007DFC] shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)] transition-all duration-300 group-hover:bg-[#0066cc] group-active:bg-[#0052a3] group-hover:shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.25),inset_0px_2px_4px_rgba(255,255,255,0.5)]" />

               {/* Clickable button area */}
               <button
                    onClick={onClick}
                    className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none cursor-pointer">
                    {/* Rotated arrow container */}
                    <div className="w-[21.19px] h-[21.19px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                         <ArrowUpRight
                              className="text-white w-full h-full transition-all duration-300 group-hover:text-white/90"
                              strokeWidth={2.5}
                         />
                    </div>
               </button>
          </div>
     );
};

export default ButtonCircle;
