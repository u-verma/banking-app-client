import React, { useEffect, useRef } from 'react';

interface OptionProps {
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: (string | number)[];
  placeholder: string;
  disabled?: boolean;
  className?: string;
}

const Option: React.FC<OptionProps> = ({ value, onChange, options, placeholder, disabled = false, className }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.value = value as string;
    }
  }, [value]);

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="text-blue-900 text-sm font-mono font-bold mb-1 ml-3" htmlFor={placeholder}>
        {placeholder}
      </label>
        <select
        ref={selectRef}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={(e) => onChange(e as React.ChangeEvent<HTMLSelectElement>)} // Trigger onChange onBlur
        className={`
        ${disabled ? 'bg-slate-300 text-gray-700' : 'bg-slate-100 text-black'}
            p-2 rounded-full border-2 
            border-blue-700 
            focus:outline-none 
            hover:border-green-500 
            focus:border-green-500 
            ${className}`}
        >
        <option value="">{"Select " + placeholder}</option>
        {options.map((option) => (
            <option key={option} value={option}>
            {option}
            </option>
        ))}
        </select>
    </div>
  );
};

export default Option;
