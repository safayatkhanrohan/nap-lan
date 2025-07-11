import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";
import PricingHeader from "./PricingHeader";

interface PricingCardProps {
     imageSrc: string;
     title: string;
     price: string;
     color: string;
     billingCycle?: string;
     includes: string[];
     className?: string;
}
const PricingCard = ({
     imageSrc,
     title,
     price,
     billingCycle,
     includes,
     color,
}: PricingCardProps) => {
     return (
          <div className="rounded-[20px] shadow-[0px_4px_17px_rgba(0,0,0,0.15)] p-6">
               <PricingHeader
                    imageSrc={imageSrc}
                    title={title}
                    price={price}
                    billingCycle={billingCycle}
                    color={color}
               />
               <div className="mt-6 p-2">
                    <h3 className="font-semibold mb-4">Includes:</h3>
                    <ul>
                         {includes.map((item, index) => (
                              <li key={index} className="mb-6">{item}</li>
                         ))}
                    </ul>
               </div>
               <div className="flex gap-0.5">
                    <ButtonFill btnText="Choose Sales" className="flex-1"/>
                    <ButtonCircle />
               </div>
          </div>
     );
};

export default PricingCard;
