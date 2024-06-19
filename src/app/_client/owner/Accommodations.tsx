/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ViewAccomCard from "../../../components/Cards/ViewAccCard";
import { AxiosAPI } from "../../../utils/AxiosInstance";
import { ClipLoader } from "react-spinners";
import { IoReloadSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_ACCOMMODATIONS_FAIL,
  FETCH_ACCOMMODATIONS_SUCCESS,
} from "../../../actions/AccommodationActions";
const OwnerAccommodations = () => {
  const dispatch = useDispatch();
  const { accommodations } = useSelector((state: any) => state.accommodations);
  const { token } = useSelector((state: any) => state.auth);
  const fetch = () => {
    setLoading(true);
    AxiosAPI.get("/accommodation/getMine" ,{
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
      .then((res) => {
        dispatch({
          type: FETCH_ACCOMMODATIONS_SUCCESS,
          payload: {
            accommodations: res.data.data,
          },
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="w-full">
      <h1 className="text-2xl font-extrabold">Accommodations Registered</h1>
      <p>All accommodations that you registered in the system</p>

      <div className="w-full">
        <div className="w-full flex justify-end mt-10">
          <button
            className="flex items-center gap-2 bg-blue-500 rounded-sm py-2 px-4"
            onClick={fetch}
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
            {accommodations.slice(0, 9).map((place: any, index: any) => {
              return <ViewAccomCard data={place} key={index} refetch={fetch} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerAccommodations;
