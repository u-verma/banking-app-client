import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  dateFormat?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange, dateFormat = "yyyy-MM-dd" }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat={dateFormat}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
    />
  );
};

export default CustomDatePicker;
