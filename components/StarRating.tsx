import { StarHalf, StarIcon, StarOff } from "lucide-react";

// Star component
const Star = ({ type }: { type: string }) => {
  if (type === "full") return <StarIcon color="#ffc107" size={18} />;
  if (type === "half") return <StarHalf color="#ffc107" size={18} />;
  return <StarIcon color="#e4e5e9" size={18} />;
};

// StarRating component
export default function StarRating({ rating }: { rating: number }) {
  const stars = Array(5).fill(0);

  return (
    <div className="flex">
      {stars.map((_, index) => {
        const starValue = index + 1;
        let starType = "empty";

        if (rating >= starValue) {
          starType = "full";
        } else if (rating >= starValue - 0.5) {
          starType = "half";
        }

        return <Star key={index} type={starType} />;
      })}
    </div>
  );
}
