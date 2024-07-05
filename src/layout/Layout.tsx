import React from 'react';
import Sidebar from '../modules/core/components/Sidebar';
import Header from '../modules/core/components/Header';

interface LayoutProps {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ isSidebarCollapsed, toggleSidebar, children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarCollapsed ? 'w-full' : 'w-auto'}`}>
        <Header />
        <main className="flex-grow p-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
