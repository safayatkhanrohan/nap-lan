interface FeatureCardProps {
     author: string;
     content: string;
     rating: number;
     authorImage: string;
}
const TestimonialCard = ({ author, content, rating, authorImage }: FeatureCardProps) => {
     return (
          <div>
               <img src={authorImage} alt={author} />
               <h3>{author}</h3>
               <p>{content}</p>
               <p>Rating: {rating}</p>
          </div>
     );
};

export default TestimonialCard;
