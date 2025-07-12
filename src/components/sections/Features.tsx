import FeatureCard from "../Card/FeatureCard";

const Features = () => {
     const features = [
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#A252AA]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Select the NAPLAN year level (3, 5, 7, or 9) <br /> relevant to your child.
                    </>
               ),
               iconSrc: "/images/features/icons/1.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #FFDD5D 0.63%, #FFF1C5 99.17%)",
               btnColor: {
                    bg: "#A15BA8",
                    hover: "#8A4D8F",
                    active: "#733F7A",
               },
          },
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#C1EE59]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Select the NAPLAN year level (3, 5, 7, or 9) <br /> relevant to your child.
                    </>
               ),
               iconSrc: "/images/features/icons/2.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #126AC3 0.63%, #7EBDFE 99.17%)",
               btnColor: {
                    bg: "#A4C752",
                    hover: "#8DAF3A",
                    active: "#7A9B2A",
               },
          },
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#EE7309]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Select the NAPLAN year level (3, 5, 7, or 9) <br /> relevant to your child.
                    </>
               ),
               iconSrc: "/images/features/icons/3.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #91C75B 0.63%, #DAFBB9 99.17%)",
               btnColor: {
                    bg: "#E6700B",
                    hover: "#C65A0A",
                    active: "#A54B08",
               },
          },
          {
               title: (
                    <>
                         One-to-one live <span className="text-[#FBD332]">customized learning</span>
                    </>
               ),
               description: (
                    <>
                         Get personalized feedback <br /> and recommendations for your child.
                    </>
               ),
               iconSrc: "/images/features/icons/4.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #331B4E 0.63%, #C99DFE 99.17%)",
               btnColor: {
                    bg: "#FFAA29E",
                    hover: "#D88A8F",
                    active: "#B76B72",
               },
          },
     ];

     return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 max-w-7xl mx-auto">
               {features.map((feature, index) => (
                    <FeatureCard
                         key={index}
                         title={feature.title}
                         description={feature.description}
                         iconSrc={feature.iconSrc}
                         bgSrc={feature.bgSrc}
                         bgColor={feature.bgColor}
                         btnColor={feature.btnColor}
                    />
               ))}
          </div>
     );
};

export default Features;
