/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { FaHeart, FaLocationDot, FaRegHeart } from "react-icons/fa6";
import { Rating, Skeleton } from "@mantine/core";
import { FaCoffee } from "react-icons/fa";
import { amenities, free_bies } from "@/constants/dummy";
import FilterCollapsible from "@/components/collapsibles/FilterCollapsible";
import CheckBox from "@/components/Checkbox";
import { SnakeCaseToPascalCaseSpaced } from "@/utils/funcs/formatter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import ButtonSliderComponent from "@/app/_client/user/SliderComponent";
import { IoClose } from "react-icons/io5";

const Places = () => {
  const [activeAcc, setActiveAcc] = useState("hotel");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedFreebies, setSelectedFreebies] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const itemsPerPage = 3;

  const navigate = useNavigate();
  const { accommodations: accommodations_data, loading } = useSelector(
    (state: any) => state.accommodations,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [
    activeAcc,
    selectedRating,
    selectedAmenities,
    selectedFreebies,
    selectedLocation,
  ]);

  const handleRatingFilter = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity],
    );
  };

  const handleFreebieChange = (freebie: string) => {
    setSelectedFreebies((prev) =>
      prev.includes(freebie)
        ? prev.filter((item) => item !== freebie)
        : [...prev, freebie],
    );
  };

  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const handleLocationChange = () => {
    if (!location) {
      setLocationError("Enter The Location");
      return;
    } else {
      setLocationError("");
      setSelectedLocation(location);
    }
  };

  const filteredAccommodations = accommodations_data.filter(
    (accommodation: any) => {
      const matchesType = accommodation.type === activeAcc;
      const matchesRating = selectedRating
        ? accommodation.rating >= selectedRating
        : true;

      const flatAmenities = accommodation.amenities.flat();
      const flatFreebies = accommodation.freebies.flat();

      const matchesAmenities = selectedAmenities.every((amenity) =>
        flatAmenities.includes(amenity),
      );
      const matchesFreebies = selectedFreebies.every((freebie) =>
        flatFreebies.includes(freebie),
      );

      const matchesLocation = selectedLocation
        ? accommodation.location
            .toLowerCase()
            .includes(selectedLocation.toLowerCase())
        : true;

      return (
        matchesType &&
        matchesRating &&
        matchesAmenities &&
        matchesFreebies &&
        matchesLocation
      );
    },
  );

  const totalPages = Math.ceil(filteredAccommodations.length / itemsPerPage);
  const currentItems = filteredAccommodations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex px-10 pt-[10vh] pb-[50vh]">
      <Helmet>
        <title>Places - Place Pulse</title>
      </Helmet>
      <div className="md:w-[35%]">
        <h1 className="text-2xl font-extrabold">Filters</h1>
        <div className="w-[80%] flex flex-col gap-10 mt-6">
          {/* Location Filter */}
          <FilterCollapsible
            label="Location"
            children={
              loading ? (
                <Skeleton height={40} />
              ) : (
                <div className="w-full flex flex-col items-start pl-4 gap-2 mt-3 transition-all duration-500">
                  <input
                    name="location"
                    value={location}
                    onChange={(e: any) => setLocation(e.target.value)}
                    placeholder="Type Location"
                    className="w-full transition-all duration-500 py-3 pl-2 border border-gray-200 outline-none rounded-md"
                  />
                  {locationError && (
                    <p className="text-red-500 font-bold">{locationError}</p>
                  )}
                  {selectedLocation && (
                    <button
                      onClick={() => {
                        setSelectedLocation("");
                        setLocation("");
                      }}
                      className="py-1 transition-all duration-500 px-2 text-sm rounded-lg bg-blue-400 text-white flex gap-2 items-center"
                      style={{ borderRadius: "5px" }}
                    >
                      <IoClose /> Remove Filter
                    </button>
                  )}
                  <button
                    onClick={handleLocationChange}
                    className={`py-3 w-full transition-all duration-500 px-3 ${!location ? "bg-blue-400" : "bg-blue-500"} bg-blue-500 text-white flex items-center justify-center`}
                  >
                    Apply
                  </button>
                </div>
              )
            }
          />
          <FilterCollapsible
            label="Rating"
            children={
              loading ? (
                <Skeleton height={40} />
              ) : (
                <div className="w-full flex items-center justify-between mt-3">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleRatingFilter(rating)}
                      className={`px-4 py-2 text-sm rounded-sm border border-[#8DD3BB] mt-3 font-bold ${
                        selectedRating === rating ? "bg-[#8DD3BB]" : ""
                      }`}
                    >
                      {rating}+
                    </button>
                  ))}
                </div>
              )
            }
          />
          <FilterCollapsible
            label="Freebies"
            children={
              loading ? (
                <Skeleton height={40} />
              ) : (
                <div className="w-full flex flex-col items-start pl-4 gap-4 mt-3">
                  {free_bies.map((free_by: string, index: any) => {
                    const isChecked = selectedFreebies.includes(free_by);
                    return (
                      <CheckBox
                        key={index}
                        label={SnakeCaseToPascalCaseSpaced(free_by)}
                        checked={isChecked}
                        onChange={() => handleFreebieChange(free_by)}
                      />
                    );
                  })}
                </div>
              )
            }
          />
          <FilterCollapsible
            label="Amenities"
            children={
              loading ? (
                <Skeleton height={40} />
              ) : (
                <div className="w-full flex flex-col items-start pl-4 gap-4 mt-3">
                  {amenities.map((amenity: string, index: any) => {
                    const isChecked = selectedAmenities.includes(amenity);
                    return (
                      <CheckBox
                        key={index}
                        label={SnakeCaseToPascalCaseSpaced(amenity)}
                        checked={isChecked}
                        onChange={() => handleAmenityChange(amenity)}
                      />
                    );
                  })}
                </div>
              )
            }
          />
        </div>
      </div>
      <div className="w-full md:w-[65%] flex flex-col">
        <div className="w-full flex items-center mb-5 gap-4 places_tabs_cont">
          <ButtonSliderComponent
            activeAcc={activeAcc}
            setActiveAcc={setActiveAcc}
            accommodations_data={accommodations_data}
          />
        </div>
        <div className="">
          {loading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <div key={index} className="w-full h-[38vh] flex gap-4">
                  <Skeleton height="100%" width={150} />
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton height={30} />
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredAccommodations.length > 0 ? (
            <div className="flex flex-col gap-4">
              {currentItems.map((accommodation: any, index: number) => (
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
                        onClick={() => navigate(`/places/${accommodation.id}`)}
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
              ))}
              <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-3 py-1 mx-1 rounded ${
                      currentPage === index + 1
                        ? "bg-[#396FF9] text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
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
