import React from 'react';

interface SelectFieldProps {
  label: string;
  name: string;
  children: React.ReactNode;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, children, ...props }) => {
  return (
    <div className="mb-4 flex items-center space-x-4">
      <label className="block text-gray-700 text-sm font-bold w-1/4" htmlFor={props.name}>
        {label}
      </label>
      <select
        className="shadow appearance-none border border-gray-400 rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectField;
