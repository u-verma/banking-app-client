import React, { useEffect, useRef } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, disabled = false, className }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  }, [value]);

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="text-blue-900 text-sm font-mono font-bold mb-1 ml-3" htmlFor={placeholder}>
        {placeholder}
      </label>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>)} // Trigger onChange onBlur
        className={`
          ${disabled ? 'bg-slate-300 text-gray-700' : 'bg-slate-100 text-black'}
          p-2 rounded-full 
          border-2 
          border-blue-700 
          focus:outline-none 
          hover:border-green-500 
          focus:border-green-500`}
      />
    </div>
  );
};

export default Input;
