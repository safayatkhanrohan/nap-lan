interface PricingHeaderProps {
     imageSrc: string;
     title: string;
     price: string;
     billingCycle?: string;
     color: string;
}

const PricingHeader = ({ imageSrc, title, price, billingCycle, color }: PricingHeaderProps) => {
     return (
          <div
               className="p-5 rounded-3xl shadow-[inset_0_-9px_18.8px_rgba(0,0,0,0.25),_inset_0_9px_14.3px_rgba(255,255,255,0.5)]"
               style={{ backgroundColor: color }}>
               <img src={imageSrc} alt={title} />
               <h2>{title}</h2>
               <p>{price}</p>
               {billingCycle && <p>Billing Cycle: {billingCycle}</p>}
          </div>
     );
};

export default PricingHeader;
