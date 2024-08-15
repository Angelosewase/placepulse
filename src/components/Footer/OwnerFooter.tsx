import { Link } from "react-router-dom";

const OwnerFooter = () => {
  return (
    <div className="w-full h-[10vh] flex justify-between items-center text-black px-6 mb-4">
      <div className="flex gap-3 items-center">
        <Link to={"/public/terms"} className="font-semibold text-sm">
          Terms of Service
        </Link>
        <Link
          to={"/public/privacy"}
          className="text-white font-semibold text-sm"
        >
          Privacy Policy
        </Link>
      </div>

      <div className="flex items-center">
        <h1 className=" text-sm font-semibold">
          Copyright Place Pulse 2024. All right reserved
        </h1>
      </div>
    </div>
  );
};

export default OwnerFooter;
