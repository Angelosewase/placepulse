/* eslint-disable @typescript-eslint/no-explicit-any */
import landingImage1 from "../../assets/images/landing1.png";
import landingImage2 from "../../assets/images/landing2.png";
import landingImage3 from "../../assets/images/landing3.png";
import { Link, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import cookie from "react-cookies";
import Carousel from "../carousels";
import FAQPage from "./FAQs";
import ReviewsCarousel from "./Reviews";
import { Skeleton } from "@mantine/core";
import { useSelector } from "react-redux";
import Icon1 from "@/assets/images/Group.png";
import Icon2 from "@/assets/images/Group1.png";
import Icon3 from "@/assets/images/Group2.png";
import { FiMapPin } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();
  const { accommodations, loading } = useSelector(
    (state: any) => state.accommodations
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
      <div className="w-full px-10 lg:px-28  mt-[10vh] flex md:flex-row flex-col-reverse justify-between">
        <div className="w-full md:w-2/5 mb-10 md:mb-auto mt-16">
          <h1 className="w-full mb-5 text-6xl uppercase font-extrabold text-start">
            the adventure begins here
          </h1>
          <h6 className="text-lg">
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam et sed minima temporibus laudantium.
          </h6>
          <div className="flex gap-3 mt-5">
            <input
              placeholder="Which Place is On Your Mind ?"
              className="border-2 border-black py-2 px-3 text-slate-600 rounded w-2/3 bg-transparent "
            />
            <button className="py-2 px-5 rounded bg-[#396FF9] text-white text-sm ">
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
            className="absolute left-0 mt-[15%] z-20 lg:scale-125"
          />
          <img
            src={landingImage2}
            alt="Landing Image 2"
            className="absolute left-[30%] z-10 lg:scale-125"
          />
          <img
            src={landingImage3}
            alt="Landing Image 3"
            className="absolute right-0 mt-[15%] lg:scale-125"
          />
        </div>
      </div>

      <div className="mt-[5vh] px-10 lg:px-28 flex  flex-col-reverse justify-between items-start ">
        <div className="w-full md:w-[100%] flex flex-col md:flex-row gap-8 ">
          {loading ? (
            <>
              <Skeleton height={250} width="100%" />
              <Skeleton height={250} width="100%" />
              <Skeleton height={250} width="100%" />
            </>
          ) : (
            <>
              {accommodations
                ?.slice(0, 5)
                .map((accommodation: any, index: number) => (
                  <div
                    key={index}
                    className="relative flex justify-center w-[270px] h-[400px] rounded-lg"
                  >
                    <img
                      src={accommodation?.images?.[0]}
                      alt={`Weekly Hotel ${index + 1}`}
                      className="w-full rounded-xl h-full object-cover"
                    />
                    <div className="bg-transparent w-[80%] absolute bottom-2  rounded-lg px-3 pt-2 py-3 text-white">
                      <h2 className="font-extrabold text-lg">{accommodation?.name}</h2>
                      <p className="flex gap-1 items-center text-gray-50"><FiMapPin size={15} className="text-gray-50 "/>{accommodation.location}</p>
                      <Link
                        to="/places"
                        className="font-extrabold bg-[#396FF9] text-white flex items-center gap-2 px-3 py-2 rounded"
                      >
                        Get Reservation{" "}
                        <CiLocationOn size={15} color="#396FF9" />
                      </Link>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>

        <div className="flex flex-col justify-start mb-20 md:mb-10 w-full">
          <h1 className="text-4xl uppercase font-extrabold mt-5">
            THIS WEEK’S TOP PICKS
          </h1>
          <div className="flex justify-between items-center w-[100%] ">
            <h6 className="mt-4 text-justify max-w-[75%]">
            Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
            </h6>
            <button
              onClick={() => navigate("/places")}
              className="w-[8rem] mt-4 py-2 px-4 bg-[#396FF9] rounded text-white"
            >
              Find Place
            </button>
          </div>
        </div>
      </div>

      <div className="w-full  my-0 bg-[#396ff911] pb-[10vh] pt-[3vh] gap-4 mt-[10vh]">
        <div>
          <h1 className="text-4xl font-extrabold mt-10 mb-3 w-full text-center">
            What you need <span className="text-4xl text-blue-500">to do </span>
          </h1>
          <p className="md:max-w-[30%] text-center mx-auto mb-10 text-base text-gray-500">
            We ensure that you’ll embark on a perfectly planned, safe
            reservation at a price you can afford.
          </p>
        </div>

        {/* steps to follow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* first step */}
          <div className="w-[90%] md:w-[20%]  shadow-lg shadow-gray-200 h-auto flex flex-col gap-5 items-start px-6  bg-white py-5 rounded-xl">
            <img src={Icon1} alt="" className="h-10" />
            <h2 className="font-extrabold text-xl">Signup</h2>
            <h6 className="w-full  text-sm">
              Completes all the work associated with planning and processing
            </h6>
          </div>

          {/* second step */}
          <div className="w-[90%] md:w-[20%]  shadow-lg shadow-gray-200 h-auto flex flex-col gap-5 items-start px-6  bg-white py-5 rounded-xl">
            <img src={Icon2} alt="" className="h-10" />
            <h2 className="font-extrabold text-xl">Worth of Money</h2>
            <h6 className="w-full  text-sm">
              After successful access then book from exclusive deals & pricing
            </h6>
          </div>
          {/* third step  */}
          <div className="w-[90%] md:w-[20%]  shadow-lg shadow-gray-200 h-auto flex flex-col gap-5 items-start px-6  bg-white py-5 rounded-xl">
            <img src={Icon3} alt="" className="h-10" />
            <h2 className="font-extrabold text-xl">Exciting Travel</h2>
            <h6 className="w-full  text-sm">
              Start and explore a wide range of exciting travel experience.
            </h6>
          </div>
        </div>
      </div>

      <section className="pb-[10vh] px-10 lg:px-28 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold my-[5vh] w-full text-center">
          Explore Popular Retreats
        </h1>
        <p className="md:max-w-[50%] mx-auto mb-10 text-base text-gray-500">
          Find your next getaway with our handpicked accommodations that boast
          top reviews, premium amenities, and stunning locations—offering the
          ideal retreat for relaxation, adventure, or simply enjoying life's
          best moments.
        </p>
        {loading ? (
          <Skeleton height={300} width="100%" />
        ) : (
          <Carousel accommodations={accommodations} />
        )}
      </section>

      <section id="reviews" className="mb-20">
        <section className="w-full  ">
          <ReviewsCarousel />
        </section>
      </section>

      <section className="w-full  px-10 lg:px-28 mb-[20vh]">
        <FAQPage />
      </section>
    </div>
  );
};

export default Home;
