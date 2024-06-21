import React from 'react';
import InputField from '../../components/core/InputField';
import { FiTrash2 } from 'react-icons/fi';

interface AddressFieldProps {
  index: number;
  address: {
    type: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  disabled?: boolean; // Add disabled property
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  remove: (index: number) => void;
}

const AddressField: React.FC<AddressFieldProps> = ({ index, address, onChange, remove, disabled = false }) => {
  const addressTypes = ["HOME", "WORK", "BILLING"];

  return (
    <div className="space-y-2 border p-4 rounded mb-4 relative">
      <button
        type="button" // Ensure button type is button
        onClick={(e) => {
          e.preventDefault(); // Prevent default action
          e.stopPropagation(); // Stop event bubbling
          remove(index);
        }}
        className="absolute top-2 right-2 text-red-500 focus:outline-none"
      >
        <FiTrash2 size={30} />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Address Type</label>
          <select
            name="type"
            value={address.type}
            disabled={disabled}
            onChange={(e) => onChange(index, e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Type</option>
            {addressTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <InputField label="Street" name="street" type="text" value={address.street} disabled={disabled} onChange={(e) => onChange(index, e)} />
        <InputField label="City" name="city" type="text" value={address.city} disabled={disabled} onChange={(e) => onChange(index, e)} />
        <InputField label="State" name="state" type="text" value={address.state} disabled={disabled} onChange={(e) => onChange(index, e)} />
        <InputField label="ZIP Code" name="zip" type="text" value={address.zip} disabled={disabled} onChange={(e) => onChange(index, e)} />
        <InputField label="Country" name="country" type="text" value={address.country} disabled={disabled} onChange={(e) => onChange(index, e)} />
      </div>
    </div>
  );
};

export default AddressField;
