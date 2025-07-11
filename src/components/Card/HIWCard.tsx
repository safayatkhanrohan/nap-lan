interface HIWCardProps {
     imageSrc: string;
     title: string;
     description: string;
}

const HIWCard = ({ imageSrc, title, description }: HIWCardProps) => {
     return (
          <div>
               <img src={imageSrc} alt={title} />
               <h3>{title}</h3>
               <p>{description}</p>
          </div>
     );
};

export default HIWCard;
