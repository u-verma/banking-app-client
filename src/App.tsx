import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/core/Header';
import Sidebar from './components/core/Sidebar';
import Container from './components/core/Container';
import Footer from './components/core/Footer';
import Home from './login/page/Home';
import CustomerRegister from './customer/page/CustomerRegister';
import Login from './login/page/Login';
import Dashboard from './dashboard/page/Dashboard';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
          <div className="flex-grow">
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<CustomerRegister />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
