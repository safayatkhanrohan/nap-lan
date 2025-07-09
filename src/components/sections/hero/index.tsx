import ButtonFill from "../../button/ButtonFill";
import ButtonOutline from "../../button/ButtonOutline";
import heroAnim from "../../../assets/animation/hero-anim.gif"

const Hero = () => {
     return (
          <div className="container mx-auto px-4">
               <section className="max-w-6xl h-auto md:h-[665px] mt-[50px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Section */}
                    <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1">
                         <div className="flex gap-3 items-center text-lg md:text-[20px] text-[#e6700b] font-medium">
                              <div className="border-2 w-12 md:w-16 border-[#e6700b]"></div>
                              Confident kid, better scores.
                         </div>
                         <div>
                              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight">
                                   Master <span className="text-[#ff7777]">NAPLAN</span> with
                                   confidence & ease
                              </h1>
                         </div>
                         <div>
                              <p className="text-[#222E48]/70 text-base md:text-lg lg:text-[20px] font-medium">
                                   Comprehensive practice tests and personalized learning paths for
                                   Year 3, 5, 7 & 9 students to excel in NAPLAN.
                              </p>
                         </div>
                         <div className="flex gap-3 mt-2">
                              <ButtonFill
                                   onClick={() => console.log("Button clicked!")}
                                   className="bg-blue-500 text-white rounded-full"
                                   btnText="Try Free Trial"
                                   type="button"
                              />
                              <ButtonOutline btnText="See Sample Test" className="py-1.5" />
                         </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center justify-center order-1 md:order-2 relative">
                         <div className="img-container h-[640px] w-full relative flex justify-right">
                              {/* Main Image */}
                              <img
                                   src="/images/hero-img.png"
                                   alt="Happy student learning"
                                   className="h-[90%] mx-auto relative z-10"
                              />

                              {/* Animated Background - scaled to 75% */}
                              <div className="absolute bottom-[-20px] right-0 justify-center z-0">
                                   <img
                                        src={heroAnim}
                                        alt="Animated background"
                                        className="w-[80%] h-[80%] object-contain"
                                   />
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Hero;
