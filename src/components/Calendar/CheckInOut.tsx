/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker } from "@mantine/dates";

const CheckInCheckOutDates = ({
  value,
  onChange,
  min,
  max,
}: {
  value: Date | null;
  onChange: (value: Date | null) => void;
  min?: Date | any;
  max?: Date | any;
}) => {
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
    />
  );
};
export default CheckInCheckOutDates;
