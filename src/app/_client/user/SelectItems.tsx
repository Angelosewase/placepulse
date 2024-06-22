/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AxiosAPI } from "../../../utils/AxiosInstance";
import {
  FETCH_ACCOMMODATIONS_FAIL,
  FETCH_ACCOMMODATIONS_SUCCESS,
} from "../../../actions/AccommodationActions";
import LandingSelect from "../../../components/Inputs/LandingSelect";
import { IoSearch } from "react-icons/io5";

import CalendarPicker from "./CalendarPicker";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const SelectComponent = () => {
  const dispatch = useDispatch();
  const [, setLoading] = useState(true);
  const [selected, setSelected] = useState<any>("");
  const [selectedCheckIn, setSelectedCheckIn] = useState(new Date());
  const [selectedCheckOut, setSelectedCheckOut] = useState(new Date());
  const formatDate = (date: Date | null, text?: string) => {
    return date ? format(date, "MMMM dd") : `Select ${text}`;
  };
  const fetchAccommodations = () => {
    setLoading(true);
    AxiosAPI.get("/accommodation/all")
      .then((res) => {
        dispatch({
          type: FETCH_ACCOMMODATIONS_SUCCESS,
          payload: { accommodations: res.data.data },
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

  useEffect(() => {
    fetchAccommodations();
  }, []);
  console.log(formatDate(selectedCheckIn));
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between gap-4">
      <div className="w-[30rem] h-14">
        <LandingSelect
          label="Type"
          data={["Hotel", "Garden", "Restaurant", "Conference Room", "Motel"]}
          handleChange={(e: any) => setSelected(e)}
          value={selected}
        />
      </div>
      <CalendarPicker
        label="Check In"
        min={new Date()}
        max={""}
        selectedDate={selectedCheckIn}
        setSelectedDate={setSelectedCheckIn}
      />
      <CalendarPicker
        label="Check Out"
        min={selectedCheckIn}
        max={""}
        selectedDate={selectedCheckOut}
        setSelectedDate={setSelectedCheckOut}
      />
      <div className="">
        <button
          className="rounded-full p-4 bg-[#FF385C] hover:bg-[#E51D56]"
          onClick={() => navigate(`/_client/home/find/${selected}`)}
        >
          <IoSearch color="white" size={23} />
        </button>
      </div>
    </div>
  );
};
export default SelectComponent;
