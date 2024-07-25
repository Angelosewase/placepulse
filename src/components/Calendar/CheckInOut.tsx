/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker } from "@mantine/dates";

const CheckInCheckOutDates = ({
  value,
  onChange,
  min,
  max,
  bookedDays,
}: {
  value: Date | null;
  onChange: (value: Date | null) => void;
  min?: Date | any;
  max?: Date | any;
  bookedDays?: any[];
}) => {
  const isDateBooked = (date: Date): any => {
    return bookedDays?.some((booked) => {
      const checkIn = new Date(booked.check_in);
      const checkOut = new Date(booked.check_out);
      return date >= checkIn && date <= checkOut;
    });
  };

  return (
    <DatePicker
      size="md"
      allowDeselect
      value={value}
      minDate={min}
      maxDate={max}
      onChange={onChange}
      monthsListFormat="MM"
      yearsListFormat="YY"
      hideOutsideDates
      autoFocus={true}
      excludeDate={isDateBooked}
    />
  );
};
export default CheckInCheckOutDates;
