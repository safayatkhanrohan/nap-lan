import { backOut, easeInOut, motion } from "framer-motion";
import CountUp from 'react-countup';
import ButtonFill from "../button/ButtonFill";
import ButtonOutline from "../button/ButtonOutline";
import ButtonCircle from "../button/ButtonCircle";
const animBgsrc = "https://res.cloudinary.com/dghzuk2uk/image/upload/v1752362661/br-Uploads/klo5hvdnj4kfccwqhkxo.webp";

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
          <motion.section
               className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center py-6 sm:py-8 md:py-12 mt-20"
               initial="hidden"
               animate="visible"
               variants={containerVariants}
          >
               {/* Left Section */}
               <motion.div
                    className="flex flex-col gap-4 sm:gap-6 md:gap-8 order-2 md:order-1 relative z-10 px-2 sm:px-4 mt-18 md:mt-0"
                    variants={containerVariants}
               >
                    <motion.div
                         className="flex gap-2 sm:gap-3 items-center text-sm sm:text-base md:text-lg lg:text-xl text-[#e6700b] font-medium"
                         variants={itemVariants}
                    >
                         <motion.div
                              className="border-2 w-8 sm:w-10 md:w-12 lg:w-16 border-[#e6700b]"
                              initial={{ width: 0 }}
                              animate={{ width: ["2rem", "2.5rem", "3rem", "4rem"] }}
                              transition={{
                                   duration: 0.8,
                                   ease: "easeInOut",
                                   times: [0, 0.33, 0.66, 1],
                              }}
                         />
                         Confident kid, better scores.
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                              Master <span className="text-[#ff7777]">NAPLAN</span> with
                              confidence & ease
                         </h1>
                         <img
                              src="/images/hero-icon-5.png"
                              alt="Hero Icon"
                              className="absolute -top-8 sm:-top-10 md:-top-12 lg:-top-14 right-3 sm:right-4 md:right-5 w-auto h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 rotate-15 hidden sm:block"
                         />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                         <p className="text-[#222E48]/70 text-sm md:text-base lg:text-lg font-medium">
                              Comprehensive practice tests and personalized learning paths for
                              Year 3, 5, 7 & 9 students to excel in NAPLAN.
                         </p>
                    </motion.div>

                    <motion.div className="flex flex-wrap gap-4">
                         <motion.div className="flex gap-1" variants={buttonVariants}>
                              <ButtonFill
                                   onClick={() => console.log("Button clicked!")}
                                   className="bg-blue-500 text-white rounded-full text-sm md:text-base px-6 py-1.5 sm:py-2 text-nowrap"
                                   btnText="Try Free Trial"
                                   type="button"
                              />
                              <ButtonCircle />
                         </motion.div>

                         <motion.div className="flex gap-1" variants={buttonVariants}>
                              <ButtonOutline
                                   btnText="See Sample Test"
                                   className="py-1 sm:py-1.5 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6"
                              />
                              <ButtonCircle />
                         </motion.div>
                    </motion.div>

                    <img
                         src="/images/hero-icon-6.png"
                         alt="Hero Icon"
                         className="absolute w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 h-24 sm:h-28 md:h-32 lg:h-40 xl:h-48 -right-8 sm:-right-10 md:-right-12 lg:-right-16 xl:-right-20 -bottom-20 sm:-bottom-24 md:-bottom-28 lg:-bottom-32 xl:-bottom-40 hidden md:block"
                    />
               </motion.div>

               {/* Right Section */}
               <motion.div
                    className="flex items-center justify-center md:justify-end order-1 md:order-2 relative border"
                    variants={imageVariants}
               >
                    <div className="w-full max-w-[630px] relative flex justify-center items-center border">
                         <img
                              src="/images/hero-img.webp"
                              alt="Happy student learning"
                              className="w-full object-contain -mt-24 z-1 -ml-10"
                         />
                         <img
                              src={animBgsrc}
                              alt="Animated background"
                              className="w-3/4 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/6 z-0 -ml-4"
                         />
                         {/* First Card */}
                         <div className="absolute top-[5%] right-0 sm:right-2 md:right-0 sm:top-[20%] md:top-[8%] lg:top-[18%] xl:top-[18%] flex items-center gap-1.5 sm:gap-4 md:gap-1.5 lg:gap-4 w-[140px] sm:w-[200px] md:w-[140px] lg:w-[180px] xl:w-[220px] h-[65px] sm:h-[90px] md:h-[70px] lg:h-[90px] xl:h-[100px] rounded-2xl bg-white shadow-[8px_12px_20px_rgba(4,65,36,0.1)] p-2 sm:p-4 md:p-2 lg:p-3 z-10 xl:p-4">
                              <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-14 xl:h-14 bg-[#F7AEFF] rounded-lg shadow-[inset_0px_-3px_3px_rgba(0,0,0,0.2),inset_0px_3px_3px_rgba(255,255,255,0.4)] flex items-center justify-center">
                                   <img
                                        src="/images/hero-icon-1.png"
                                        alt="Hero Icon"
                                        className="w-5 h-5 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-10 xl:h-10"
                                   />
                              </div>
                              <div className="text-nowrap">
                                   <span className="text-base sm:text-lg md:text-base lg:text-xl xl:text-3xl text-[#E0B50B] font-bold block">
                                        <CountUp end={250} duration={3} suffix="K" />
                                   </span>
                                   <span className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg relative block">Practice tests</span>
                              </div>
                         </div>

                         {/* Second Card */}
                         <div className="absolute -bottom-[7%] left-2 -sm:bottom-[6%] sm:left-[12%] md:left-[8%] xl:left-[8%] flex items-center w-[130px] sm:w-[165px] md:w-[120px] lg:w-[170px] xl:w-[200px] h-[65px] sm:h-[90px] md:h-[70px] lg:h-[90px] rounded-2xl bg-white shadow-[8px_12px_20px_rgba(4,65,36,0.1)] z-10">
                              <div className="relative w-full h-full p-3 sm:p-4 md:p-3">
                                   <div className="absolute w-7 h-7 sm:w-12 sm:h-12 md:w-7 md:h-7 lg:w-12 lg:h-12 top-0 left-0 -translate-x-1/3 -translate-y-1/3 bg-[#FFA558] shadow-[inset_0px_-3px_3px_rgba(0,0,0,0.2),inset_0px_0px_3px_rgba(255,255,255,0.4)] rounded-full flex items-center justify-center">
                                        <img
                                             src="/images/hero-icon-4.png"
                                             alt="Hero Icon"
                                             className="w-3 sm:w-6 md:w-3 lg:w-7 h-3 sm:h-6 md:h-3 lg:h-7"
                                        />
                                   </div>
                                   <div className="ml-0 sm:ml-4 md:ml-0 lg:ml-6 xl-ml-8 text-nowrap h-full flex flex-col justify-center">
                                        <span className="text-base sm:text-lg md:text-base lg:text-xl xl:text-3xl text-[#1AA249] font-bold block">
                                             <CountUp end={150} duration={3} suffix="K" />
                                        </span>
                                        <span className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg block">Active students</span>
                                   </div>
                              </div>
                         </div>

                         <div className="absolute w-12 sm:w-14 md:w-12 lg:w-16 xl:w-20 h-12 sm:h-14 md:h-12 lg:h-16 xl:h-20 bg-white rounded-full left-1/2  -bottom-8 sm:-bottom-10 md:-bottom-8 lg:-bottom-11 flex items-center justify-center shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)] z-1">
                              <img
                                   src="/images/hero-icon-2.png"
                                   alt="Hero Icon"
                                   className="w-8 sm:w-10 md:w-8 lg:w-12"
                              />
                         </div>

                         {/* <img
                              src="/images/hero-icon-3.png"
                              alt="Hero Icon"
                              className="absolute w-12 sm:w-14 md:w-16 lg:w-20 h-12 sm:h-14 md:h-16 lg:h-20 right-0 top-10 sm:top-12 md:top-14 lg:top-16 xl:top-18 rotate-15"
                         /> */}
                    </div>
                    <div
                         className="absolute w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] left-0 top-0 -z-10 bg-[#2AF595] opacity-10 sm:opacity-15 md:opacity-20 blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] xl:blur-[180px]"
                    />
               </motion.div>
          </motion.section>
     );
};

export default Hero;