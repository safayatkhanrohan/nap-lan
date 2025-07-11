import ButtonCircle from "../button/ButtonCircle";
import ButtonFill from "../button/ButtonFill";

const ValueProposition = () => {
     return (
          <section className="grid grid-cols-5">
               <div className="col-span-2 flex items-center justify-center">
                    <img
                         src="/images/value-img.png"
                         alt="Value Proposition"
                         className="w-full h-auto"
                    />
               </div>
               <div className="col-span-2">
                    <h2>
                         Reports that show <br /> your child’s <br />
                         strengths, and more
                    </h2>
                    <p>
                         We believe that learning should be fun, inspiring, and empowering for every
                         child
                    </p>
                    <ul>
                         <li>To make learning engaging and effective through fun.</li>
                         <li>To become the leading platform that empowers every child to learn.</li>
                    </ul>
                    <div>
                        <ButtonFill btnText="Explore More" />
                        <ButtonCircle />
                    </div>
               </div>
               <div>
                <div>
                    <img src="/images/value-img-2.png" alt="Value Proposition 2" className="w-full h-auto" />
                </div>
               </div>
          </section>
     );
};

export default ValueProposition;
