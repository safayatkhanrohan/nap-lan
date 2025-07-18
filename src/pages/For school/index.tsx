import ButtonCircle from "../../components/button/ButtonCircle"
import ButtonFill from "../../components/button/ButtonFill"
import CTA from "../../components/sections/CTA"
import CurvedCard from "./_components/CurvedCard"

const ForSchool = () => {


  const data = [
    {
      title: "Bulk Licensing & Management",
      des: "Easily manage student accounts and access for entire classes or year levels with centralized control.",
      bg: "bg-[#007DFC]", 
      hoverBg: "group-hover:bg-[#007DFC]/80",
      hoverIconColor: "group-hover:text-[#007DFC]/90"
    },
    {
      title: "Teacher Dashboards & Analytics",
      des: "Gain insights into student and class performance with detailed analytics to identify areas for improvement.",
      bg: "bg-[#FF7777]",
      hoverBg: "group-hover:bg-[#FF7777]/80",
      hoverIconColor: "group-hover:text-[#FF7777]/90"
    },
    {
      title: "Curriculum Aligned Content",
      des: "Access a vast library of practice tests and questions aligned with the Australian curriculum.",
      bg: "bg-[#ABCB5F]",
      hoverBg: "group-hover:bg-[#ABCB5F]/80",
      hoverIconColor: "group-hover:text-[#ABCB5F]/90"
    },
    {
      title: "Dedicated School Support",
      des: "Receive priority support and resources tailored to the needs of educational institutions.",
      bg: "bg-[#FFA500]",
      hoverBg: "group-hover:bg-[#FFA500]/80 group-hover:bg-url('/images/for-school/hover-bg.png')",
      hoverIconColor: "group-hover:text-[#FFA500]/90"
    },
    {
      title: "Customizable Practice Tests",
      des: "Create custom practice tests to focus on specific subjects or areas where students need extra help.",
      bg: "bg-[#A558AF]",
      hoverBg: "group-hover:bg-[#A558AF]/80",
      hoverIconColor: "group-hover:text-[#A558AF]/90"
    },
    {
      title: "Secure & Compliant Platform",
      des: "Rest assured with a platform designed with student data privacy and security in mind.",
      bg: "bg-[#FFAC58]",
      hoverBg: "group-hover:bg-[#FFAC58]/80",
      hoverIconColor: "group-hover:text-[#FFAC58]/90"
    },
  ]
  return (
    <div>
      <div className="max-w-7xl mt-20 mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[150%] px-4 sm:px-8 md:px-36">
          Empower Your Students with NAPLAN Prep for Schools
        </h1>
        <p className="text-[#222E48]/70 font-medium text-base sm:text-lg md:text-xl px-4 sm:px-8 md:px-64 mt-4">
          Provide your teachers and students with a comprehensive, easy-to-use platform for NAPLAN practice and progress tracking.
        </p>

        <div className="flex justify-center items-center mt-6 sm:mt-10 gap-1 mx-auto px-4">
          <ButtonFill btnText="Request a Demo" />
          <ButtonCircle />
        </div>
      </div>

      <div className="max-w-7xl mt-12 sm:mt-16 md:mt-20 mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[150%]">
          Why Choose NAPLAN Prep for Your School?
        </h2>
        <p className="text-[#222E48]/70 font-medium text-base sm:text-lg md:text-xl mt-4">
          Discover the features that make NAPLAN Prep the ideal solution for school-wide NAPLAN readiness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-8 mb-36">
          {data.map((item, index) => (
            <CurvedCard
              key={index}
              bg={item.bg}
              title={item.title}
              des={item.des}
              hoverBg={item.hoverBg}
              hoverIconColor={item.hoverIconColor}
            />
          ))}
        </div>
      </div>


      <CTA imgSrc="bg-[url('/images/for-school/cta.png')]" />
    </div>
  )
}

export default ForSchool