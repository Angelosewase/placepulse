import { useNavigate, useParams } from "react-router-dom";
import { accommodations_data } from "../../constants/dummy";
import { Rating } from "@mantine/core";
import { FaHeart, FaLocationDot, FaRegHeart } from "react-icons/fa6";
import { HiShare } from "react-icons/hi";
import HotelImageLayout from "../Images/HotelImagesLayout";
import { WiStars } from "react-icons/wi";
import { SnakeCaseToPascalCaseSpaced } from "../../utils/funcs/formatter";

const ViewAccommodation = ()=>{
    const params = useParams();
    const accommodation_id = params.id ?? 0
    const accommodation = accommodations_data[Number(accommodation_id)];
    const navigate = useNavigate();
    return(
        <div className="w-full flex flex-col md:px-10 pt-10 pb-[50vh]">
            <div className="w-full flex justify-between relative">
                <div className="w-[60%] flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-6">
                        <h1 className="text-2xl font-extrabold">{accommodation.name}</h1>
                        <Rating value={accommodation.rating} />
                        <h6 className="text-sm font-medium text-[#112211d1]">
                            {accommodation.rating} Star {accommodation.type}
                        </h6>
                    </div>
                    <div className="flex items-center gap-3 ml-3">
                      <FaLocationDot color="#112211d1" />
                      <h6 className="text-[#112211d1] text-sm font-medium">
                        {accommodation.location.text}
                      </h6>
                    </div>
                    <div className="h-[2.5rem] flex items-center gap-3 mt-3 ml-3">
                      <button className="w-[3rem] h-full rounded-sm border border-[#8DD3BB] font-bold">
                        {accommodation.rating}
                      </button>
                      <h5 className="text-sm font-extrabold">Very Good</h5>
                      <p className="text-sm font-semibold">
                        {Math.floor(Math.random() * 1000) + 1} Reviews
                      </p>
                    </div>
                </div>

                <div className="absolute right-0 top-0">
                      <h1 className="text-xl text-[#396FF9] font-extrabold text-right">
                        {accommodation.price} <span className="text-sm">/night</span>
                      </h1>
                      <div className="flex w-full justify-between items-center gap-3 mt-4">
                        <button className="w-[4rem] h-[3rem] flex items-center justify-center rounded-sm border border-[#8DD3BB] font-bold">
                            {accommodation.liked ? (
                            <FaHeart color="black" />
                            ) : (
                            <FaRegHeart color="black" />
                            )}
                        </button>
                        <button className="w-[4rem] h-[3rem] flex items-center justify-center rounded-sm border border-[#8DD3BB] font-bold">
                            <HiShare color="black" size={20}/>
                        </button>
                        <button onClick={()=>{navigate(`/booking/place/${accommodation_id}`)}} className="px-6 py-3 rounded-sm flex items-center font-extrabold justify-center bg-[#699bfe52]">
                            Book Now
                        </button>
                      </div>
                </div>
            </div>
            <div className="w-full mt-5">
                <HotelImageLayout images={accommodation.images}/>
            </div>
            <hr className="w-full hotel_divider my-[5vh]"/>
            <div className="w-full mt-5">
                <h1 className="text-xl font-extrabold mb-4">Overview</h1>
                <p className="text-sm font-semibold">{accommodation.overview}</p>

                <div className="w-full flex justify-start gap-8 mt-5">
                        <div className="w-[30vh] h-[25vh] bg-[#0075FF] rounded-lg relative flex flex-col justify-end p-3 px-4">
                            <button className="absolute font-extrabold text-2xl top-2 left-4 text-white">
                                {accommodation.rating}
                            </button>
                            <h1 className="font-extrabold text-white">Very Good</h1>
                            <h1 className="font-extralight text-white text-xs">
                        {Math.floor(Math.random() * 1000) + 1} Reviews
                      </h1>
                        </div>
                    {accommodation.amenities.map((amenity, index)=>{
                        return(
                            <div key={index} className="w-[28vh] h-[25vh] border border-[#396FF9] rounded-lg relative flex flex-col justify-end p-3">
                                <button className="absolute top-2 left-2">
                                    <WiStars color="black" size={30}/> 
                                </button>
                                <h1 className="font-extrabold">{SnakeCaseToPascalCaseSpaced(amenity)}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ViewAccommodation;