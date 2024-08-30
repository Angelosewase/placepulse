/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdPending } from "react-icons/md";
import mabBgImg from "../../../assets/images/map.png";
import { Skeleton } from "@mantine/core";
import SelectComponent from "./SelectItems";
import BookingLandCard from "@/components/Cards/BookingLandCard";
import TripCard from "../../../components/Cards/TripCard";
import PopularCard from "../../../components/Cards/PopularAccCard";

const UserLanding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accommodations, loading } = useSelector(
    (state: any) => state.accommodations,
  );
  const { bookings, loading: loadingBookings } = useSelector(
    (state: any) => state.bookings,
  );
  console.log(bookings);
  const tabs = [
    { name: "Hotel & Motels", slug: "hotel" },
    { name: "Open Parks", slug: "parking" },
    { name: "Gardens", slug: "garden" },
    { name: "Conference Rooms", slug: "conference room" },
    { name: "Apartments", slug: "apartment" },
    { name: "Guest House", slug: "guest house" },
    { name: "Resorts", slug: "resort" },
    { name: "Lodge", slug: "lodge" },
  ];

  return (
    <div className="w-full">
      <div className="w-full md:h-[90vh] relative">
        <img
          src={mabBgImg}
          className="w-full h-[90vh] md:h-full object-cover"
        />
        <div className="absolute w-full h-[90vh] md:h-full bg-[#0000008a] z-10 top-0 flex flex-col gap-14">
          <div className="w-full md:w-[70%] hidden md:flex justify-between mt-5 px-3 md:px-20">
            {tabs.map((tab) => (
              <button
                onClick={() => navigate(`/_client/home/find/${tab.slug}`)}
                key={tab.name}
                className="text-white text-md font-semibold"
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="flex md:hidden mt-5 justify-end px-3">
            <MdPending size={23} color="white" />
          </div>
          <div className="px-3 md:px-20">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase w-full md:w-[50%] text-start text-white">
              Make Your Choice Destination,{" "}
              <span className="text-5xl md:text-6xl lowercase">
                We'll do the rest
              </span>
            </h1>
            <h3 className="text-xl text-white font-medium ml-2">
              Special offers to suit your plan
            </h3>
          </div>
          <div className="w-full md:absolute bottom-0 flex justify-center">
            <div className="w-full md:w-[85%] bg-white rounded-t-2xl p-6">
              <h1 className="text-2xl font-extrabold text-[#112211]">
                Where are you Heading?
              </h1>
              <div className="w-full flex flex-col md:flex-row justify-between gap-4 mt-10">
                {loading ? (
                  <Skeleton height={50} width="100%" radius="md" />
                ) : (
                  <SelectComponent />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full px-3 md:px-20 mt-[30vh] md:mt-6">
        <div className="w-full flex justify-end">
          <button
            onClick={() => navigate("/places")}
            className="px-6 py-3 rounded-sm flex text-sm items-center font-extrabold justify-center bg-[#396FF9] text-white"
          >
            Show Places
          </button>
        </div>
        <div className="w-full mt-8">
          <div className="w-full mt-[10vh]">
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 md:items-center mt-[12vh]">
              <div className="w-[70%]">
                <h1 className="text-3xl font-bold">Your Recent Bookings</h1>
                <p className="text-[#454444]">
                  Accommodations that caught your attention
                </p>
              </div>
              <button className="py-2 px-6 border border-[#8DD3BB] rounded-sm font-semibold">
                See All
              </button>
            </div>
            {loadingBookings ? (
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} height={400} radius="md" />
                ))
            ) : bookings.length === 0 ? (
              <div className="w-full flex flex-col gap-4 items-center">
                <h1 className="font-extrabold">No Bookings Found!</h1>
              </div>
            ) : (
              <div className="w-full h-[60vh] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-3 mt-10">
                {bookings.slice(0, 3).map((place: any, index: number) => (
                  <BookingLandCard data={place} key={index} />
                ))}
              </div>
            )}
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 md:items-center mt-[10vh]">
            <div>
              <h1 className="text-3xl font-bold">Plan your perfect trip</h1>
              <p className="text-[#454444]">
                Search Places Here from our most popular places
              </p>
            </div>
            <button className="py-2 px-6 border border-[#8DD3BB] rounded-sm font-semibold">
              See more places
            </button>
          </div>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-10">
            {loading
              ? Array(9)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} height={200} radius="md" />
                  ))
              : accommodations
                  .slice(0, 9)
                  .map((place: any, index: number) => (
                    <TripCard data={place} key={index} />
                  ))}
          </div>
          <div className="w-full mt-[10vh]">
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 md:items-center mt-[12vh]">
              <div className="w-[70%]">
                <h1 className="text-3xl font-bold">
                  Popular Places You May Like
                </h1>
                <p className="text-[#454444]">
                  Going somewhere to celebrate this season? Whether you’re going
                  home or somewhere to roam, we’ve got the travel tools to get
                  you to your destination.
                </p>
              </div>
              <button className="py-2 px-6 border border-[#8DD3BB] rounded-sm font-semibold">
                See All
              </button>
            </div>
            <div className="w-full h-[60vh] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-10">
              {loading
                ? Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} height={200} radius="md" />
                    ))
                : accommodations
                    .slice(0, 4)
                    .map((place: any, index: number) => (
                      <PopularCard data={place} key={index} />
                    ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserLanding;
