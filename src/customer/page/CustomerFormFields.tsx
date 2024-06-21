import React from 'react';
import InputField from '../../components/core/InputField';
import CustomDatePicker from '../../components/core/CustomDatePicker';
import AddressField from './AddressField';
import { CustomerRequest } from '../models/CustomerRequest';
import { FiPlus } from 'react-icons/fi';

interface CustomerFormFieldsProps {
  formValues: CustomerRequest;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleAddressChange: (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  addAddress: () => void;
  removeAddress: (index: number) => void;
  handleDateChange: (date: Date | null) => void;
  viewMode: 'view' | 'edit' | null;
}

const CustomerFormFields: React.FC<CustomerFormFieldsProps> = ({
  formValues,
  handleInputChange,
  handleAddressChange,
  addAddress,
  removeAddress,
  handleDateChange,
  viewMode
}) => {
  return (
    <div className="space-y-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="First Name"
          name="firstName"
          type="text"
          value={formValues.firstName}
          onChange={handleInputChange}
          disabled={viewMode === 'view'}
        />
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          value={formValues.lastName}
          onChange={handleInputChange}
          disabled={viewMode === 'view'}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
          disabled={viewMode === 'view'}
        />
        <InputField
          label="Phone"
          name="phone"
          type="text"
          value={formValues.phone}
          onChange={handleInputChange}
          disabled={viewMode === 'view'}
        />
        <label className="block text-gray-700 text-sm font-bold mb-0" htmlFor="dateOfBirth">
          Date of Birth
        </label>
        <label></label>
        <CustomDatePicker
          selected={(formValues.dateOfBirth && new Date(formValues.dateOfBirth)) || null}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          disabled={viewMode === 'view'}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold mb-4 mt-6">Address</h2>
        {viewMode !== 'view' && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault(); // Prevent default action
              e.stopPropagation(); // Stop event bubbling
              addAddress();
            }}
            className="bg-green-500 hover:bg-green-800 text-white text-center rounded p-2"
          >
            <FiPlus size={20} />
          </button>
        )}
      </div>
      {formValues.addresses.map((address, index) => (
        <AddressField
          key={index}
          index={index}
          address={address}
          onChange={handleAddressChange}
          remove={removeAddress}
          disabled={viewMode === 'view'}
        />
      ))}
    </div>
  );
};

export default CustomerFormFields;
