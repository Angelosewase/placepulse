import mabBgImg from "../../../assets/images/map.png";
import AnimatedSelect from "../../../components/Inputs/AnimatedSelect";
const UserLanding = () => {
  return (
    <div className="w-full pb-[50vh]">
      <div className="w-full h-[90vh] relative">
        <img src={mabBgImg} className="w-full h-full object-cover"/>
        <div className="absolute w-full h-full bg-[#0000008a] z-10 top-0 flex flex-col gap-14">
            <div className="w-[70%] flex justify-between mt-5 px-20">
                <button className="text-white text-md font-semibold">Hotel & Motels</button>
                <button className="text-white text-md font-semibold">Open Parks</button>
                <button className="text-white text-md font-semibold">Gardens</button>
                <button className="text-white text-md font-semibold">Restaurants</button>
                <button className="text-white text-md font-semibold">Conference Rooms</button>
                <button className="text-white text-md font-semibold">More</button>
            </div>
           <div className="px-20">
            <h1 className="text-6xl font-extrabold uppercase w-[50%] text-start text-white">Make Your Choice Destination, <span className="text-6xl lowercase">We'll do the rest</span></h1>
            <h3 className="text-xl text-white font-medium ml-2">Special offers to suit your plan</h3>
           </div>
            <div className="w-full absolute bottom-0 flex justify-center">
                <div className="w-[70%] bg-white rounded-t-2xl p-6">
                    <h1 className="text-2xl font-extrabold  text-[#112211]">Where are you Heading ?</h1>
                    <div className="w-full flex justify-between gap-2 mt-6">
                        <AnimatedSelect label="Hotels" value="" handleChange={()=> {}}/>
                        <AnimatedSelect label="Parks" value="" handleChange={()=> {}}/>
                        <AnimatedSelect label="Gardens" value="" handleChange={()=> {}}/>
                        <AnimatedSelect label="Restaurants" value="" handleChange={()=> {}}/>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default UserLanding;
