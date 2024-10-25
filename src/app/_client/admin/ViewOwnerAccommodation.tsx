/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mantine/core";
import { FaHeart, FaLocationDot, FaRegHeart } from "react-icons/fa6";
import { HiShare } from "react-icons/hi";
import HotelImageLayout from "../../../components/Images/HotelImagesLayout";
import { WiStars } from "react-icons/wi";
import { SnakeCaseToPascalCaseSpaced } from "../../../utils/funcs/formatter";
import { useEffect, useState } from "react";
import { AuthorizedAxiosAPI } from "../../../utils/AxiosInstance";
import location_Img from "../../../assets/images/map_location.png";
import { ClipLoader } from "react-spinners";
const ViewAdminAccommodation = () => {
  const params = useParams();
  const accommodation_id = params.id ?? 0;
  const [accommodation, setAccommodation] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [rooms, SetRooms] = useState([]);
  const getHotel = async (id: string) => {
    AuthorizedAxiosAPI.get(`/accommodation/hotel/get/${id}`)
      .then((res) => {
        SetRooms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    AuthorizedAxiosAPI.get(`/accommodation/get/${accommodation_id}`)
      .then((res) => {
        setAccommodation(res.data.data[0]);
        if (res.data.data[0].type === "hotel") {
          getHotel(res.data.data[0].id);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col md:px-10 pt-10 pb-10">
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <ClipLoader color="black" size={23} />
        </div>
      ) : (
        <>
          <div className="w-full flex justify-between relative">
            <div className="w-[60%] flex flex-col gap-2 items-start">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-extrabold">
                  {accommodation.name}
                </h1>
                <Rating value={accommodation.rating} />
                <h6 className="text-sm font-medium text-[#112211d1]">
                  {accommodation.rating} Star {accommodation.type}
                </h6>
              </div>
              <div className="flex items-center gap-3 ml-3">
                <FaLocationDot color="#112211d1" />
                <h6 className="text-[#112211d1] text-sm font-medium">
                  {accommodation.location}
                </h6>
              </div>
              <div className="h-[2.5rem] flex items-center gap-3 mt-3 ml-3">
                <button className="w-[3rem] h-full rounded-sm border border-[#8DD3BB] font-bold">
                  {accommodation?.rating}
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
                  <HiShare color="black" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <HotelImageLayout
              images={accommodation?.images ?? []}
              id={accommodation_id}
            />
          </div>
          <hr className="w-full hotel_divider my-[5vh]" />
          <div className="w-full mt-5">
            <h1 className="text-xl font-extrabold mb-4">Overview</h1>
            <p className="text-sm font-semibold">{accommodation.description}</p>

            <div className="w-full flex justify-start gap-8 mt-5">
              <div className="w-[18vh] h-[14vh] bg-[#0075FF] rounded-lg  relative flex flex-col justify-end p-3 px-4">
                <button className="absolute font-extrabold text-2xl top-2 left-4 text-white flex items-center gap-2">
                  {accommodation.rating}
                </button>
                <h1 className="font-extrabold text-white">Very Good</h1>
                <h1 className="font-extralight text-white text-xs">
                  {Math.floor(Math.random() * 1000) + 1} Reviews
                </h1>
              </div>
              {accommodation.amenities[0].map((amenity: any, index: number) => {
                return (
                  <div
                      key={index}
                      className="w-[18vh] h-[14vh] border border-[#396FF9] rounded-lg  relative flex flex-col justify-end p-3"
                    >
                      <button className="absolute top-2 left-2">
                        <WiStars color="black" size={30} />
                      </button>
                      <h1 className="font-extrabold">
                        {SnakeCaseToPascalCaseSpaced(amenity)}
                      </h1>
                    </div>
                );
              })}
            </div>
          </div>
          <hr className="w-full hotel_divider my-[5vh]" />
          {accommodation?.type === "hotel" && (
            <div className="w-full mt-5">
              <h1 className="text-xl font-extrabold mb-4">Available Rooms</h1>
              <div className="w-full flex flex-col gap-4">
                {rooms?.map((roomType: any, index: number) => {
                  return (
                    <div
                    key={index}
                    className={`w-full flex justify-between items-center gap-6 p-4 bg-white rounded-lg shadow-md ${
                      index !== rooms?.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={roomType?.images[0]}
                        width={90}
                        height={90}
                        className="rounded-lg object-cover"
                        alt={roomType?.name}
                      />
                      <h1 className="font-bold text-xl text-gray-800">{roomType?.name}</h1>
                    </div>
                    <div className="flex items-center gap-8">
                      <h1 className="font-bold text-lg text-gray-700">
                        ${roomType.price}{" "}
                        <span className="text-sm text-gray-500">/night</span>
                      </h1>
                      <button
                        onClick={() => {
                          navigate(`/booking/place/${accommodation_id}`);
                        }}
                        className="px-5 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                  
                  );
                })}
              </div>
            </div>
          )}
          <div className="w-full mt-5">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-xl font-extrabold mb-4">Location/Map</h1>
              <Link
                to={`https://www.google.com/maps/place/${accommodation.location}`}
                target="_blank"
                className="px-6 py-3 rounded-sm flex items-center font-extrabold justify-center bg-[#396FF9] text-white text-sm"
              >
                View on google maps
              </Link>
            </div>
            <div className="h-[60vh] border-2 my-3 rounded-md">
              <img
                src={location_Img}
                className="w-full h-full rounded-md object-contain"
                alt=""
              />
            </div>
          </div>
          <hr className="w-full hotel_divider my-[9vh]" />
          <div className="w-full mt-5">
            <h1 className="text-xl font-extrabold mb-4">Freebies</h1>
            <div className="w-full grid md:grid-cols-6 gap-3 mt-4">
              {accommodation?.freebies &&
                accommodation?.freebies[0].map((amenity: any) => {
                  return (
                    <div
                      key={amenity}
                      className="w-full flex items-center gap-3 pl-4 shadow rounded-lg"
                    >
                      <WiStars color="black" size={30} />
                      <h1 className="font-extrabold">
                        {SnakeCaseToPascalCaseSpaced(amenity)}
                      </h1>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewAdminAccommodation;
