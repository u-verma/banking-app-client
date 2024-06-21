import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiLock, FiUnlock, FiUserMinus, FiUsers } from 'react-icons/fi';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-700  text-white top-0 left-0 ${isCollapsed ? 'w-15' :'w-35'} transition-width duration-300`}>
      <div className="p-4 flex justify-between items-center">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isCollapsed ? <FiMenu size={24} /> : <FiX size={24} />}
        </button>
      </div>
      <nav className="mt-2">
        <ul className='ml-4 mr-4'>
          <li>
            <Link to="/admin" className="flex hover:bg-gray-700 rounded">
              <FiUnlock size={24} />
              {!isCollapsed && <span className='ml-2'>Admin</span>}
            </Link>
          </li>
          <li>
            <Link to="/user" className="flex mt-6 hover:bg-gray-700 rounded">
              <FiUsers size={24} />
              {!isCollapsed && <span className='ml-2'>Customers</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
