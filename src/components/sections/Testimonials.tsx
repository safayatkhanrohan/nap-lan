import TestimonialCard from "../Card/TestimonialCard";

const Testimonials = () => {
     const testimonials = [
          {
               id: 1,
               author: "Thomas Shelby",
               content: "This app has been a game changer for our family. Our baby sleeps better, and we have more time to relax.",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 2,
               author: "Arthur Shelby",
               content: "A must-have for new parents! The insights provided are invaluable.",
               rating: 4,
               authorImage: "/images/author.png",
          },
          {
               id: 3,
               author: "John Doe",
               content: "An essential tool for every parent. Highly recommend!",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 4,
               author: "Michael Gray",
               content: "This app has made a world of difference for our family. We can't thank you enough!",
               rating: 5,
               authorImage: "/images/author.png",
          },
          {
               id: 5,
               author: "Sarah Connor",
               content: "A fantastic app that has truly helped us navigate parenthood.",
               rating: 5,
               authorImage: "/images/author.png",
          },
     ];
     return (
          <div>
               <h1>What parents are saying</h1>
               {testimonials.map((testimonial) => (
                    <TestimonialCard
                         key={testimonial.id}
                         author={testimonial.author}
                         content={testimonial.content}
                         rating={testimonial.rating}
                         authorImage={testimonial.authorImage}
                    />
               ))}
          </div>
     );
};

export default Testimonials;
