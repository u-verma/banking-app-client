import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from '../modules/auth/contexts/AuthContext';
import Layout from '../layout/Layout';
import Home from '../modules/home/pages/Home';
import Login from '../modules/login/pages/Login';
import Register from '../modules/register/pages/Register';
import Dashboard from '../modules/dashboard/pages/Dashboard';
import Transfer from '../modules/transfer/pages/Transfer';
import Transactions from '../modules/transaction/pages/Transactions';
import Accounts from '../modules/account/pages/Accounts';
import Investments from '../modules/investment/pages/Investments';
import Settings from '../modules/settings/Settings';
import Profile from '../modules/settings/profile/Profile';

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route
            path="*"
            element={
              <Layout isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/transfer" element={<Transfer />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/accounts" element={<Accounts />} />
                  <Route path="/investments" element={<Investments />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/logout" element={<Home />} />
                </Routes>
              </Layout>
            }
          />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
