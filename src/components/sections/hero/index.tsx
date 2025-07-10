import { backOut, easeInOut, motion } from "framer-motion";
import ButtonFill from "../../button/ButtonFill";
import ButtonOutline from "../../button/ButtonOutline";
import heroAnim from "../../../assets/animation/hero-anim.gif";
import ButtonCircle from "../../button/ButtonCircle";

const Hero = () => {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2,
               },
          },
     };

     const itemVariants = {
          hidden: { y: 20, opacity: 0 },
          visible: {
               y: 0,
               opacity: 1,
               transition: {
                    duration: 0.5,
               },
          },
     };

     const imageVariants = {
          hidden: { scale: 0.95, opacity: 0 },
          visible: {
               scale: 1,
               opacity: 1,
               transition: {
                    duration: 0.8,
                    ease: easeInOut,
               },
          },
     };

     const buttonVariants = {
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
               scale: 1,
               opacity: 1,
               transition: {
                    duration: 0.5,
                    ease: backOut,
               },
          },
     };

     return (
          <div className="container mx-auto px-4">
               <motion.section
                    className="max-w-7xl h-auto md:h-[665px] mt-[50px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
                    {/* Left Section */}
                    <motion.div
                         className="flex flex-col gap-4 md:gap-6 order-2 md:order-1"
                         variants={containerVariants}>
                         <motion.div
                              className="flex gap-3 items-center text-lg md:text-[20px] text-[#e6700b] font-medium"
                              variants={itemVariants}>
                              <motion.div
                                   className="border-2 w-12 md:w-16 border-[#e6700b]"
                                   initial={{ width: 0 }}
                                   animate={{ width: "4rem" }}
                                   transition={{ duration: 0.8, ease: "easeInOut" }}
                              />
                              Confident kid, better scores.
                         </motion.div>
                         <motion.div variants={itemVariants}>
                              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight">
                                   Master <span className="text-[#ff7777]">NAPLAN</span> with
                                   confidence & ease
                              </h1>
                         </motion.div>
                         <motion.div variants={itemVariants}>
                              <p className="text-[#222E48]/70 text-base md:text-lg lg:text-[20px] font-medium">
                                   Comprehensive practice tests and personalized learning paths for
                                   Year 3, 5, 7 & 9 students to excel in NAPLAN.
                              </p>
                         </motion.div>
                         <motion.div className="flex gap-2">
                              <motion.div className="flex gap-1" variants={buttonVariants}>
                                   <ButtonFill
                                        onClick={() => console.log("Button clicked!")}
                                        className="bg-blue-500 text-white rounded-full"
                                        btnText="Try Free Trial"
                                        type="button"
                                   />
                                   <ButtonCircle />
                              </motion.div>

                              <motion.div className="flex gap-1" variants={buttonVariants}>
                                   <ButtonOutline btnText="See Sample Test" className="py-1.5" />
                                   <ButtonCircle />
                              </motion.div>
                         </motion.div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                         className="flex items-center justify-center order-1 md:order-2 relative"
                         variants={imageVariants}>
                         <div className="img-container h-[640px] w-full relative flex justify-right">
                              {/* Main Image */}
                              <motion.img
                                   src="/images/hero-img.png"
                                   alt="Happy student learning"
                                   className="h-[85%] mx-auto relative z-10"
                                   variants={imageVariants}
                              />

                              {/* Animated Background - scaled to 75% */}
                              <motion.div
                                   className="absolute bottom-[-20px] left-[70px] justify-center z-0"
                                   variants={itemVariants}>
                                   <img
                                        src={heroAnim}
                                        alt="Animated background"
                                        className="w-[85%] h-[85%] object-contain"
                                   />
                              </motion.div>
                         </div>
                    </motion.div>
                    <div
                         className="absolute w-[570px] h-[570px] left-[600px] top-[230px] bg-[#2AF595] opacity-20 blur-[150px] z-100"
                         style={{
                              filter: "blur(400px)",
                         }}
                    />
               </motion.section>
          </div>
     );
};

export default Hero;