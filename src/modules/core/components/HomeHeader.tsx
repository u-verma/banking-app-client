import React from 'react';
import { FiHome } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const HomeHeader: React.FC = () => {
  return (
    <div className='flex'>
      <div className="p-4 flex justify-between items-center bg-stone-950 shadow-white shadow-xl opacity-90 z-20 w-full">
        <NavLink to="/" className="text-2xl font-bold text-white">
          <FiHome className="mr-4 ml-2 text-white hover:text-blue-600" size={30} />
        </NavLink>
        <nav className="flex font-mono font-1xl space-x-4">
          <NavLink to="/services" className="text-white hover:underline">Services</NavLink>
          <NavLink to="/about" className="text-white hover:underline">About</NavLink>
          <NavLink to="/contact" className="text-white hover:underline">Contact</NavLink>
          <NavLink to="/faq" className="text-white hover:underline">FAQ</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default HomeHeader;
