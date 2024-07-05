import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  placeholder: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  disabled?: boolean;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ placeholder, value, onChange, disabled=false, className }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="text-blue-900 text-sm font-mono font-bold mb-1 ml-3" htmlFor={placeholder}>
        {placeholder}
      </label>
        <ReactDatePicker
        selected={value}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="dd-MM-yyyy"
        disabled={disabled}
        className={`
            w-full p-2 rounded-full 
            ${disabled ? 'bg-slate-300 text-gray-700' : 'bg-slate-100 text-black'}
            border-2 
            border-blue-700 
            focus:outline-none 
            focus:border-green-500 
            hover:border-green-500
            ${className}`}
        />
    </div>
  );
};

export default DatePicker;
