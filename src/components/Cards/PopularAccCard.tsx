/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
const PopularCard = ({ data }: { data: any }) => {
  const capitalize = (word: string) => {
    const newWord = word.split("");
    newWord[0] = newWord[0].toUpperCase();
    return newWord.join("");
  };
  const navigate = useNavigate();
  return (
    <div className="w-full px-4 py-2 cursor-pointer relative rounded-lg">
      <img
        src={data.images[0]}
        alt=""
        className="w-full h-full absolute top-0 left-0 rounded-lg z-1 object-cover"
      />
      <div className="w-full h-full px-4 pb-6 flex flex-col items-start justify-end absolute top-0 left-0 z-20 bg-[#36353518] rounded-lg">
        <h1 className="font-extrabold text-white text-xl">{data.name}</h1>
        <p className="text-sm text-white ">{"An amazing journey"}</p>
        <button
          className="w-full py-3 mt-3 rounded-md flex items-center font-medium justify-center bg-[#699BFE] text-white"
          onClick={() => navigate(`/booking/place/${data.id}`)}
        >
          Book a {capitalize(data.type)}
        </button>
      </div>
    </div>
  );
};
export default PopularCard;
