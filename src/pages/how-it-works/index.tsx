import HIWCard2 from "../../components/Card/HIWCard2";
import CTA from "../../components/sections/CTA";

const HowItWorks = () => {

  const images = [
    {
      src: "/images/howitworks/page-img-1.png",
      alt: "Choose Your Year Level",
    },
    {
      src: "/images/howitworks/page-img-2.png",
      alt: "Select Your Test",
    },
    {
      src: "/images/howitworks/page-img-3.png",
      alt: "Start Practicing",
    },
    {
      src: "/images/howitworks/page-img-4.png",
      alt: "Start Practicing",
    },
  ];

  const cardData = [
    {
      heading: "Choose Your Year Level",
      description: "Dive into a wide range of practice tests covering all NAPLAN domains: Reading, Writing, Language Conventions. and Numeracy. Our interactive questions and timed simulations prepare students for the actual test environment.",
      btnCls: "bg-[#E8BE17]",
      btnText: "1",
      borderColor: ["linear-gradient(229.97deg, #FFAE29 1.28%, rgba(255, 174, 41, 0) 54.93%)", "linear-gradient(238.68deg, rgba(255, 174, 41, 0) 55.65%, #FFAE29 98.24%)"]
    },
    {
      heading: "Practice with Comprehensive Tests",
      description: "Our platform offers tailored content for Year 3, S, 7, and 9. Simply select the appropriate year level to access curriculum-aligned practice tests and resources designed specifically for your child's needs.",
      btnCls: "bg-[#8D79FF]",
      btnText: "2",
      borderColor: ["linear-gradient(229.97deg, #8D79FF 1.28%, rgba(141, 121, 255, 0) 54.93%)", "linear-gradient(238.68deg, rgba(141, 121, 255, 0) 55.65%, #8D79FF 98.24%)"]
    },
    {
      heading: "Review Performance & Learn",
      description: "Our platform offers tailored content for Year 3, S, 7, and 9. Simply select the appropriate year level to access curriculum-aligned practice tests and resources designed specifically for your child's needsReview Performance & LearnAfter each test, receive instant feedback and detailed explanations for every question- Our comprehensive analytics highlight strengths and weaknesses, allowing for focused learning and improvement in specific areas.",
      btnCls: "bg-[#A4C752]",
      btnText: "2",
      borderColor: ["linear-gradient(229.97deg, #A4C752 1.28%, rgba(164, 199, 82, 0) 54.93%)", "linear-gradient(238.68deg, rgba(164, 199, 82, 0) 55.65%, #A4C752 98.24%)"]
    },
    {
      heading: "Build Confidence & Excel",
      description: "Consistent practice and targeted learning build confidence and reduce test anxiety. With NAPLAN Prep, your child will be well-prepared to achieve their best possible results in the NAPLAN assessment.",
      btnCls: "bg-[#E6700B]",
      btnText: "4",
      borderColor: ["linear-gradient(229.97deg, #E6700B 1.28%, rgba(230, 112, 11, 0) 54.93%)", "linear-gradient(238.68deg, rgba(230, 112, 11, 0) 55.65%, #E6700B 98.24%)"]
    },

  ]
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-20">
        <div>
          <h1 className="text-5xl font-bold text-center mb-5">
            Your Path to <span className="text-[#ff7777]">NAPLAN</span> Success
          </h1>
          <p className="mx-auto text-center max-w-[615px] text-xl text-[#222E48]/70 mb-10">
            Follow these simple steps to get started with NAPLAN Prep and empower your child for their
            upcoming tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-24 mb-14">
          <div className="flex items-center h-full w-full col-span-3">
            <HIWCard2 {...cardData[0]} />
          </div>
          <div className="flex justify-end items-center col-span-2">
            <img src={images[0].src} alt={images[0].alt} className="max-h-[550px]" />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-5 gap-24 mb-14">
          <div className="flex items-center col-span-2">
            <img src={images[1].src} alt={images[1].alt} className="max-h-[550px]" />
          </div>
          <div className="flex items-center h-full w-full col-span-3">
            <HIWCard2 {...cardData[1]} />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-5 gap-24 mb-14">
          <div className="flex items-center h-full w-full col-span-3">
            <HIWCard2 {...cardData[2]} />
          </div>
          <div className="flex justify-end items-center col-span-2">
            <img src={images[2].src} alt={images[2].alt} className="max-h-[550px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-24 mb-[150px]">
          <div className="flex items-center col-span-2">
            <img src={images[3].src} alt={images[3].alt} className="max-h-[550px]" />
          </div>
          <div className="flex items-center h-full w-full col-span-3">
            <HIWCard2 {...cardData[3]} />
          </div>
        </div>

        <CTA imgSrc="bg-[url('/images/cta/image-2.png')]"/>



      </div>
    </div>
  )
}

export default HowItWorks;