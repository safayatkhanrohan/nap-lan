import HIWCard from "../Card/HIWCard";

const HowItWorks = () => {
     const steps = [
          {
               id: 1,
               title: "Choose Your Year Level",
               description: "Select the NAPLAN year level (3, 5, 7, or 9) relevant to your child.",
               imageSrc: "/images/howitworks/1.png",
          },
          {
               id: 2,
               title: "Practice Tests",
               description: "Access a wide range of practice tests across all NAPLAN domains.",
               imageSrc: "/images/howitworks/2.png",
          },
          {
               id: 3,
               title: "Review & Learn",
               description: "Get instant feedback, detailed explanations, and track progress.",
               imageSrc: "/images/howitworks/3.png",
          },
          {
               id: 4,
               title: "Achieve Success",
               description: "Build confidence & improve performance for the actual NAPLAN test.",
               imageSrc: "/images/howitworks/4.png",
          },
     ];
     return (
          <div className="max-w-7xl bg-[url('/images/hiw-banner.png')] bg-cover bg-center mx-auto p-8 text-white relative">
               <h2>How it works</h2>
               <p>Find out in 5 steps</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((step) => (
                    <HIWCard title={step.title} description={step.description} imageSrc={step.imageSrc} key={step.id} />
                ))}
               </div>
                    
          </div>
     );
};

export default HowItWorks;
