import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

const ValueProposition = () => {
     return (
          <section className="grid grid-cols-5 max-w-[1440px] mx-auto px-6 py-12 mt-[100px] gap-8">
               <div className="col-span-2 flex justify-center">
                    <img
                         src="/images/value-img.png"
                         alt="Value Proposition"
                         className="w-full h-auto"
                    />
               </div>
               <div className="col-span-2 flex items-center justify-end ml-4">
                    <div>
                         <h2 className="text-5xl font-bold leading-[130%] mb-4">
                              <span className="text-[#FF7777]">Reports that show</span> <br /> your
                              child’s <br />
                              strengths, and more
                         </h2>
                         <p className="text-[#222E48]/70 text-lg leading-[165%] mb-4">
                              We believe that learning should be fun, inspiring, and empowering for
                              every child
                         </p>
                         <ul className="custom-list">
                              <li>To make learning engaging and effective through fun.</li>
                              <li>
                                   To become the leading platform that empowers every child to
                                   learn.
                              </li>
                         </ul>

                         <div className="flex items-center gap-1">
                              <ButtonFill btnText="Explore More" />
                              <ButtonCircle />
                         </div>
                    </div>
               </div>
               <div className="flex items-end">
                    <img
                         src="/images/value-img-2.png"
                         alt="Value Proposition 2"
                         className="w-[240px] h-auto"
                    />
               </div>
          </section>
     );
};

export default ValueProposition;
