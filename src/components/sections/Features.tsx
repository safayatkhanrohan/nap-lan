import FeatureCard from "../Card/FeatureCard";

const Features = () => {
     const features = [
          {
               title: "Feature 1",
               description: "Description of feature 1",
               iconSrc: "/images/features/icons/1.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #FFDD5D 0.63%, #FFF1C5 99.17%)",
          },
          {
               title: "Feature 2",
               description: "Description of feature 2",
               iconSrc: "/images/features/icons/2.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #126AC3 0.63%, #7EBDFE 99.17%)",
          },
          {
               title: "Feature 3",
               description: "Description of feature 3",
               iconSrc: "/images/features/icons/3.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #91C75B 0.63%, #DAFBB9 99.17%)",
          },
          {
               title: "Feature 4",
               description: "Description of feature 4",
               iconSrc: "/images/features/icons/4.png",
               bgSrc: "/images/features/bg.png",
               bgColor: "linear-gradient(287.99deg, #331B4E 0.63%, #C99DFE 99.17%)",
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
                    />
               ))}
          </div>
     );
};

export default Features;
