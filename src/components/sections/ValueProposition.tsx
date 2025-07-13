import { easeOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

const ValueProposition = () => {
     const [ref, inView] = useInView({
          triggerOnce: true, // Only trigger once
          threshold: 0.2, // Percentage of element visible before triggering
     });

     // Animation variants
     const container = {
          hidden: { opacity: 0 },
          show: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2,
               },
          },
     };

     const item = {
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
     };

     return (
          <motion.section
               ref={ref}
               initial="hidden"
               animate={inView ? "show" : "hidden"}
               variants={container}
               className="grid grid-cols-12 max-w-[1280px] mx-auto px-6 py-12 mt-[100px] gap-8"
          >
               <motion.div
                    variants={item}
                    className="col-span-5 flex justify-center"
               >
                    <img
                         src="/images/value-img.png"
                         alt="Value Proposition"
                         className="w-full h-auto"
                    />
               </motion.div>

               <motion.div
                    variants={item}
                    className="col-span-5 flex items-center justify-end ml-4"
               >
                    <div>
                         <motion.h2
                              variants={item}
                              className="text-5xl font-bold leading-[130%] mb-4"
                         >
                              <span className="text-[#FF7777]">Reports that show</span> <br /> your
                              child's <br />
                              strengths, and more
                         </motion.h2>

                         <motion.p
                              variants={item}
                              className="text-[#222E48]/70 text-lg leading-[165%] mb-4"
                         >
                              We believe that learning should be fun, inspiring, and empowering for
                              every child
                         </motion.p>

                         <motion.ul
                              variants={container}
                              className="custom-list"
                         >
                              <motion.li variants={item}>
                                   To make learning engaging and effective through fun.
                              </motion.li>
                              <motion.li variants={item}>
                                   To become the leading platform that empowers every child to
                                   learn.
                              </motion.li>
                         </motion.ul>

                         <motion.div
                              variants={item}
                              className="flex items-center gap-1"
                         >
                              <ButtonFill btnText="Explore More" />
                              <ButtonCircle />
                         </motion.div>
                    </div>
               </motion.div>

               <motion.div
                    variants={item}
                    className="flex items-end col-span-2"
               >
                    <img
                         src="/images/value-img-2.png"
                         alt="Value Proposition 2"
                         className="w-[240px] h-auto"
                    />
               </motion.div>
          </motion.section>
     );
};

export default ValueProposition;