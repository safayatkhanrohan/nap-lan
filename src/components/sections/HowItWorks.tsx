import HIWCard from "../Card/HIWCard";


const HowItWorks = () => {
     const steps = [
          {
               id: 1,
               title: "Choose Your Year Level",
               description: "Select the NAPLAN year level (3, 5, 7, or 9) relevant to your child.",
               imageSrc: "/images/howitworks/1.png",
               imgBg: "bg-[#A15BA8]",
               btnCls: "bg-[#E6700B]",
               position: "mt-[185px] -ml-[30px]"
          },
          {
               id: 2,
               title: "Practice Tests",
               description: "Access a wide range of practice tests across all NAPLAN domains.",
               imageSrc: "/images/howitworks/2.png",
               imgBg: "bg-[#23D581]",
               btnVariant: "blue",
               position: "mt-[148px] -ml-[30px]"
          },
          {
               id: 3,
               title: "Review & Learn",
               description: "Get instant feedback, detailed explanations, and track progress.",
               imageSrc: "/images/howitworks/3.png",
               imgBg: "bg-[#E6700B]",
               btnVariant: "yellow",
               btnCls: "bg-[#F0C20A]",
               position: "mt-[228px] -ml-[30px]"
          },
          {
               id: 4,
               title: "Achieve Success",
               description: "Build confidence & improve performance for the actual NAPLAN test.",
               imageSrc: "/images/howitworks/4.png",
               imgBg: "bg-[#8056FF]",
               btnVariant: "red",
               btnCls: "bg-[#FF7777]",
               position: "mt-[48px] -ml-[30px]"
          },
     ];
     return (
          <div className="max-w-7xl h-[745px] mx-auto px-6 relative mb-16">
               <img
                    src="/images/hiw-banner.png"
                    alt="How It Works Banner"
                    className="h-full w-auto absolute top-0 left-36 opacity-20 -z-10"
               />
               <h2 className="text-5xl font-bold mb-5">
                    How it <span className="text-[#FF7777]">works</span>
               </h2>
               <p className="text-[#222E48]/70 mb-5">Find out in 5 steps</p>
               <div className="flex gap-8 justify-between h-full">
                    {steps.map((step) => (
                         <HIWCard
                              title={step.title}
                              description={step.description}
                              imageSrc={step.imageSrc}
                              key={step.id}
                              imgBg={step.imgBg}
                              index={step.id}
                              btnCls={step.btnCls || ""}
                              position={step.position}
                         />
                    ))}
               </div>
               <img
                    src="/images/howitworks/line.png"
                    alt="Line"
                    className="absolute bottom-0 left-0 w-full -z-5"
               />
          </div>
     );
};

export default HowItWorks;
