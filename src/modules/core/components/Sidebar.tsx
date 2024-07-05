import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiX, FiMenu, FiHome, FiLogOut, 
  FiSettings, FiCreditCard, 
  FiTrendingUp,FiArrowRightCircle, FiUserPlus
} from 'react-icons/fi';
import { GrTransaction } from "react-icons/gr";
import { useAuth } from '../../auth/contexts/AuthContext';  


interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {

  const [isSettingsCollapsed, setIsSettingsCollapsed] = useState(true);
  const { logout } = useAuth();

  const toggleSettingsMenu = () => {
    setIsSettingsCollapsed(!isSettingsCollapsed);
  }

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
  };

  return (
    <aside className={`flex flex-col bg-stone-900 text-white ${isCollapsed ? 'sm:w-20' : 'lg:w-64'} transition-duration-300`}>
      <div className="flex mb-5 shadow-lg shadow-white p-1">
        <button onClick={toggleSidebar} className="focus:outline-none p-2 ml-2">
          {isCollapsed ? <FiMenu size={28} /> : <FiX size={28} />}
        </button>
        {!isCollapsed && <div className="font-bold text-2xl hidden p-2 lg:block">Banking</div>}
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        <ul>
          <li>        
            <NavLink to="/dashboard" className={({ isActive }) => `flex items-center p-3 hover:bg-green-900 rounded-full ${isActive ? 'bg-green-700' : ''}`}>
              <FiHome className="mr-2" size={22}/>
              {!isCollapsed && <span className="hidden lg:block">Dashboard</span>}
            </NavLink>
          </li>     
          <li>
            <NavLink to="/transfer" className={({ isActive }) => `flex items-center p-3 hover:bg-green-900 rounded-full ${isActive ? 'bg-green-700' : ''}`}>
              <FiArrowRightCircle className="mr-2" size={22}/>
              {!isCollapsed && <span className="hidden lg:block">Transfer</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className={({ isActive }) => `flex items-center p-3 hover:bg-green-900 rounded-full ${isActive ? 'bg-green-700' : ''}`}>
              <GrTransaction className="mr-2" size={22}/>
              {!isCollapsed && <span className="hidden lg:block">Transactions</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/accounts" className={({ isActive }) => `flex items-center p-3 hover:bg-green-900 rounded-full ${isActive ? 'bg-green-700' : ''}`}>
              <FiCreditCard className="mr-2" size={22}/>
              {!isCollapsed && <span className="hidden lg:block">Accounts and Cards</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/investments" className={({ isActive }) => `flex items-center p-3 hover:bg-green-900 rounded-full ${isActive ? 'bg-green-700' : ''}`}>
              <FiTrendingUp className="mr-2" size={22}/>
              {!isCollapsed && <span className="hidden lg:block">Investments</span>}
            </NavLink>
          </li>
          <li>
          <button onClick={toggleSettingsMenu} className="flex items-center p-3 hover:bg-green-900 rounded-full w-full focus:outline-none">
              {isSettingsCollapsed ? <FiSettings className="mr-2" size={22}/> : <FiSettings className="mr-2" size={22}/>}
              {!isCollapsed && <span className="hidden lg:block">Settings</span>}
            </button>
            {!isSettingsCollapsed && (
              <ul className="pl-3">
                <li>
                  <NavLink to="/profile" className={({ isActive }) => `flex items-center p-3 hover:bg-green-900 rounded-full ${isActive ? 'bg-green-700' : ''}`}>
                    <FiUserPlus className="mr-2" size={22}/>
                    {!isCollapsed && <span className="hidden lg:block">Profile</span>}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <hr className='border-1 border-gray-600'/>
      <div className="p-2">
        <NavLink to="/logout" onClick={handleLogout} className={({ isActive }) => `flex items-center p-2 hover:bg-red-700 rounded-full ${isActive ? 'bg-red-700' : ''}`}>
          <FiLogOut className="mr-2" size={22}/>
          {!isCollapsed && <span className="hidden lg:block">Log out</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
