/* eslint-disable @typescript-eslint/no-explicit-any */
const HotelImageLayout = ({ images }: any) => {
 
    return (
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3">
        <div className="w-full h-full aspect-w-16 aspect-h-9">
          <img src={images[0]} alt="" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-3 relative">
          {images.slice(1, 5).map((image: any, index: number) => (
            <div key={index} className="aspect-w-1 aspect-h-1">
              <img src={image} alt="" className="w-full h-full object-cover rounded-md" />
            </div>
          ))}
            {/* <div className="aspect-w-1 aspect-h-1 flex items-center justify-center rounded-md"> */}
            <button className="bg-blue-700 font-semibold text-sm absolute bottom-4 right-3 py-3 px-6 text-white">
              View all photos
            </button>
          {/* </div>     */}
        </div>
      </div>
    );
  };
  
  export default HotelImageLayout;
  