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
               <div>
                    <h3>Includes:</h3>
                    <ul>
                         {includes.map((item, index) => (
                              <li key={index}>{item}</li>
                         ))}
                    </ul>
               </div>
          </div>
     );
};

export default PricingCard;
