import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

const CTA = () => {
     return (
          <div className="text-white bg-[#A15BA8]">
               <h2>Ready to boosts your child's NAPLAN confidence?</h2>
               <div className="grid grid-cols-3">
                    <div className="col-span-2">
                         <div className="flex gap-1">
                              <ButtonFill btnText="Try Free Trail" />
                              <ButtonCircle />
                         </div>
                         <img src="/images/cta/icon1.png" alt="Icon 1" className="w-10 h-10" />
                         <img src="/images/cta/icon2.png" alt="Icon 2" className="w-10 h-10" />
                         <img src="/images/cta/icon3.png" alt="Icon 3" className="w-10 h-10" />
                         <div>
                              <img
                                   src="/images/cta/image.png"
                                   alt="A child studying"
                                   className="w-80 block mx-auto"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CTA;
