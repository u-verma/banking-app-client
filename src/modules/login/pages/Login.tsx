import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../auth/contexts/AuthContext";
import loginPageImage from "../../../assets/LoginPage.png";
import backgroundImage from "../../../assets/home.png";
import HomeHeader from "../../core/components/HomeHeader";
import Input from "../../core/components/Input";
import Button from "../../core/components/Button";
import { User } from '../../register/model/UserModel';

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    const user: User = { id: '', username, passowrd: password, confirmPassword: password }; // Dummy user object
    login(user); // Store the user data including ID
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col h-screen">
      <HomeHeader />
      <div className="flex flex-grow items-center justify-center bg-green-950">
        <div className="flex w-5/6 h-4/5 bg-white rounded-full shadow-2xl overflow-auto opacity-90 z-50">
          <div className="w-1/2 p-2 flex flex-col items-end justify-center">
            <img src={loginPageImage} alt="Illustration" />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center bg-slate-400 opacity-90 z-10 ">
            <form className="flex flex-col space-y-8 items-center justify-center w-2/3">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={handleLogin} className="w-full">Login</Button>
            </form>
            
            <div className="flex flex-col items-center justify-between p-2 font-mono">            
              <div>
                <span className="text-orange-800">Don't have an account? </span>
                <NavLink to="/register" className=" text-blue-700 hover:underline">Sign Up Here</NavLink>
              </div>
              <div className="mt-2">
                <span className="text-orange-800">Forgot Password? </span>
                <NavLink to="/forgot-password" className="text-blue-700 hover:underline">Click Here</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-80 z-5">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover"/>
        </div> 
      </div>
    </div>
  );
};

export default Login;
