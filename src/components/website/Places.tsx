/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaHeart, FaLocationDot, FaRegHeart } from "react-icons/fa6";
import { Rating } from "@mantine/core";
import { FaCoffee } from "react-icons/fa";
import { accommodations, amenities, free_bies } from "../../constants/dummy";
import FilterCollapsible from "../collapsibles/FilterCollapsible";
import CheckBox from "../Checkbox";
import { SnakeCaseToPascalCaseSpaced } from "../../utils/funcs/formatter";
import SliderComponent from "../Inputs/Slider";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import ButtonSliderComponent from "../../app/_client/user/SliderComponent";

const Places = () => {
  const [activeAcc, setActiveAcc] = useState("hotel");
  const navigate = useNavigate();
  const { accommodations: accommodations_data } = useSelector(
    (state: any) => state.accommodations,
  );
  console.log(
    accommodations_data.filter(
      (acc: any) => acc.type == accommodations[1].type.toLowerCase(),
    ).length,
  );
  return (
    <div className="w-full flex px-10 pt-[10vh] pb-[50vh]">
      <Helmet>
        <title>Places - Place Pulse</title>
      </Helmet>
      <div className="md:w-[35%]">
        <h1 className="text-2xl font-extrabold">Filters</h1>
        <div className="w-[80%] flex flex-col gap-10 mt-6">
          <FilterCollapsible
            label="Price"
            children={
              <div className="w-full flex flex-col items-start pl-4 gap-4 mt-3">
                <SliderComponent />
              </div>
            }
          />
          <FilterCollapsible
            label="Rating"
            children={
              <div className="w-full flex items-center justify-between mt-3">
                <button className="px-4 py-2 text-sm rounded-sm border border-[#8DD3BB] mt-3 font-bold">
                  0+
                </button>
                <button className="px-4 py-2 text-sm rounded-sm border border-[#8DD3BB] mt-3 font-bold">
                  1+
                </button>
                <button className="px-4 py-2 text-sm rounded-sm border border-[#8DD3BB] mt-3 font-bold">
                  2+
                </button>
                <button className="px-4 py-2 text-sm rounded-sm border border-[#8DD3BB] mt-3 font-bold">
                  3+
                </button>
                <button className="px-4 py-2 text-sm rounded-sm border border-[#8DD3BB] mt-3 font-bold">
                  4+
                </button>
              </div>
            }
          />
          <FilterCollapsible
            label="Freebies"
            children={
              <div className="w-full flex flex-col items-start pl-4 gap-4 mt-3">
                {free_bies.map((free_by, index) => {
                  return (
                    <CheckBox
                      key={index}
                      label={SnakeCaseToPascalCaseSpaced(free_by)}
                    />
                  );
                })}
              </div>
            }
          />

          <FilterCollapsible
            label="Amenities"
            children={
              <div className="w-full flex flex-col items-start pl-4 gap-4 mt-3">
                {amenities.map((amenity, index) => {
                  return (
                    <CheckBox
                      key={index}
                      label={SnakeCaseToPascalCaseSpaced(amenity)}
                    />
                  );
                })}
              </div>
            }
          />
        </div>
      </div>
      <div className="w-full md:w-[65%] flex flex-col">
        <div className="w-full flex items-center mb-5 gap-4 places_tabs_cont">
          {/* {accommodations.map((accommodation: any, index: number) => {
            return (
              <div
                onClick={() => setActiveAcc(accommodation.type.toLowerCase())}
                key={index}
                className="w-full flex justify-between"
              >
                <div
                  className={`w-[98%] pb-4 pr-[20%] flex flex-col items-start gap-2 pt-1 ${accommodation.type.toLowerCase() === activeAcc ? "border-b-3 border-b-[#396FF9]" : ""}`}
                >
                  <h1 className="font-extrabold text-medium">
                    {accommodation.type}
                  </h1>
                  <h6 className="font-medium text-sm text-[#112211b5]">
                    {
                      accommodations_data.filter(
                        (acc: any) =>
                          acc.type == accommodation.type.toLowerCase(),
                      ).length
                    }{" "}
                    Places
                  </h6>
                </div>
                {index !== accommodations.length - 1 && (
                  <hr className="tabs_divider border border-[#D7E2EE] ml-4" />
                )}
              </div>
            );
          })} */}
          <ButtonSliderComponent
            activeAcc={activeAcc}
            setActiveAcc={setActiveAcc}
            accommodations_data={accommodations_data}
          />
        </div>
        <div className="">
          {accommodations_data.filter(
            (accommodation: any) => accommodation.type === activeAcc,
          ).length > 0 ? (
            <div className="flex flex-col gap-4">
              {accommodations_data
                .filter(
                  (accommodation: any) => accommodation.type === activeAcc,
                )
                .slice(0, 4)
                .map((accommodation: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="w-full h-[38vh] flex justify-between rounded-xl"
                    >
                      <div className="w-[35%] h-full relative">
                        <img
                          src={accommodation.images[0]}
                          alt=""
                          className="w-full h-full rounded-l-xl"
                        />
                        <button className="absolute top-2 right-2 p-2 text-sm font-bold text-[#112211b3] flex items-center gap-1 rounded-lg bg-[#ffffff7c]">
                          {accommodation.images.length}
                          <h6>Images</h6>
                        </button>
                      </div>
                      <div className="w-[60%] flex flex-col items-start justify-start relative pb-3">
                        <h1 className="w-[70%] font-extrabold text-xl">
                          {accommodation.name}
                        </h1>
                        <div className="flex items-center gap-3">
                          <FaLocationDot color="black" />
                          <h6 className="text-[#112211] text-sm font-medium">
                            {accommodation.location}
                          </h6>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <Rating value={accommodation.rating} />
                          <h6 className="text-sm font-bold text-[#112211]">
                            {accommodation.rating} Star {activeAcc}
                          </h6>

                          <h6 className="flex items-center gap-2 ml-5">
                            <FaCoffee color="black" />
                            <p className="text-sm">
                              {accommodation.amenities.length}+ Amenities
                            </p>
                          </h6>
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="w-[3rem] h-[2rem] rounded-sm border border-[#8DD3BB] mt-3 font-bold">
                            {accommodation.rating}
                          </button>
                          <h5 className="text-sm font-extrabold">Very Good</h5>
                          <p className="text-sm font-semibold">
                            {Math.floor(Math.random() * 1000) + 1} Reviews
                          </p>
                        </div>
                        <hr className="hotel_divider border border-[#ccc] w-full mt-4" />
                        <div className="w-full flex items-center gap-3 mt-3">
                          <button className="w-[4rem] h-[3rem] flex items-center justify-center rounded-md border border-[#8DD3BB] font-bold">
                            {accommodation.liked ? (
                              <FaHeart color="black" />
                            ) : (
                              <FaRegHeart color="black" />
                            )}
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/places/${accommodation.id}`)
                            }
                            className="w-full py-3 rounded-md flex items-center font-extrabold justify-center bg-[#699bfe52]"
                          >
                            View Place
                          </button>
                        </div>

                        <div className="absolute right-3 top-2">
                          <h6 className="font-bold text-[#1122118f] text-sm">
                            Starting From{" "}
                          </h6>
                          <h1 className="text-xl text-[#396FF9] font-extrabold text-right">
                            {accommodation.price}
                          </h1>
                          <p className="text-sm text-right">excl. tax</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {accommodations_data.filter(
                (accommodation: any) => accommodation.type === activeAcc,
              ).length > 5 && (
                <button className="w-full py-3 mt-[8vh] rounded-sm text-white flex items-center font-extrabold justify-center bg-[#396FF9]">
                  Show More Places
                </button>
              )}
            </div>
          ) : (
            <div className="w-full flex justify-center mt-7">
              <h1 className="font-extrabold ">No {activeAcc}s Found!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Places;
