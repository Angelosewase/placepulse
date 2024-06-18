/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import coverImg from "../../../../assets/images/cover.png";
import personImg from "../../../../assets/images/person.png";
import { HiPencilSquare } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const InfoLayout = ({ children }: { children: React.ReactElement }) => {
  const buttons = ["Account", "Bookings", "Payment Methods"];
  const {user} = useSelector((state: any)=> state.auth);
  return (
    <div className="w-full md:px-20 px-3 mt-20">
      <div className="relative w-full flex flex-col items-center">
        <img
          src={coverImg}
          alt=""
          className="w-full h-[50vh] object-fit rounded-lg"
          loading="lazy"
        />
        <div className="relative mt-[-10vh] rounded-full">
          <img
            src={personImg}
            alt=""
            width={150}
            height={150}
            className="object-fill"
          />
          <button className="absolute bottom-7 flex items-center justify-center right-3 p-3 rounded-full bg-[#FF8682]">
            <HiPencilSquare color="black" />
          </button>
        </div>
        <div className="w-full">
          <h1 className="w-full text-center text-2xl font-extrabold">
            {user.name}.
          </h1>
          <p className="w-full text-center text-md text-[#112211]">
            {user.email}
          </p>
        </div>
      </div>

      <div className="w-full flex items-center mb-5 gap-4 shadow-sm shadow-[#c8c8c863] rounded-lg p-3 mt-9">
        {buttons.map((button, index) => {
          return (
            <div className="w-full flex justify-between info-buttons">
              <NavLink
                to={`/_client/info/${button}`}
                key={index}
                className="w-full flex justify-between"
              >
                <div
                  className={`w-[98%] pb-4 pr-[20%] flex flex-col items-start gap-2 pt-1`}
                >
                  <h1 className="font-extrabold text-medium">{button}</h1>
                </div>
              </NavLink>
              {index !== buttons.length - 1 && (
                <hr className="tabs_divider border border-[#D7E2EE] ml-4" />
              )}
            </div>
          );
        })}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default InfoLayout;
