import PricingCard from "../pricing/PricingCard";

const Pricing = () => {
     const pricingPlans = [
          {
               id: 1,
               title: "Explorer",
               price: "Free",
               color: "#F198FA",
               imgScr: "/images/plans/explorer.png",
               includes: [
                    "Tailored for Classrooms",
                    "Teacher Dashboard",
                    "Bulk Student Accounts",
                    "Dedicated Account Manager",
               ],
          },
          {
               id: 2,
               title: "Premium Plan",
               price: "$39",
               color: "#FFAE29",
               imgScr: "/images/plans/premium.png",
               billingCycle: "Per Month",
               includes: [
                    "Access to All Year Levels",
                    "Unlimited practice tests",
                    "Advanced Analytics Insights",
                    "Priority Email Support",
                    "Exclusive Study Guides",
               ],
          },
          {
               id: 3,
               title: "Basic Plan",
               price: "$19",
               color: "#FF7777",
               billingCycle: "Per Month",
               imgScr: "/images/plans/basic.png",
               includes: [
                    "Access to 1 Year Level",
                    "5 Practice Tests/Month",
                    "Basic Performance Reports",
                    "Email Support",
               ],
          },
          {
               id: 4,
               title: "Basic Plan 2",
               price: "$19",
               color: "#FF7777",
               billingCycle: "Per Month",
               imgScr: "/images/plans/basic.png",
               includes: [
                    "Access to 1 Year Leve",
                    "5 Practice Tests/Month",
                    "Basic Performance Reports",
                    "Email Support",
               ],
          },
     ];
     return (
          <div>
               <div>
                    <h2>Simple & Transparent Pricing</h2>
                    <p>
                         Choose the plan that best fits your child's learning journey and unlock
                         their full potential for NAPLAN success.
                    </p>
               </div>
               <div>
                    {pricingPlans.map((plan) => {
                         return (
                              <PricingCard
                                   key={plan.id}
                                   color={plan.color}
                                   title={plan.title}
                                   price={plan.price}
                                   billingCycle={plan.billingCycle}
                                   includes={plan.includes}
                                   imageSrc={plan.imgScr}
                              />
                         );
                    })}
               </div>
          </div>
     );
};

export default Pricing;
