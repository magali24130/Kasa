import greyStar from "../../Assets/grey_star.png";
import redStar from "../../Assets/red_star.png";

export default function Rating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <img
            key={index}
            src={ratingValue <= rating ? redStar : greyStar}
            alt="star"
          />
        );
      })}
    </div>
  );
}
