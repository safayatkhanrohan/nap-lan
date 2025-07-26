import { easeOut, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import VideoPlayer from "../videoplayer/VideoPlayer";
import sparkleUp from "../../assets/icons/sparkle-up.png";
import sparkleDown from "../../assets/icons/sparkle-down.png";
import bookIcon from "../../assets/icons/book.png";
import schoolIcon from "../../assets/icons/school.png";
const videoSrc = "/videos/intro.mp4";

function VideoIntro() {
     const controls = useAnimation();
     const ref = useRef(null);
     const inView = useInView(ref, { once: true, margin: "-100px" });

     useEffect(() => {
          if (inView) {
               controls.start("visible");
          }
     }, [inView, controls]);

     const titleVariants = {
          hidden: { opacity: 0, y: 50 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.8,
                    ease: easeOut
               }
          }
     };

     return (
          <div className="max-w-7xl mx-auto mt-24 relative">
               <div className="absolute w-[500px] h-[500px] -left-[250px] -top-[120px] bg-[#2AF595] opacity-30 blur-[200px] -z-10" />
               <div className="absolute w-[500px] h-[500px] -right-[250px] -bottom-[250px] bg-[#e6700b] opacity-15 blur-[200px] -z-10" />

               {/* Animated Title */}
               <motion.h2
                    ref={ref}
                    variants={titleVariants}
                    initial="hidden"
                    animate={controls}
                    className="text-center text-4xl md:text-5xl font-bold mb-20 leading-tight"
               >
                    Boost Your Child's <br />
                    <span className="text-[#ff7777]">NAPLAN</span> Performance
               </motion.h2>

               <div className="relative mx-auto w-full px-0 md:px-2">
                    <div className="w-full lg:w-[calc(100%-220px)] mx-auto">
                         <VideoPlayer videoSrc={videoSrc} />
                    </div>

                    {/* Sparkle Up - Hidden on mobile */}
                    <div className="absolute -left-20 lg:left-8 top-0 -translate-y-2/3 -z-10 hidden md:block">
                         <img src={sparkleUp} alt="Sparkle Up" className="w-32 h-32" />
                    </div>
                    {/* Sparkle Down - Hidden on mobile */}
                    <div className="absolute -right-20 lg:right-8 bottom-0 translate-y-2/3 -z-10 hidden md:block">
                         <img src={sparkleDown} alt="Sparkle Down" className="w-32 h-32" />
                    </div>

                    {/* 210K Card - Hidden on mobile */}
                    <div className="w-[220px] h-[100px] rounded-[20px] hidden lg:flex justify-center items-center flex-col absolute shadow-2xl top-[15%] right-0 bg-white z-10">
                         <div
                              className="absolute top-1 left-2 -translate-1/2 w-14 h-14 bg-[#ffa558] flex justify-center items-center shadow-md rounded-full"
                              style={{ filter: "drop-shadow(0px 4px 33.5px rgba(4, 65, 36, 0.15))" }}
                         >
                              <img src={bookIcon} alt="Book Icon" className="w-10 h-10" />
                         </div>
                         <div className="flex flex-col justify-center">
                              <span className="text-2xl font-bold text-[#1aa246]">210K</span>
                              <span className="font-medium">Different Subjects</span>
                         </div>
                    </div>
                    {/* 150K Card - Hidden on mobile */}
                    <div className="w-[270px] h-[100px] rounded-[20px] hidden lg:flex justify-center items-center flex-col shadow-2xl absolute bottom-[17%] left-0 bg-white z-10">
                         <div className="relative h-full w-full flex items-center gap-4 justify-center">
                              <div
                                   className="w-[60px] h-[60px] bg-[#D9F49B] shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.5)] rounded-[8px] flex justify-center items-center"
                              >
                                   <img src={schoolIcon} alt="School Icon" className="w-10 h-10" />
                              </div>
                              <div className="flex flex-col justify-center">
                                   <span className="text-2xl text-[#e0b80b] font-bold">150K</span>
                                   <span className="font-medium">Experienced Tutor</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default VideoIntro;
