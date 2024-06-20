import React, { useState } from 'react';
import CustomDatePicker from '../../components/core/CustomDatePicker';
import { registerCustomer } from '../service/apiService';
import { CustomerRequest } from '../models/CustomerRequest';
import Container from '../../components/core/Container';
import InputField from '../../components/core/InputField';
import AddressField from './AddressField';
import Button from '../../components/core/Button';
import { FiDownload, FiMinus, FiPlus } from 'react-icons/fi';

const CustomerRegister: React.FC = () => {

  const [formValues, setFormValues] = useState<CustomerRequest>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    addresses: [{
      type: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    }],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddressChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newAddresses = [...formValues.addresses];
    newAddresses[index] = { ...newAddresses[index], [name]: value };
    setFormValues(prevValues => ({
      ...prevValues,
      addresses: newAddresses,
    }));
  };

  const addAddress = () => {
    setFormValues(prevValues => ({
      ...prevValues,
      addresses: [...prevValues.addresses, { type: '', street: '', city: '', state: '', zip: '', country: '' }],
    }));
  };

  const removeAddress = (index: number) => {
    setFormValues(prevValues => ({
      ...prevValues,
      addresses: prevValues.addresses.filter((_, i) => i !== index),
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormValues(prevValues => ({
        ...prevValues,
        dateOfBirth: date.toISOString().split('T')[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
    try {
      const response = await registerCustomer(formValues);
      console.log("Response from server:", response);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Container>
      <div className="w-3/4 mx-auto border border-gray-300 rounded p-10 bg-gray-300">
        <h1 className="text-3xl font-bold mb-8 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="First Name" name="firstName" type="text" value={formValues.firstName} onChange={handleInputChange} />
            <InputField label="Last Name" name="lastName" type="text" value={formValues.lastName} onChange={handleInputChange} />
            <InputField label="Email" name="email" type="email" value={formValues.email} onChange={handleInputChange} />
            <InputField label="Phone" name="phone" type="text" value={formValues.phone} onChange={handleInputChange} />
              <label className="block text-gray-700 text-sm font-bold mb-0" htmlFor="dateOfBirth">
                Date of Birth
              </label>
              <label></label>
              <CustomDatePicker
                selected={(formValues.dateOfBirth && new Date(formValues.dateOfBirth)) || null}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
              />
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold mb-4 mt-6">Address</h2>
            <Button label="" onClick={addAddress} icon={<FiPlus size={20} />} className="bg-green-500 hover:bg-green-800 text-white text-center rounded" />
          </div>
          {formValues.addresses.map((address, index) => (
            <AddressField
              key={index}
              index={index}
              address={address}
              onChange={handleAddressChange}
              remove={removeAddress}
            />
          ))}
          <Button label="Register" type="submit" className="w-full" />
        </form>
      </div>
    </Container>
  );
};

export default CustomerRegister;
