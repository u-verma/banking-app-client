import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../../../assets/home.png'; // Replace with the actual path to your background image
import HomeHeader from '../../core/components/HomeHeader';

const Home: React.FC = () => {
  return (
    <div className='flex-1'>
      <HomeHeader/>
      <div className="flex items-center justify-center h-screen bg-sky-950 text-white z-10">
        <div className="text-center z-20">
          <div className="text-5xl mb-4 font-mono">E-Banking & Financial Security</div>
          <p className="text-lg mb-6 rounded-lg font-mono">Join Here.</p>
          <div className="items-center p-4 justify-between">
              <NavLink to="/login" className="px-7 py-3 mr-3 bg-sky-500 text-blue-900 shadow-white shadow-lg font-bold font-mono rounded-full">Sign In</NavLink>
              <NavLink to="/register" className="px-7 py-3 ml-3 bg-green-500 shadow-white shadow-lg text-blue-900 font-bold font-mono rounded-full">Sign Up</NavLink>
          </div>
        </div>
        <div className="absolute inset-0 opacity-90 z-5">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover"/>
        </div>
       </div>
    </div>
  );
};

export default Home;
