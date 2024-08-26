/* eslint-disable @typescript-eslint/no-explicit-any */
import landingImage1 from "../../assets/images/landing1.png";
import landingImage2 from "../../assets/images/landing2.png";
import landingImage3 from "../../assets/images/landing3.png";
import { Link, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GrKey } from "react-icons/gr";
import { IoTimeSharp } from "react-icons/io5";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import cookie from "react-cookies";
import Carousel from "../carousels";
import FAQPage from "./FAQs";
import ReviewsCarousel from "./Reviews";
import { Skeleton } from "@mantine/core";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { accommodations, loading } = useSelector(
    (state: any) => state.accommodations,
  );
  console.log(accommodations, loading);

  useEffect(() => {
    const token = cookie.load("auth_token");
    const userRole = cookie.load("auth_USER");
    if (token) {
      if (userRole === "USER") {
        navigate("/_client/home");
      }
      if (userRole === "OWNER") {
        navigate("/_owner/home");
      }
      if (userRole === "ADMIN") {
        navigate("/_admin/home");
      }
    }
  }, [navigate]);

  return (
    <div className="pt-3 min-h-screen pb-20">
      <Helmet>
        <title>Home - Place Pulse</title>
      </Helmet>
      <div className="w-full px-10 flex flex-col md:flex-row items-center justify-between mt-[10vh]">
        <div className="w-full md:w-2/5 mb-10 md:mb-auto">
          <h1 className="w-full mb-5 text-5xl uppercase font-extrabold text-start">
            the adventure begins here
          </h1>
          <h6>
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam et sed minima temporibus laudantium.
          </h6>
          <div className="flex gap-3 mt-5">
            <input
              placeholder="Which Place is On Your Mind ?"
              className="border-2 border-black py-2 px-3 text-slate-600 rounded-lg w-2/3 bg-transparent"
            />
            <button className="py-2 px-5 rounded-md bg-[#396FF9] text-white text-sm">
              Search
            </button>
          </div>
          <div className="w-4/5 flex justify-between mt-5">
            <div className="flex flex-col">
              <h1 className="text-3xl uppercase font-extrabold">105+</h1>
              <h6 className="font-medium">Places</h6>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl uppercase font-extrabold">270+</h1>
              <h6 className="font-medium ">Booking</h6>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl uppercase font-extrabold">10+</h1>
              <h6 className="font-medium">Categories</h6>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[45%] relative flex mt-2 h-[70vh]">
          <img
            src={landingImage1}
            alt="Landing Image 1"
            className="absolute left-0 mt-[15%] z-20"
          />
          <img
            src={landingImage2}
            alt="Landing Image 2"
            className="absolute left-[30%] z-10"
          />
          <img
            src={landingImage3}
            alt="Landing Image 3"
            className="absolute right-0 mt-[15%]"
          />
        </div>
      </div>

      <div className="mt-[20vh] px-10 flex md:flex-row flex-col-reverse justify-between items-start ">
        <div className="w-full md:w-[50%] flex flex-col md:flex-row gap-8">
          {loading ? (
            <>
              <Skeleton height={250} width="100%" />
              <Skeleton height={250} width="100%" />
            </>
          ) : (
            <>
              <div className="relative flex justify-center w-full">
                <img
                  src={accommodations[0]?.images[0]}
                  alt="Weekly Hotel 1"
                  className="w-full"
                />
                <div className="bg-white w-[80%] absolute bottom-[-2.3rem] rounded-lg px-3 pt-2 py-3">
                  <h2 className="font-extrabold">{accommodations[0]?.name}</h2>
                  <Link
                    to={"/places"}
                    className="font-extrabold text-[#396FF9] flex items-center gap-2"
                  >
                    Get Reservation <CiLocationOn size={15} color="#396FF9" />
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center w-full">
                <img
                  src={accommodations[1]?.images[0]}
                  alt="Weekly Hotel 2"
                  className="w-full"
                />
                <div className="bg-white w-[80%] absolute bottom-[-2.3rem] rounded-lg px-3 pt-2 py-3">
                  <h2 className="font-extrabold">{accommodations[1]?.name}</h2>
                  <Link
                    to={"/places"}
                    className="font-extrabold text-[#396FF9] flex items-center gap-2"
                  >
                    Get Reservation <CiLocationOn size={15} color="#396FF9" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col justify-start mb-20 md:mb-auto">
          <h1 className="text-2xl uppercase font-extrabold mt-5">
            THIS WEEK’S TOP PICKS
          </h1>
          <h6 className="mt-4 w-4/5 text-justify">
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam
          </h6>
          <button
            onClick={() => navigate("/places")}
            className="w-[8rem] mt-4 py-2 px-4 bg-[#396FF9] rounded-lg text-white"
          >
            Find Place
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center my-20 bg-[#396ff911] py-[10vh] gap-4">
        <div className="w-[90%] md:w-[25%] h-auto flex flex-col gap-5 items-center justify-center bg-white py-10 rounded-lg">
          <button className="p-4 bg-[#396FF9]">
            <GrKey color="white" />
          </button>
          <h2 className="font-extrabold">Signup</h2>
          <h6 className="w-full px-4 text-center text-sm">
            Esse voluptas cumque vel exercitationem.Reiciendis est hic accusamus
          </h6>
        </div>
        <div className="w-[90%] md:w-[25%] h-auto flex flex-col gap-5 items-center justify-center bg-white py-10 rounded-lg">
          <button className="p-4 bg-[#396FF9]">
            <IoTimeSharp color="white" size={17} />
          </button>
          <h2 className="font-extrabold">Save Time</h2>
          <h6 className="w-full px-4 text-center text-sm">
            Esse voluptas cumque vel exercitationem.Reiciendis est hic accusamus
          </h6>
        </div>
        <div className="w-[90%] md:w-[25%] h-auto flex flex-col gap-5 items-center justify-center bg-white py-10 rounded-lg">
          <button className="p-4 bg-[#396FF9]">
            <GrKey color="white" />
          </button>
          <h2 className="font-extrabold">Reservation</h2>
          <h6 className="w-full px-4 text-center text-sm">
            Esse voluptas cumque vel exercitationem.Reiciendis est hic accusamus
          </h6>
        </div>
      </div>

      <section className="pb-[10vh] px-10 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold my-[5vh] w-full text-center">
          Popular Accommodations
        </h1>
        {loading ? (
          <Skeleton height={300} width="100%" />
        ) : (
          <Carousel accommodations={accommodations} />
        )}
      </section>

      <section id="reviews" className="pb-8">
        <section className="w-full my-20 bg-[#396ff911] pt-[5vh] pb-[10vh] gap-4">
          <h1 className="text-3xl font-extrabold w-full text-center mb-[10vh]">
            Clients Reviews
          </h1>
          <ReviewsCarousel />
        </section>
      </section>

      <section className="w-full bg-[#F7F7F7] px-20 mb-[17vh]">
        <FAQPage />
      </section>
    </div>
  );
};

export default Home;
