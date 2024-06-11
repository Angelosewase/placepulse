/* eslint-disable @typescript-eslint/no-explicit-any */
const TripCard = ({ data }: { data: any }) => {
  return (
    <div className="w-full px-4 py-2 shadow-sm shadow-[#ccccccba] flex justify-start gap-4 cursor-pointer">
      <img
        src={data.images[0]}
        alt=""
        className="w-[15vh] h-[15vh] rounded-sm"
      />
      <div className="flex flex-col justify-center">
        <h1 className="font-extrabold">{data.name}</h1>
        <p className="text-sm">{data.type}</p>
      </div>
    </div>
  );
};
export default TripCard;
