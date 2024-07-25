/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mantine/core";
import { FaHeart, FaLocationDot, FaRegHeart } from "react-icons/fa6";
import HotelImageLayout from "../Images/HotelImagesLayout";
import { WiStars } from "react-icons/wi";
import { SnakeCaseToPascalCaseSpaced } from "../../utils/funcs/formatter";
import { AxiosAPI } from "../../utils/AxiosInstance";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import location_Img from "../../assets/images/map_location.png";
import { Helmet } from "react-helmet";
import ShareButton from "../buttons/ShareButton";

const ViewAccommodation = () => {
  const params = useParams();
  const accommodation_id = params.id ?? 0;
  const [loading, setLoading] = useState(true);
  const [accommodation, setAccommodation] = useState<any>();

  useEffect(() => {
    setLoading(true);
    AxiosAPI.get(`/accommodation/get/${accommodation_id}`)
      .then((res) => {
        setAccommodation(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(accommodation);
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col md:px-10 pt-10 pb-[50vh]">
      <Helmet>
        <title>Accommodation - Place Pulse</title>
      </Helmet>
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
                <ShareButton accommodation={accommodation} />
                <button
                  onClick={() => {
                    navigate(`/booking/place/${accommodation_id}`);
                  }}
                  className="px-6 py-3 rounded-sm flex items-center font-extrabold justify-center bg-[#396FF9] text-white"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <HotelImageLayout
              images={accommodation.images}
              id={accommodation_id}
            />
          </div>
          <hr className="w-full hotel_divider my-[5vh]" />
          <div className="w-full mt-5">
            <h1 className="text-xl font-extrabold mb-4">Overview</h1>
            <p className="text-sm font-semibold">{accommodation.description}</p>

            <div className="w-full flex justify-start gap-8 mt-5">
              <div className="w-[30vh] h-[25vh] bg-[#0075FF] rounded-lg relative flex flex-col justify-end p-3 px-4">
                <button className="absolute font-extrabold text-2xl top-2 left-4 text-white flex items-center gap-2">
                  {accommodation.rating}
                  <Rating value={accommodation.rating} readOnly />
                </button>
                <h1 className="font-extrabold text-white">Very Good</h1>
                <h1 className="font-extralight text-white text-xs">
                  {Math.floor(Math.random() * 1000) + 1} Reviews
                </h1>
              </div>
              {accommodation.amenities[0].map((amenity: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="w-[28vh] h-[25vh] border border-[#396FF9] rounded-lg relative flex flex-col justify-end p-3"
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
          {accommodation.type === "hotel" && (
            <div className="w-full mt-5">
              <h1 className="text-xl font-extrabold mb-4">Available Rooms</h1>
              <div className="w-full flex flex-col gap-4">
                {/* {accommodation.roomTypes.map((roomType, index) => {
            return (
              <div
                key={index}
                className={`w-full flex justify-between ${index !== accommodation.roomTypes.length - 1 && "border-b border-b-[#ccc]"} pb-2`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={roomType.images[0]}
                    width={50}
                    height={50}
                    className="rounded-sm"
                  />
                  <h1 className="font-extrabold">{roomType.type}</h1>
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="font-extrabold">
                    {roomType.price} <span className="text-sm">/night</span>
                  </h1>
                  <button
                    onClick={() => {
                      navigate(`/booking/place/${accommodation_id}`);
                    }}
                    className="px-6 py-3 rounded-sm flex items-center font-extrabold justify-center bg-[#396FF9] text-white text-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })} */}
              </div>
            </div>
          )}
          <hr className="w-full hotel_divider my-[9vh]" />
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
            <div className="w-full h-[60vh] my-3 rounded-md">
              <img
                src={location_Img}
                className="w-full h-full rounded-sm"
                alt=""
              />
            </div>
          </div>
          <hr className="w-full hotel_divider my-[9vh]" />
          <div className="w-full mt-5">
            <h1 className="text-xl font-extrabold mb-4">Freebies</h1>
            <div className="w-full grid md:grid-cols-3 gap-3 mt-4">
              {accommodation.freebies[0].map((amenity: any) => {
                return (
                  <div
                    key={amenity}
                    className="w-full flex items-center gap-3 pl-4"
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

export default ViewAccommodation;
