/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating, Skeleton } from "@mantine/core";
import { FaHeart, FaLocationDot, FaRegHeart } from "react-icons/fa6";
import HotelImageLayout from "../Images/HotelImagesLayout";
import { WiStars } from "react-icons/wi";
import { SnakeCaseToPascalCaseSpaced } from "../../utils/funcs/formatter";
import { AxiosAPI } from "../../utils/AxiosInstance";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ShareButton from "../buttons/ShareButton";
import { useSelector } from "react-redux";
import { FaPhone } from "react-icons/fa6";
import MapComponent from "./MapComponent";

const ViewAccommodation = () => {
  const params = useParams();
  const accommodation_id = params.id ?? 0;
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState<any>();

  const { accommodations } = useSelector((state: any) => state.accommodations);
  console.log(accommodation_id, accommodations);
  const accommodation = accommodations.filter(
    (accommodation: any) => accommodation.id == accommodation_id,
  )[0];
  console.log(accommodations, accommodation_id);
  useEffect(() => {
    setLoading(true);
    AxiosAPI.get(`/accommodation/hotel/get/${accommodation_id}`)
      .then((res) => {
        setRooms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [accommodation_id]);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col pt-4  md:px-28 pb-[50vh]">
      <Helmet>
        <title>Accommodation - Place Pulse</title>
      </Helmet>
      {loading ? (

        // skeletons
        <>
          <div className="w-full flex justify-between relative">
            <div className="w-[60%] flex flex-col gap-2 items-start">
              <div className="flex items-center gap-6">
                <Skeleton height={28} width="50%" radius="md" />
                <Skeleton height={24} width="15%" radius="md" />
              </div>
              <div className="flex items-center gap-3 ml-3 mt-2">
                <Skeleton height={16} width="40%" radius="md" />
              </div>
              <div className="h-[2.5rem] flex items-center gap-3 mt-3 ml-3">
                <Skeleton height={40} width={60} radius="md" />
                <Skeleton height={20} width="20%" radius="md" />
                <Skeleton height={20} width="30%" radius="md" />
              </div>
            </div>
            <div className="absolute right-0 top-0">
              <Skeleton height={28} width={100} radius="md" />
              <div className="flex w-full justify-between items-center gap-3 mt-4">
                <Skeleton height={48} width={48} radius="sm" />
                <Skeleton height={48} width={48} radius="sm" />
                <Skeleton height={48} width={120} radius="sm" />
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <Skeleton height={300} radius="md" />
          </div>
          <hr className="w-full hotel_divider my-[5vh]" />
          <div className="w-full mt-5">
            <Skeleton height={28} width="20%" radius="md" />
            <Skeleton height={100} mt={12} radius="md" />
            <div className="w-full flex justify-start gap-8 mt-5">
              <Skeleton height={200} width={150} radius="md" />
              <Skeleton height={200} width={150} radius="md" />
              <Skeleton height={200} width={150} radius="md" />
            </div>
          </div>
          <hr className="w-full hotel_divider my-[5vh]" />
          <Skeleton height={28} width="30%" radius="md" />
          <div className="w-full flex flex-col gap-4 mt-4">
            <Skeleton height={100} radius="md" />
            <Skeleton height={100} radius="md" />
            <Skeleton height={100} radius="md" />
          </div>
          <hr className="w-full hotel_divider my-[9vh]" />
          <div className="w-full mt-5">
            <Skeleton height={28} width="30%" radius="md" />
            <Skeleton height={300} radius="md" mt={12} />
          </div>
          <hr className="w-full hotel_divider my-[9vh]" />
          <div className="w-full mt-5">
            <Skeleton height={28} width="30%" radius="md" />
            <div className="w-full grid md:grid-cols-3 gap-3 mt-4">
              <Skeleton height={50} radius="md" />
              <Skeleton height={50} radius="md" />
              <Skeleton height={50} radius="md" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-between relative shadow-sm">
            <div className="w-[60%] flex flex-col  items-start   space-y-1">
              <div className="flex items-center ">
                <h1 className="text-2xl font-extrabold mr-10">
                  {accommodation?.name}
                </h1>
                <Rating value={accommodation?.rating} />
                <h6 className="text-xs font-medium text-[#112211d1] ml-1 self-center ">
                  {accommodation?.rating} Star {accommodation?.type}
                </h6>
              </div>
              <div className="flex items-center  ">
                <FaLocationDot color="#112211d1" />
                <h6 className="text-[#112211d1] text-sm font-medium">
                  {accommodation?.location}
                </h6>
              </div>
              <div className="h-10 flex items-center gap-3   ">
                <button className="w-[3rem] h-7 rounded border border-[#8DD3BB] font-bold">
                  {accommodation?.rating}
                </button>
                <h5 className="text-sm font-extrabold">Very Good</h5>
                <p className="text-sm font-semibold">
                  {Math.floor(Math.random() * 1000) + 1} Reviews
                </p>
              </div>
              <h6 className=" text-base font-semibold text-[#112211d1] flex gap-2 items-center ">
                <FaPhone /> Owner's Contacts:{" "}
                <span className="font-extrabold">{"+250 793 245 434"}</span>
              </h6>
            </div>

            <div className="absolute right-0 top-0">
              <h1 className="text-xl text-[#396FF9] font-extrabold text-right">
                {accommodation?.price}{" "}
                <span className="text-sm">
                  {accommodation?.type === "hotel" ||
                  accommodation?.type === "motel" ||
                  accommodation?.type === "lodge" ||
                  accommodation?.type === "guest house"
                    ? "/night"
                    : "/accommodation"}
                </span>
              </h1>
              <div className="flex w-full justify-between items-center gap-3 mt-2">
                <button className="w-[4rem] h-[3rem] flex items-center justify-center rounded-lg border border-[#8DD3BB] font-bold">
                  {accommodation?.liked ? (
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
                  className="px-6 py-3 rounded-lg flex items-center font-extrabold justify-center bg-[#396FF9] text-white"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-5">
            <HotelImageLayout
              images={accommodation?.images}
              id={accommodation_id}
            />
          </div>
          <hr className="w-full hotel_divider my-[5vh]" />
          <div className="w-full mt-5">
            <h1 className="text-xl font-extrabold mb-4">Overview</h1>
            <p className="text-sm font-semibold">
              {accommodation?.description}
            </p>

            <div className="w-full flex justify-start gap-8 mt-5">
              <div className="w-[18vh] h-[14vh] bg-[#0075FF] rounded-lg  relative flex flex-col justify-end p-3 px-4">
                <button className="absolute font-extrabold text-2xl top-2 left-4 text-white flex items-center gap-2">
                  {accommodation?.rating}
                  <Rating value={accommodation?.rating} readOnly />
                </button>
                <h1 className="font-extrabold text-white">Very Good</h1>
                <h1 className="font-extralight text-white text-xs">
                  {Math.floor(Math.random() * 1000) + 1} Reviews
                </h1>
              </div>
              {accommodation?.amenities &&
                accommodation?.amenities[0].map((amenity: any, index: any) => {
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
          <hr className="w-full hotel_divider my-[9vh]" />
          <div className="w-full mt-5">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-xl font-extrabold mb-4">Location/Map</h1>
              <Link
                to={`https://www.google.com/maps/place/${accommodation?.location}`}
                target="_blank"
                className="px-6 py-3 rounded-lg flex items-center font-extrabold justify-center bg-[#396FF9] text-white text-sm"
              >
                View on google maps
              </Link>
            </div>
            <div className="w-full h-[60vh] my-3 rounded-md">
              {/* <img
                src={location_Img}
                className="w-full h-full rounded-sm"
                alt=""
              /> */}
              <MapComponent name={accommodation?.name}/>
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

export default ViewAccommodation;
