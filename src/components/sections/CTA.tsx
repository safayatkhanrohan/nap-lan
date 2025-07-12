import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

const CTA = () => {
     return (
          <div className="text-white bg-[#A15BA8] max-w-7xl mx-auto px-16 rounded-4xl h-[450px] mb-20">
               <div className="flex h-full">
                    <div className="mt-18 flex-1 relative">
                         <h2 className="text-5xl font-bold leading-[130%] mb-8">
                              Ready <span className="text-[#FFAE29]">to boosts your</span> <br />{" "}
                              child's NAPLAN <br />
                              confidence?
                         </h2>
                         <div className="flex gap-1">
                              <ButtonFill btnText="Try Free Trail" />
                              <ButtonCircle />
                         </div>
                         <img src="/images/cta/icon3.png" alt="Icon 3" className="w-[120px] h-[120px] absolute -top-[60px] right-0" />
                         <img src="/images/cta/icon1.png" alt="Icon 1" className="w-auto h-[280px] absolute bottom-0 right-0 translate-x-1/4 -rotate-6" />
                         <img src="/images/cta/icon2.png" alt="Icon 2" className="w-[110px] h-[110px] absolute right-0 top-0 translate-x-[100%] rotate-12 tranlate-y-1/2" />
                    </div>
                    <div className="relative flex-1">
                              <div className="bg-[url('/images/cta/image.png')] bg-cover bg-no-repeat w-[450px] h-[530px] absolute -bottom-3 right-0 z-10"></div>
                    </div>
               </div>
          </div>
     );
};

export default CTA;
