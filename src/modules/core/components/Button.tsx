import React from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        p-2 rounded-full text-white
        font-mono text-lg
        transition duration-200 ease-in-out
        bg-blue-800
        hover:bg-green-950  
        shadow-blue-400
        shadow-md
        border border-white 
        flex items-center justify-center
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
