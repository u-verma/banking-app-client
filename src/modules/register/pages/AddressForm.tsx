import React from 'react';
import Input from '../../core/components/Input';
import Option from '../../core/components/Option';
import { Address, AddressType } from '../model/UserModel';
import { FiMinusCircle } from 'react-icons/fi';

interface AddressFormProps {
  address: Address;
  index: number;
  onChange: (index: number, field: keyof Address, value: string) => void;
  onRemove?: (index: number) => void;
  disabled?: boolean;
  addressTypes: AddressType[];
}

const AddressForm: React.FC<AddressFormProps> = ({ address, index, onChange, onRemove, disabled=false, addressTypes }) => {
  return (
    <div className="address-container" key={index}>
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-xl font-mono text-sky-950 ml-8">Address {index + 1}</h3>
        {onRemove && (
          <FiMinusCircle
            size={24}
            className="text-red-500 hover:text-red-700 cursor-pointer mr-9 mt-4"
            onClick={() => onRemove(index)}
          />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <Option
          value={address.type || ''}
          onChange={(e) => onChange(index, 'type', e.target.value)}
          options={addressTypes}
          placeholder="Address Type"
          disabled={disabled}
        />
        <Input
          type="text"
          placeholder="Street"
          value={address.street}
          onChange={(e) => onChange(index, 'street', e.target.value)}
          disabled={disabled}
        />
        <Input
          type="text"
          placeholder="City"
          value={address.city}
          onChange={(e) => onChange(index, 'city', e.target.value)}
          disabled={disabled}
        />
        <Input
          type="text"
          placeholder="State"
          value={address.state}
          onChange={(e) => onChange(index, 'state', e.target.value)}
          disabled={disabled}
        />
        <Input
          type="text"
          placeholder="Zip Code"
          value={address.zip}
          onChange={(e) => onChange(index, 'zip', e.target.value)}
          disabled={disabled}
        />
        <Input
          type="text"
          placeholder="Country"
          value={address.country}
          onChange={(e) => onChange(index, 'country', e.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default AddressForm;
