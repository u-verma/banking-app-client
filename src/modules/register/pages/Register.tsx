import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/contexts/AuthContext';
import HomeHeader from '../../core/components/HomeHeader';
import backgroundImage from '../../../assets/home.png';
import UserForm from '../../settings/profile/pages/UserForm';
import { registerUser } from '../service/RegisterService';
import { RegisterUserRequest, UpdateUserProfile } from '../model/UserModel';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (userRequest: RegisterUserRequest | UpdateUserProfile) => {
    try {
      console.log('date of birth:', userRequest.dateOfBirth);
      const response = await registerUser(userRequest as RegisterUserRequest);
      const registeredUser = response.data;
      console.log('User registered:', registeredUser);
      login(registeredUser); // Store the user data including ID
      navigate('/dashboard'); // Navigate to the Dashboard page
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div className="relative flex flex-col h-min-screen ">
      <HomeHeader />
      <div className="absolute inset-0 opacity-50 z-0">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-grow items-center opacity-80 justify-center text-white p-12 z-20">
        <UserForm mode="register" onSubmit={handleRegister}/>
      </div>
    </div>
  );
};

export default Register;
