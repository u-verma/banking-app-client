import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut } from 'react-icons/fi';


const Header: React.FC = () => {
  return (
    <header className={`flex w-min-full bg-gray-900 text-white p-4`}>
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <FiHome size={24} />
          <span>Home</span>
        </Link>
      </div>
     <nav className="flex items-center space-x-4 ml-auto">
        <Link to="/login">Login</Link>
        <button className="flex items-center space-x-2">
          <FiLogOut size={24} />
          <span>Logout</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
