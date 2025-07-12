import Rating from "@mui/material/Rating";
interface FeatureCardProps {
     author: string;
     content: string;
     rating: number;
     authorImage: string;
}
const TestimonialCard = ({ author, content, rating, authorImage }: FeatureCardProps) => {
     return (
          <div className="w-[385px] h-[240px] p-6 shadow-[0px_4px_17px_rgba(0,0,0,0.15)] rounded-[20px]">
               <div className="flex items-center gap-4 mb-4">
                    <div className="w-[90px] h-[90px] rounded-full overflow-hidden">
                         <img
                              src={authorImage}
                              alt={author}
                              className="w-full h-full object-cover"
                         />
                    </div>
                    <div>
                         <h3 className="font-semibold mb-1">{author}</h3>
                         <Rating value={rating} readOnly precision={0.5} />
                    </div>
               </div>
               <p className="mt-3 text-[#222E48B2]/70">{content}</p>
          </div>
     );
};

export default TestimonialCard;
