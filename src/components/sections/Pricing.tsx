import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
          <div className="max-w-[1280px] mx-auto px-4 py-12 mt-6 pb-[100px]">
               <div>
                    <h2 className="text-5xl font-bold text-center mb-4">
                         Simple & <span className="text-[#FF7777]">Transparent</span> Pricing
                    </h2>
                    <p className="text-center text-lg leading-[165%] text-[#222E48]/70 mb-8">
                         Choose the plan that best fits your child's learning journey and <br />{" "}
                         unlock their full potential for NAPLAN success.
                    </p>
               </div>

               <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                         640: { slidesPerView: 1 },
                         768: { slidesPerView: 2 },
                         1024: { slidesPerView: 3 },
                    }}>
                    {pricingPlans.map((plan) => (
                         <SwiperSlide key={plan.id}>
                              <div className="max-w-[95%] mx-auto">
                                   <PricingCard
                                        color={plan.color}
                                        title={plan.title}
                                        price={plan.price}
                                        billingCycle={plan.billingCycle}
                                        includes={plan.includes}
                                        imageSrc={plan.imgScr}
                                   />
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </div>
     );
};

export default Pricing;
