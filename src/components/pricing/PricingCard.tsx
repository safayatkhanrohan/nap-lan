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
          <div>
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
