import React from "react";

interface ButtonFillProps {
     onClick?: () => void;
     className?: string;
     disabled?: boolean;
     type?: "button" | "submit" | "reset";
     btnText?: string;
}

const ButtonFill: React.FC<ButtonFillProps> = ({
     onClick,
     className = "",
     disabled = false,
     type = "button",
     btnText,
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               disabled={disabled}
               className={`
        relative 
 
        rounded-[1000px]
        py-2.5
        px-[36px]
        bg-[#007DFC] 
        shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)]
        transition-all 
        duration-300 
        hover:bg-[#0066cc] 
        active:bg-[#0052a3] 
        hover:shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.25),inset_0px_2px_4px_rgba(255,255,255,0.5)]
        focus:outline-none
        flex 
        items-center 
        justify-center
        ${className}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}>
               {btnText && <span className="text-white font-medium">{btnText}</span>}
          </button>
     );
};

export default ButtonFill;
