/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

const PopularCard = ({ data }: { data: any }) => {
  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
  const navigate = useNavigate();
  
  return (
    <div className="w-full   relative rounded overflow-hidden group cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <img
        src={data.images[0]}
        alt={data.name}
        className="w-full h-full object-cover rounded-xl group-hover:brightness-75 transition duration-300"
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col space-y-2">
        <h1 className="text-2xl font-bold text-white">{data.name}</h1>
        <p className="text-sm text-gray-300">An amazing journey</p>
        
        <button
          className="w-full py-2 mt-3 rounded-md flex items-center justify-center bg-[#699BFE] text-white font-semibold transition-colors duration-300 hover:bg-blue-500"
          onClick={() => navigate(`/booking/place/${data.id}`)}
        >
          Book a {capitalize(data.type)}
        </button>
      </div>
    </div>
  );
};

export default PopularCard;
