import type React from "react";
import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

interface FeatureCardProps {
     title: React.ReactNode; // Allow HTML content in title
     description: React.ReactNode; // Allow HTML content in description
     iconSrc: string;
     bgSrc: string; // image path
     bgColor: string; // linear-gradient string
     btnColor: {
          bg: string; // background color for button
          hover: string; // hover color for button
          active: string; // active color for button
     }; //
}

const FeatureCard = ({
     title,
     description,
     iconSrc,
     bgSrc,
     bgColor,
     btnColor,
}: FeatureCardProps) => {
     const btnClass = `bg-[${btnColor.bg}] hover:bg-[${btnColor.hover}] active:bg-[${btnColor.active}] px-14`;
     return (
          <div className="relative h-[369px] rounded-[20px] shadow-lg overflow-hidden">
               {/* Gradient Overlay */}
               <div className="absolute inset-0" style={{ background: bgColor, opacity: 0.84 }} />
               {/* Background Image */}
               <img
                    src={bgSrc}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
               />

               {/* Icon */}
               <img src={iconSrc} alt={title} className="absolute bottom-0 right-0 h-[300px]" />

               {/* Foreground Content */}
               <div className="relative z-10 p-6 flex flex-col gap-4 justify-center h-full">
                    <div>
                         <h3 className="text-2xl font-bold mb-3">{title}</h3>
                         <p className="text-lg text-[#222E48]/70">{description}</p>
                    </div>

                    <div className="mt-4 flex gap-1">
                         <ButtonFill btnText="Choose Plan" className={btnClass} />
                         <ButtonCircle />
                    </div>
               </div>
          </div>
     );
};

export default FeatureCard;
