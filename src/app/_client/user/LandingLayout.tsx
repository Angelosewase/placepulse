/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { MdPending } from "react-icons/md";
import mabBgImg from "../../../assets/images/map.png";
import SelectComponent from "./SelectItems";
import React from "react";

const UserLandingLayout = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full pb-[50vh]">
      <div className="w-full md:h-[90vh] relative">
        <img
          src={mabBgImg}
          className="w-full h-[90vh] md:h-full object-cover"
        />
        <div className="absolute w-full h-[90vh] md:h-full bg-[#0000008a] z-10 top-0 flex flex-col gap-14">
          <div className="w-full md:w-[70%] hidden md:flex justify-between mt-5 px-3 md:px-20">
            {[
              "Hotel & Motels",
              "Open Parks",
              "Gardens",
              "Restaurants",
              "Conference Rooms",
              "More",
            ].map((text) => (
              <button
                onClick={() =>
                  navigate(
                    `/_client/home/find/${text
                      .toString()
                      .toLowerCase()
                      .slice(0, text.length - 1)}`,
                  )
                }
                key={text}
                className="text-white text-md font-semibold"
              >
                {text}
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
                <SelectComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full px-3 mt-[30vh] md:mt-6">
        <div className="w-full mt-[10vh]">{children}</div>
      </section>
    </div>
  );
};

export default UserLandingLayout;
