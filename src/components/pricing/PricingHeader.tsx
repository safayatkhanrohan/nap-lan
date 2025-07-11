interface PricingHeaderProps {
     imageSrc: string;
     title: string;
     price: string;
     billingCycle?: string;
     color: string;
}

const PricingHeader = ({ imageSrc, title, price, billingCycle, color }: PricingHeaderProps) => {
     console.log("PricingHeader rendered with color:", color);
     
     return (
          <div style={{backgroundColor: color}}>
               <img src={imageSrc} alt={title} />
               <h2>{title}</h2>
               <p>{price}</p>
               {billingCycle && <p>Billing Cycle: {billingCycle}</p>}
          </div>
     );
};

export default PricingHeader;
