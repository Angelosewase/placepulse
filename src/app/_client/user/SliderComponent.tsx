/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  { type: "Hotel" },
  { type: "Motel" },
  { type: "Garden" },
  { type: "Conference Room" },
  { type: "Restaurant" },
];

const ButtonSliderComponent = ({
  activeAcc,
  setActiveAcc,
  accommodations_data,
}: {
  activeAcc: string;
  setActiveAcc: (e: string) => void;
  accommodations_data: any;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScrollPos, setMaxScrollPos] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setMaxScrollPos(
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth,
      );
    }
  }, [sliderRef.current?.scrollWidth, sliderRef.current?.clientWidth]);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPos((prev) => prev + scrollAmount);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPos(sliderRef.current.scrollLeft);
    }
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="slider-wrapper relative flex items-center">
        {/* scroll-button rounded-full bg-white shadow border border-[#ccc] right p-4 */}
        {scrollPos > 0 && (
          <button
            className="scroll-button absolute left-0 rounded-full bg-white shadow border border-[#ccc] p-4"
            onClick={() => scroll("left")}
          >
            <FaChevronLeft />
          </button>
        )}
        <div
          className="slider-container overflow-x-auto flex"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {categories.map((category, index) => {
            return (
              <div className="h-full flex justify-between">
                <div
                  onClick={() => setActiveAcc(category.type.toLowerCase())}
                  key={index}
                  // hover:border-t hover:border-l hover:border-r hover:border-[#ccc] hover:rounded-md hover:border-b-3 hover:border-b-[#396FF9]
                  className={`category-tab flex-shrink-0 mx-2 px-4 py-2 cursor-pointer ${category.type.toLowerCase() == activeAcc ? " border-t border-l shadow shadow-[#ccc] rounded-md border-b-3 border-b-[#396FF9]" : ""}`}
                >
                  <h1 className="font-extrabold text-medium">
                    {category.type}
                  </h1>
                  <h6 className="font-medium text-sm mt-3 text-[#112211b5]">
                    {
                      accommodations_data.filter(
                        (acc: any) => acc.type == category.type.toLowerCase(),
                      ).length
                    }{" "}
                    Available
                  </h6>
                </div>
                {index !== categories.length - 1 && (
                  <hr
                    className="h-[3rem] w-2"
                    style={{ writingMode: "horizontal-tb" }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {scrollPos < maxScrollPos && (
          <button
            className="scroll-button absolute right-0 rounded-full bg-white shadow border border-[#ccc] right p-4"
            onClick={() => scroll("right")}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
      <div className="w-full px-2 flex justify-between items-center mb-10">
        <h1 className="text-sm font-bold">
          Showing <span className="text-[#0075FF] text-sm">{4}</span> of{" "}
          <span className="text-[#0075FF] text-sm">
            {accommodations_data?.length} Places
          </span>
        </h1>
        <button className="text-sm font-bold">Sort by Recommended </button>
      </div>
    </div>
  );
};

export default ButtonSliderComponent;
