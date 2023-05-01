import { AiFillStar } from "react-icons/ai";
import reviewData from "./reviewData";

const ReviewMarkup = ({ data }) => {
  const { name, img, review, date } = data;
  return (
    <div className="flex items-start gap-x-8 border-b border-gray-300 pb-5">
      <img src={img} className="h-20 w-20 rounded-full" alt="reviewer image" />
      <div>
        <h4 className="text-lg text-gray-700">{name}</h4>
        <div className="flex flex-row mb-3">
          <AiFillStar className="text-[#F9AE3F]" />
          <AiFillStar className="text-[#F9AE3F]" />
          <AiFillStar className="text-[#F9AE3F]" />
          <AiFillStar className="text-[#F9AE3F]" />
        </div>
        <p className="text-gray-600 text-md font-normal mb-1">{review}</p>
        <p className="text-gray-600 text-sm font-semibold">{date}</p>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="flex flex-col gap-y-5">
      {reviewData.map((review) => (
        <ReviewMarkup data={review} key={review.id} />
      ))}
    </div>
  );
};

export default Review;
