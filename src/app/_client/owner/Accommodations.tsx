import hotelImg1 from "../../../assets/images/hotel3.png";
import hotelImg2 from "../../../assets/images/hotel4.png";
import hotelImg3 from "../../../assets/images/hotel5.png";
import hotelImg4 from "../../../assets/images/hotel6.png";
import ViewAccomCard from "../../../components/Cards/ViewAccCard";
const OwnerAccommodations = () => {
  const popularPlaces = [
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
      location: {
        lng: 134,
        lat: 54,
        text: "Kimihurura - Kigali - Rwanda",
      },
    },
    {
      type: "hotel",
      name: "Holywood Hotel",
      images: [hotelImg3, hotelImg2, hotelImg1, hotelImg4],
      location: {
        lng: 134,
        lat: 54,
        text: "Kimihurura - Kigali - Rwanda",
      },
    },
    {
      type: "hotel",
      name: "City Pulse Hotel",
      images: [hotelImg1, hotelImg2, hotelImg3, hotelImg4],
      location: {
        lng: 134,
        lat: 54,
        text: "Kimihurura - Kigali - Rwanda",
      },
    },
    {
      type: "hotel",
      name: "Mariot Hotel",
      images: [hotelImg4, hotelImg2, hotelImg3, hotelImg1],
      location: {
        lng: 134,
        lat: 54,
        text: "Kimihurura - Kigali - Rwanda",
      },
    },
    {
      type: "hotel",
      name: "Greenpark Hotel",
      images: [hotelImg2, hotelImg1, hotelImg3, hotelImg4],
      location: {
        lng: 134,
        lat: 54,
        text: "Kimihurura - Kigali - Rwanda",
      },
    },
  ];
  return (
    <div className="w-full">
      <h1 className="text-2xl font-extrabold">Accommodations Registered</h1>
      <p>All accommodations that you registered in the system</p>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-10 ">
        {popularPlaces.slice(0, 9).map((place, index) => {
          return <ViewAccomCard data={place} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OwnerAccommodations;
