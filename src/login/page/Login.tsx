import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/core/Container';
import InputField from '../../components/core/InputField';
import Button from '../../components/core/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Logged in with:', { email, password });
    navigate('/dashboard'); // Navigate to the dashboard after login
  };

  return (
    <Container>
      <div className="w-1/3 flex justify-center mx-auto bg-gray-200 ">
        <form onSubmit={handleLogin} className='w-full p-4'>
        <h1 className="text-2xl font-bold mb-10 text-center">Login</h1>
          <InputField label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField label="Password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button className="w-full" label="Login" onClick={() => {}} />
        </form>
      </div>
    </Container>
  );
};

export default Login;
