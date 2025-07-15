import ButtonCircle from "../../components/button/ButtonCircle"
import ButtonFill from "../../components/button/ButtonFill"
import CTA from "../../components/sections/CTA"

const ForSchool = () => {


  const data = [
    {
      title: "Bulk Licensing & Management",
      des: "Easily manage student accounts and access for entire classes or year levels with centralized control.",
      icon: "/images/for-school/icon-1.png",
      bg: "bg-[#007DFC]"
    },
    {
      title: "Teacher Dashboards & Analytics",
      des: "Gain insights into student and class performance with detailed analytics to identify areas for improvement.",
      icon: "/images/for-school/icon-1.png",
      bg: "bg-[#FF7777]"
    },
    {
      title: "Curriculum Aligned Content",
      des: "Access a vast library of practice tests and questions aligned with the Australian curriculum.",
      icon: "/images/for-school/icon-1.png",
      bg: "bg-[#ABCB5F]"
    },
    {
      title: "Dedicated School Support",
      des: "Receive priority support and resources tailored to the needs of educational institutions.",
      icon: "/images/for-school/icon-1.png",
      bg: "bg-[#FFA500]"
    },
    {
      title: "Customizable Practice Tests",
      des: "Create custom practice tests to focus on specific subjects or areas where students need extra help.",
      icon: "/images/for-school/icon-1.png",
      bg: "bg-[#A558AF]"
    },
    {
      title: "Secure & Compliant Platform",
      des: "Rest assured with a platform designed with student data privacy and security in mind.",
      icon: "/images/for-school/icon-1.png",
      bg: "bg-[#FFAC58]"
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

        <div className="flex justify-center items-center mt-6 sm:mt-10 gap-2 sm:gap-4 mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-8 mb-36">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md h-[330px]">
              <div className="flex flex-col justify-center items-center gap-6 h-full p-6">
                <div className={`h-[70px] w-[70px] ${item.bg} flex justify-center items-center rounded-xl shadow-[0px_-3px_4px_0px_#00000040_inset]`}>
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#222E48]">{item.title}</h3>
                <p className="text-[#222E48]/70 font-medium text-lg">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA imgSrc="bg-[url('/images/for-school/cta.png')]" />
    </div>
  )
}

export default ForSchool