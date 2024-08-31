/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ViewAccomCard from "../../../components/Cards/ViewAccCard";
import { ClipLoader } from "react-spinners";
import { IoReloadSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getAccommodations } from "@/utils/funcs";
import { Link } from "react-router-dom";
const AdminAccommodations = () => {
  const dispatch = useDispatch();
  const { accommodations, loading } = useSelector(
    (state: any) => state.accommodations,
  );
  return (
    <div className="w-full">
      <h1 className="text-2xl font-extrabold">Accommodations Registered</h1>
      <p>All accommodations that you registered in the system</p>

      <div className="w-full">
        <div className="w-full flex justify-end gap-4 mt-10">
          <Link
            to={"/_admin/accommodations/add"}
            className="flex items-center gap-2 bg-blue-500 rounded-sm py-2 px-4"
          >
            <h1 className="font-bold text-white">New</h1>
            <IoReloadSharp color="white" size={23} />
          </Link>
          <button
            className="flex items-center gap-2 bg-blue-500 rounded-sm py-2 px-4"
            onClick={() => getAccommodations({ dispatch })}
          >
            <h1 className="font-bold text-white">Reload</h1>
            <IoReloadSharp color="white" size={23} />
          </button>
        </div>
        {loading ? (
          <div className="w-full flex justify-center my-10">
            <ClipLoader size={20} color="black" />
          </div>
        ) : accommodations.length === 0 ? (
          <div className="w-full mt-3 flex justify-center">
            <h1 className="font-extrabold">No Accommodations Registered Yet</h1>
          </div>
        ) : (
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 my-3 ">
            {accommodations.map((place: any, index: any) => {
              return (
                <ViewAccomCard
                  data={place}
                  key={index}
                  refetch={() => getAccommodations({ dispatch })}
                  type="_admin"
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAccommodations;
