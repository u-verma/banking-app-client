import React, { useState } from 'react';
import { registerCustomer, getCustomerById } from '../service/apiService';
import { CustomerRequest } from '../models/CustomerRequest';
import { CustomerResponse } from '../models/CustomerResponse';
import Container from '../../components/core/Container';
import CustomerFormFields from './CustomerFormFields';
import CustomerFormButtons from './CustomerFormButtons';
import CustomerResponseDisplay from './CustomerResponseDisplay';

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

  const [response, setResponse] = useState<CustomerResponse | null>(null);
  const [viewMode, setViewMode] = useState<'view' | 'edit' | null>(null);

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
      setResponse(response);
      setViewMode(null);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const handleEdit = async () => {
    if (response) {
      const customerData = await getCustomerById(response.id);
      setFormValues(customerData);
      setViewMode('edit');
    }
  };

  const handleDelete = () => {
    // Implement delete functionality
    alert("Delete functionality to be implemented");
  };

  const handleView = async () => {
    if (response) {
      const customerData = await getCustomerById(response.id);
      setFormValues(customerData);
      setViewMode('view');
    }
  };

  return (
    <Container>
      {!response || viewMode ? (
        <div className="w-3/4 mx-auto border border-gray-300 rounded p-10 bg-gray-300">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {viewMode === 'view' ? 'View Customer' : viewMode === 'edit' ? 'Edit Customer' : 'Register'}
          </h1>
          <form onSubmit={handleSubmit}>
            <CustomerFormFields
              formValues={formValues}
              handleInputChange={handleInputChange}
              handleAddressChange={handleAddressChange}
              addAddress={addAddress}
              removeAddress={removeAddress}
              handleDateChange={handleDateChange}
              viewMode={viewMode}
            />
            <CustomerFormButtons handleSubmit={handleSubmit} viewMode={viewMode} />
          </form>
        </div>
      ) : (
        <CustomerResponseDisplay
          response={response}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      )}
    </Container>
  );
};

export default CustomerRegister;
