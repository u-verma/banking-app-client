import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/core/Container';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl textfont-bold mb-8 mt-20">Welcome to Online Banking</h1>
          <div className='flex flex-grow'>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Login
            </Link>
            <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Register
            </Link>
          </div>
      </div>
    </Container>
  );
};

export default Home;
