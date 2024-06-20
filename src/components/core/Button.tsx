import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  className?: string; // Add className as an optional prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", icon, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
