import mabBgImg from "../../../assets/images/map.png";
import AnimatedSelect from "../../../components/Inputs/AnimatedSelect";
import hotelImg1 from "../../../assets/images/hotel3.png";
import hotelImg2 from "../../../assets/images/hotel4.png";
import hotelImg3 from "../../../assets/images/hotel5.png";
import hotelImg4 from "../../../assets/images/hotel6.png";
import TripCard from "../../../components/Cards/TripCard";
import { useNavigate } from "react-router-dom";
const UserLanding = () => {
  const navigate = useNavigate();
  const popularPlaces = [
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
    },
  ];
  return (
    <div className="w-full pb-[50vh]">
      <div className="w-full h-[90vh] relative">
        <img src={mabBgImg} className="w-full h-full object-cover" />
        <div className="absolute w-full h-full bg-[#0000008a] z-10 top-0 flex flex-col gap-14">
          <div className="w-[70%] flex justify-between mt-5 px-20">
            <button className="text-white text-md font-semibold">
              Hotel & Motels
            </button>
            <button className="text-white text-md font-semibold">
              Open Parks
            </button>
            <button className="text-white text-md font-semibold">
              Gardens
            </button>
            <button className="text-white text-md font-semibold">
              Restaurants
            </button>
            <button className="text-white text-md font-semibold">
              Conference Rooms
            </button>
            <button className="text-white text-md font-semibold">More</button>
          </div>
          <div className="px-20">
            <h1 className="text-6xl font-extrabold uppercase w-[50%] text-start text-white">
              Make Your Choice Destination,{" "}
              <span className="text-6xl lowercase">We'll do the rest</span>
            </h1>
            <h3 className="text-xl text-white font-medium ml-2">
              Special offers to suit your plan
            </h3>
          </div>
          <div className="w-full absolute bottom-0 flex justify-center">
            <div className="w-[85%] bg-white rounded-t-2xl p-6">
              <h1 className="text-2xl font-extrabold  text-[#112211]">
                Where are you Heading ?
              </h1>
              <div className="w-full flex justify-between gap-4 mt-10">
                <AnimatedSelect
                  className="w-full"
                  label="Hotels"
                  value=""
                  handleChange={() => {}}
                />
                <AnimatedSelect
                  label="Parks"
                  className="w-full"
                  value=""
                  handleChange={() => {}}
                />
                <AnimatedSelect
                  label="Gardens"
                  className="w-full"
                  value=""
                  handleChange={() => {}}
                />
                <AnimatedSelect
                  label="Restaurants"
                  className="w-full"
                  value=""
                  handleChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full px-20 mt-6">
        <div className="w-full flex justify-end">
          <button
            onClick={() => {
              navigate(`/places`);
            }}
            className="px-6 py-3 rounded-sm flex text-sm items-center font-extrabold justify-center bg-[#396FF9] text-white"
          >
            Show Places
          </button>
        </div>
        <div className="mt-8">
          <div className="w-full flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Plan your perfect trip</h1>
              <p className="text-[#454444]">
                Search Places Hire to our most popular places
              </p>
            </div>
            <button className="py-2 px-6 border border-[#8DD3BB] rounded-sm font-semibold">
              See more places
            </button>
          </div>

          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-10">
            {popularPlaces.slice(0, 9).map((place, index) => {
              return <TripCard data={place} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserLanding;
