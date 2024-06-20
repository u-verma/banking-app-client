import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomerRequest } from '../../customer/models/CustomerRequest';

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<CustomerRequest | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/customer/profile');
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-sky-200 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Welcome, {userData.firstName} {userData.lastName}</h2>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>Date of Birth: {userData.dateOfBirth}</p>
        <h3 className="text-lg font-bold mt-4">Addresses</h3>
        {userData.addresses.map((address, index) => (
          <div key={index} className="mb-4">
            <p>Type: {address.type}</p>
            <p>Street: {address.street}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>
            <p>Country: {address.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
