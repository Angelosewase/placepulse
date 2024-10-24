/* eslint-disable @typescript-eslint/no-explicit-any */
const TripCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full p-4 shadow-lg rounded flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors duration-300 cursor-pointer hover:shadow-xl">
      {/* Image */}
      <img
        src={data.images[0]}
        alt={data.name}
        className="w-[10vh] h-[10vh] object-cover rounded shadow-sm transition-transform duration-300 hover:scale-105"
      />

      {/* Details */}
      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-bold text-gray-800">{data.name}</h1>
        <p className="text-sm text-gray-500">{data.type}</p>
      </div>
    </div>
  );
};

export default TripCard;
