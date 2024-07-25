import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
const HotelImageLayout = ({ images, id }: any) => {
  const navigate = useNavigate();
  const newImages = [images[0], images[0], images[0], images[0], images[0]];
  return (
    <div
      className={`w-full grid ${newImages.length > 1 && "md:grid-cols-2"} grid-cols-1 gap-3`}
    >
      <div className="w-full h-full aspect-w-16 aspect-h-9">
        <img
          src={images[0]}
          alt=""
          className="w-full object-fill rounded-md"
        />
      </div>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-3 relative">
        {newImages.slice(1, 5).map((image: any, index: number) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
        <div className="aspect-w-1 aspect-h-1 flex items-center justify-center rounded-md">
          <button
            onClick={() => navigate(`/places/${id}/photos`)}
            className="bg-blue-700 font-semibold text-sm absolute bottom-4 right-3 py-3 px-6 text-white"
          >
            View all photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelImageLayout;
