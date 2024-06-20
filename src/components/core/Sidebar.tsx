import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiLock, FiUnlock } from 'react-icons/fi';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside className={`bg-gray-700 text-white top-0 left-0 ${isCollapsed ? 'w-20' :'w-40'} transition-width duration-300`}>
      <div className="p-4 flex justify-between items-center">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isCollapsed ? <FiMenu size={24} /> : <FiX size={24} />}
        </button>
      </div>
      <nav className="mt-2">
        <ul className="space-y-0 ml-2">
          <li>
            <Link to="/admin" className="flex justify-between items-center space-x-4 p-2 mr-10 hover:bg-gray-700 rounded">
              <FiUnlock size={24} />
              {!isCollapsed && <span>Admin</span>}
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
