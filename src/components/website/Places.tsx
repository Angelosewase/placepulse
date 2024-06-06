import { useState } from "react";

const Places = () => {
  const [activeAcc, setActiveAcc] = useState("hotel");
  const accommodations = [
    {
      type: "Hotel",
      number: 274
    },
    {
      type: "Motels",
      number: 120
    },
    {
      type: "Parks",
      number: 71
    },
  ]
  return (
    <div className="w-full flex px-10 pt-[10vh] pb-[20vh] ">
      <div className="md:w-[25%]"></div>
      <div className="md:w-[70%] flex flex-col">
        <div className="w-full flex items-center mb-5 gap-3 places_tabs_cont">
          {accommodations.map((accommodation, index)=>{
            return(
              <div onClick={()=> setActiveAcc(accommodation.type.toLowerCase())} key={index} className={`pb-4 pr-[20%] flex flex-col items-start gap-2 pt-1 ${accommodation.type.toLowerCase() === activeAcc ? "border-b-3 border-b-[#396FF9]" : ""}`}>
                <h1 className="font-extrabold text-medium">{accommodation.type}</h1>
                <h6 className="font-medium text-sm text-[#112211b5]">{accommodation.number} Places</h6>
                <hr className="border-2 border-[#112211b5] h-full"/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Places;
