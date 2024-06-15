import { useEffect, useState } from "react";
import ViewAccomCard from "../../../components/Cards/ViewAccCard";
import { AuthorizedAxiosAPI } from "../../../utils/AxiosInstance";
import { ClipLoader } from "react-spinners";
import { IoReloadSharp } from "react-icons/io5";
const OwnerAccommodations = () => {
  const fetch = () => {
    setLoading(true);
    AuthorizedAxiosAPI.get("/accommodation/getMine")
      .then((res) => {
        setAccommodations(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const [accommodations, setAccommodations] = useState([]);
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
            {accommodations.slice(0, 9).map((place, index) => {
              return <ViewAccomCard data={place} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerAccommodations;
