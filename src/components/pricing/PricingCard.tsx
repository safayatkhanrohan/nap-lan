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
          <div className="rounded-[20px] shadow-[0px_4px_17px_rgba(0,0,0,0.15)] p-6 box-border">
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
                              <li key={index} className="mb-6 flex items-start gap-2">
                                   <span>
                                        <svg
                                             className="w-4 h-4 text-[#ff7777] shrink-0 mt-1"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth={2}
                                             viewBox="0 0 24 24">
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M5 13l4 4L19 7"
                                             />
                                        </svg>
                                   </span>
                                   {item}
                              </li>
                         ))}
                    </ul>
               </div>
               <div className="flex gap-0.5">
                    <ButtonFill btnText="Choose Sales" className="flex-1" />
                    <ButtonCircle />
               </div>
          </div>
     );
};

export default PricingCard;
