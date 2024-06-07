import { DatePicker } from '@mantine/dates';

const CheckInCheckOutDates = ({value, onChange}: {value: Date | null, onChange: (value: Date | null)=> void})=> {
  return <DatePicker size='md' allowDeselect value={value} onChange={onChange} monthsListFormat='MM' yearsListFormat='YY'/>;
}
export default CheckInCheckOutDates;