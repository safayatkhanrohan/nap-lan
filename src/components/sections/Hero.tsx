import { backOut, easeInOut, motion } from "framer-motion";
import ButtonFill from "../button/ButtonFill";
import ButtonOutline from "../button/ButtonOutline";
import ButtonCircle from "../button/ButtonCircle";
// import heroAnim from "../../assets/animation/hero-anim2.webp";

const Hero = () => {
     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.2,
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
          hidden: { scale: 0.9, opacity: 0, rotate: 2 },
          visible: {
               scale: 1,
               opacity: 1,
               rotate: 0,
               transition: {
                    duration: 1,
                    ease: easeInOut,
                    stiffness: 80,
               },
          },
     };

     const buttonVariants = {
          hidden: { scale: 0.7, opacity: 0 },
          visible: {
               scale: 1,
               opacity: 1,
               transition: {
                    duration: 0.6,
                    ease: backOut,
                    stiffness: 100,
               },
          },
     };

     return (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <motion.section
                    className="max-w-7xl h-auto min-h-[600px] mt-8 sm:mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}>
                    {/* Left Section */}
                    <motion.div
                         className="flex flex-col gap-4 sm:gap-6 order-2 md:order-1 relative z-10 px-2 sm:px-4"
                         variants={containerVariants}>
                         <motion.div
                              className="flex gap-3 items-center text-base sm:text-lg md:text-xl text-[#e6700b] font-medium"
                              variants={itemVariants}>
                              <motion.div
                                   className="border-2 w-10 sm:w-12 md:w-16 border-[#e6700b]"
                                   initial={{ width: 0 }}
                                   animate={{ width: ["2.5rem", "3rem", "4rem"] }}
                                   transition={{
                                        duration: 0.8,
                                        ease: "easeInOut",
                                        times: [0, 0.5, 1],
                                   }}
                              />
                              Confident kid, better scores.
                         </motion.div>

                         <motion.div variants={itemVariants} className="relative">
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                   Master <span className="text-[#ff7777]">NAPLAN</span> with
                                   confidence & ease
                              </h1>
                              <img
                                   src="/images/hero-icon-5.png"
                                   alt="Hero Icon"
                                   className="absolute -top-12 sm:-top-14 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rotate-15 hidden sm:block"
                              />
                         </motion.div>

                         <motion.div variants={itemVariants}>
                              <p className="text-[#222E48]/70 text-sm sm:text-base md:text-lg font-medium">
                                   Comprehensive practice tests and personalized learning paths for
                                   Year 3, 5, 7 & 9 students to excel in NAPLAN.
                              </p>
                         </motion.div>

                         <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                              <motion.div className="flex gap-2" variants={buttonVariants}>
                                   <ButtonFill
                                        onClick={() => console.log("Button clicked!")}
                                        className="bg-blue-500 text-white rounded-full text-sm sm:text-base px-4 sm:px-6 py-2"
                                        btnText="Try Free Trial"
                                        type="button"
                                   />
                                   <ButtonCircle />
                              </motion.div>

                              <motion.div className="flex gap-2" variants={buttonVariants}>
                                   <ButtonOutline
                                        btnText="See Sample Test"
                                        className="py-1.5 text-sm sm:text-base px-4 sm:px-6"
                                   />
                                   <ButtonCircle />
                              </motion.div>
                         </motion.div>

                         <img
                              src="/images/hero-icon-6.png"
                              alt="Hero Icon"
                              className="absolute w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 -right-12 sm:-right-16 md:-right-20 -bottom-24 sm:-bottom-32 md:-bottom-40 hidden md:block"
                         />
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                         className="flex items-center justify-center md:justify-end order-1 md:order-2 relative"
                         variants={imageVariants}>
                         <div className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[480px] h-[480px] sm:h-[560px] md:h-[640px] relative">
                              <img
                                   src="/images/hero-img.webp"
                                   alt="Happy student learning"
                                   className="h-full w-full object-cover rounded-lg"
                              />
                              <img
                                   src="https://res.cloudinary.com/dghzuk2uk/image/upload/v1752362661/br-uploads/klo5hvdnj4kfccwqhkxo.webp"
                                   alt="Animated background"
                                   className="absolute w-full -bottom-16 sm:-bottom-20 md:-bottom-[82px] -z-5"
                              />
                              <div className="absolute flex items-center gap-3 sm:gap-4 w-[200px] sm:w-[230px] h-[100px] sm:h-[110px] right-0 top-[160px] sm:top-[180px] md:top-[200px] translate-x-1/3 sm:translate-x-1/2 rounded-[20px] bg-white shadow-[16px_26px_41px_rgba(4,65,36,0.1)] p-4 sm:p-6">
                                   <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#F7AEFF] rounded-lg shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)] flex items-center justify-center">
                                        <img
                                             src="/images/hero-icon-1.png"
                                             alt="Hero Icon"
                                             className="w-8 sm:w-12 h-8 sm:h-12"
                                        />
                                   </div>
                                   <div>
                                        <span className="text-2xl sm:text-3xl text-[#E0B50B] font-bold">
                                             250K{" "}
                                        </span>
                                        <br /> Practice tests
                                   </div>
                              </div>

                              <div className="absolute flex items-center gap-3 sm:gap-4 w-[200px] sm:w-[230px] h-[100px] sm:h-[110px] -left-8 sm:-left-10 bottom-0 translate-y-3 rounded-[20px] bg-white shadow-[16px_26px_41px_rgba(4,65,36,0.1)]">
                                   <div className="relative w-full h-full p-4 sm:p-6">
                                        <div className="absolute w-10 sm:w-14 h-10 sm:h-14 top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-[#FFA558] shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)] rounded-full flex items-center justify-center">
                                             <img
                                                  src="/images/hero-icon-4.png"
                                                  alt="Hero Icon"
                                                  className="w-5 sm:w-7 h-5 sm:h-7"
                                             />
                                        </div>
                                        <div className="ml-6 sm:ml-8">
                                             <span className="text-2xl sm:text-3xl text-[#1AA249] font-bold">
                                                  150K
                                             </span>
                                             <br /> Active students
                                        </div>
                                   </div>
                              </div>

                              <div className="absolute w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full left-1/2 translate-x-1/2 -bottom-10 sm:-bottom-14 flex items-center justify-center shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)]">
                                   <img
                                        src="/images/hero-icon-2.png"
                                        alt="Hero Icon"
                                        className="w-10 sm:w-12"
                                   />
                              </div>

                              <img
                                   src="/images/hero-icon-3.png"
                                   alt="Hero Icon"
                                   className="absolute w-16 sm:w-20 h-16 sm:h-20 right-0 top-14 sm:top-18 rotate-15"
                              />
                         </div>
                    </motion.div>

                    <div
                         className="absolute w-[400px] sm:w-[500px] md:w-[570px] h-[400px] sm:h-[500px] md:h-[570px] left-[50%] md:left-[600px] top-[180px] sm:top-[200px] md:top-[230px] bg-[#2AF595] opacity-10 sm:opacity-20 blur-[120px] md:blur-[150px]"
                         style={{
                              filter: "blur(300px) sm:blur(350px) md:blur(400px)",
                         }}
                    />
               </motion.section>
          </div>
     );
};

export default Hero;
