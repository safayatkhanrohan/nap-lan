/* eslint-disable @typescript-eslint/no-unused-vars */
interface PricingHeaderProps {
     imageSrc: string;
     title: string;
     price: string;
     billingCycle?: string;
     color: string;
}

const PricingHeader = ({ imageSrc, title, price, billingCycle, color }: PricingHeaderProps) => {
     return (
          <div>
               <img src={imageSrc} alt={title} />
               <h2>{title}</h2>
               <p>{price}</p>
               {billingCycle && <p>Billing Cycle: {billingCycle}</p>}
          </div>
     );
};

export default PricingHeader;
