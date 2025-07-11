import { cn } from "../../utils/utils";
import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

interface FeatureCardProps {
     title: string;
     description: string;
     iconSrc: string;
     bgSrc: string;
     bgColor: string;
}

const FeatureCard = ({ title, description, iconSrc, bgSrc, bgColor }: FeatureCardProps) => {
     return (
          <div
               className="relative overflow-hidden rounded-lg shadow-lg bg-cover bg-center"
               style={{ backgroundImage: `url(${bgSrc})` }}>
               <div className={cn("absolute inset-0 opacity-70 bg-cover bg-center")} style={{ background: bgColor }} />
               <div className="relative p-6">
                    <img src={iconSrc} alt={title} className="h-12 w-12 mb-4" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
               </div>
               <div className="flex gap-1">
                    <ButtonFill btnText="Chose Plan" />
                    <ButtonCircle />
               </div>
          </div>
     );
};

export default FeatureCard;
