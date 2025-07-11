import { cn } from "../../utils/utils";
import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

interface FeatureCardProps {
     title: string;
     description: string;
     iconSrc: string;
     bgSrc: string; // image path
     bgColor: string; // linear-gradient string
}

const FeatureCard = ({ title, description, iconSrc, bgSrc, bgColor }: FeatureCardProps) => {
     return (
          <div className="relative w-[628px] h-[369px] rounded-lg shadow-lg overflow-hidden">
               {/* Gradient Overlay */}
               <div className="absolute inset-0" style={{ background: bgColor, opacity: 0.84 }} />
               {/* Background Image */}
               <img
                    src={bgSrc}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
               />

               {/* Foreground Content */}
               <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div>
                         <img src={iconSrc} alt={title} className="h-12 w-12 mb-4" />
                         <h3 className="text-lg font-semibold text-white">{title}</h3>
                         <p className="text-white/90">{description}</p>
                    </div>

                    <div className="mt-4 flex gap-2">
                         <ButtonFill btnText="Choose Plan" />
                         <ButtonCircle />
                    </div>
               </div>
          </div>
     );
};

export default FeatureCard;
