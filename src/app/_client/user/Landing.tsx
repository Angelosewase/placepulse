/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdPending } from "react-icons/md";
import mabBgImg from "../../../assets/images/map.png";
import AnimatedSelect from "../../../components/Inputs/AnimatedSelect";
import TripCard from "../../../components/Cards/TripCard";
import PopularCard from "../../../components/Cards/PopularAccCard";
import LandingSelect from "../../../components/Inputs/LandingSelect";
import { AxiosAPI } from "../../../utils/AxiosInstance";
import {
  FETCH_ACCOMMODATIONS_FAIL,
  FETCH_ACCOMMODATIONS_SUCCESS,
} from "../../../actions/AccommodationActions";

const UserLanding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accommodations = useSelector((state: any) => state.accommodations.accommodations);
  const [, setLoading] = useState(true);
  const [selected, setSelected] = useState<any>({
    hotel: "",
    parking: "",
    garden: "",
    restaurant: "",
  });

  const fetchAccommodations = () => {
    setLoading(true);
    AxiosAPI.get("/accommodation/all")
      .then((res) => {
        dispatch({
          type: FETCH_ACCOMMODATIONS_SUCCESS,
          payload: { accommodations: res.data.data },
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ACCOMMODATIONS_FAIL,
          payload: err.response,
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAccommodations();
  }, []);

  return (
    <div className="w-full pb-[50vh]">
      <div className="w-full md:h-[90vh] relative">
        <img src={mabBgImg} className="w-full h-[90vh] md:h-full object-cover" />
        <div className="absolute w-full h-[90vh] md:h-full bg-[#0000008a] z-10 top-0 flex flex-col gap-14">
          <div className="w-full md:w-[70%] hidden md:flex justify-between mt-5 px-3 md:px-20">
            {["Hotel & Motels", "Open Parks", "Gardens", "Restaurants", "Conference Rooms", "More"].map((text) => (
              <button key={text} className="text-white text-md font-semibold">
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
              <span className="text-5xl md:text-6xl lowercase">We'll do the rest</span>
            </h1>
            <h3 className="text-xl text-white font-medium ml-2">Special offers to suit your plan</h3>
          </div>
          <div className="w-full md:absolute bottom-0 flex justify-center">
            <div className="w-full md:w-[85%] bg-white rounded-t-2xl p-6">
              <h1 className="text-2xl font-extrabold text-[#112211]">Where are you Heading?</h1>
              <div className="w-full flex flex-col md:flex-row justify-between gap-4 mt-10">
                {[
                  { label: "Hotels", key: "hotel" },
                  { label: "Parks", key: "parking" },
                  { label: "Gardens", key: "garden" },
                  { label: "Restaurants", key: "restaurant" },
                ].map((item) => (
                  <LandingSelect
                    key={item.key}
                    className="w-full"
                    label={item.label}
                    value={selected[item.key]}
                    data={
                      accommodations.filter((acc: any) => acc.type === item.key).length > 0
                        ? accommodations
                            .filter((acc: any) => acc.type === item.key)
                            .map((accommodation: any) => ({
                              label: accommodation.name,
                              value: accommodation.name,
                            }))
                        : [{ label: `No ${item.label} Found`, value: "" }]
                    }
                    handleChange={(e: any) => setSelected({ ...selected, [item.key]: e })}
                  />
                ))}
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
        <div className="mt-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 md:items-center">
            <div>
              <h1 className="text-3xl font-bold">Plan your perfect trip</h1>
              <p className="text-[#454444]">Search Places Hire to our most popular places</p>
            </div>
            <button className="py-2 px-6 border border-[#8DD3BB] rounded-sm font-semibold">See more places</button>
          </div>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-10">
            {accommodations.slice(0, 9).map((place: any, index: number) => (
              <TripCard data={place} key={index} />
            ))}
          </div>
          <div className="w-full mt-[10vh]">
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4 md:items-center mt-[12vh]">
              <div className="w-[70%]">
                <h1 className="text-3xl font-bold">Popular Places You May Like</h1>
                <p className="text-[#454444]">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
              </div>
              <button className="py-2 px-6 border border-[#8DD3BB] rounded-sm font-semibold">See All</button>
            </div>
            <div className="w-full h-[60vh] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mt-10">
              {accommodations.slice(0, 9).map((place: any, index: number) => (
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
