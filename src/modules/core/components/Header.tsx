import React from 'react';
import { FiBell } from 'react-icons/fi';
import { CgProfile } from "react-icons/cg";

const Header: React.FC = () => {
  return (
    <header className="flex p-3.5 shadow-sky-800 shadow-lg w-full justify-end">
        <CgProfile className="mr-4 ml-2 text-green-900" size={25} />
        <FiBell className="mr-2 text-red-600" size={25} />
    </header>
  );
};

export default Header;
