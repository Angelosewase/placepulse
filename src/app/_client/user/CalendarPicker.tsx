/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import CheckInCheckOutDates from "../../../components/Calendar/CheckInOut";
import LandingSelect from "../../../components/Inputs/LandingSelect";

const CalendarPicker = ({
  selectedDate,
  setSelectedDate,
  min,
  max,
  label,
}: {
  selectedDate: Date | any;
  label: string;
  setSelectedDate: (e: Date | any) => void;
  min: Date | any;
  max: Date | any;
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="relative ">
      <div className="w-[20rem] h-14">
        <LandingSelect
          label={label}
          data={[]}
          handleChange={(e: any) => {
            setSelectedDate(e);
          }}
          value={"selectedDate"}
          onClick={() => setShowCalendar(!showCalendar)}
        />
      </div>
      {showCalendar && (
        <div className="absolute top-0 bg-white border rounded-md">
          <div className="absolute bottom-3 bg-inherit rounded-md p-2">
            <CheckInCheckOutDates
              value={selectedDate}
              onChange={(e: Date | any) => setSelectedDate(e)}
              max={max}
              min={min}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPicker;
