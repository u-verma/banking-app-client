import React, { useState, useEffect } from 'react';
import Input from '../../../core/components/Input';
import DatePicker from '../../../core/components/DatePicker';
import Button from '../../../core/components/Button';
import { Address, AddressType, RegisterUserRequest, UpdateUserProfile, UserType } from '../../../register/model/UserModel';
import AddressForm from '../../../register/pages/AddressForm';
import Option from '../../../core/components/Option';
import { FiPlusCircle } from 'react-icons/fi';

const addressTypes = [AddressType.HOME, AddressType.WORK, AddressType.OTHER];
const userTypes = [UserType.ADMIN, UserType.CUSTOMER, UserType.EMPLOYEE];

interface UserFormProps {
  userModel?: RegisterUserRequest | UpdateUserProfile;
  mode: 'view' | 'edit' | 'register';
  onSubmit: (userModel: RegisterUserRequest | UpdateUserProfile) => void;
}

const UserForm: React.FC<UserFormProps> = ({ userModel, mode, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState(userModel?.firstName || '');
  const [lastName, setLastName] = useState(userModel?.lastName || '');
  const [userType, setUserType] = useState<UserType | ''>(userModel?.userType || '');
  const [email, setEmail] = useState(userModel?.email || '');
  const [phone, setPhone] = useState(userModel?.phone || '');
  const [dateOfBirth, setDateOfBirth] = useState<String | null>(userModel?.dateOfBirth || null);
  const [addresses, setAddresses] = useState<Address[]>(userModel?.addresses || [
    { type: '', street: '', city: '', state: '', zip: '', country: '' },
  ]);

  useEffect(() => {
    if (userModel && 'username' in userModel) {
      setUsername(userModel.username || '');
      setPassword(userModel.password || '');
      setConfirmPassword(userModel.confirmPassword || '');
    }
  }, [userModel]);

  const handleAddressChange = (index: number, field: keyof Address, value: string) => {
    const newAddresses = [...addresses];
    if (field === 'type') {
      newAddresses[index][field] = value !== '' ? value as AddressType : AddressType.OTHER;
    } else {
      newAddresses[index][field] = value;
    }
    setAddresses(newAddresses);
  };

  const addAddress = () => {
    setAddresses([
      ...addresses,
      { type: '', street: '', city: '', state: '', zip: '', country: '' },
    ]);
  };

  const removeAddress = (index: number) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (mode === 'register') {
      const registerRequest: RegisterUserRequest = {
        username,
        password,
        confirmPassword,
        firstName,
        lastName,
        userType,
        email,
        phone,
        dateOfBirth,
        addresses
      };
      onSubmit(registerRequest);
    } else {
      const updateUserProfile: UpdateUserProfile = {
        firstName,
        lastName,
        userType,
        email,
        phone,
        dateOfBirth,
        addresses
      };
      onSubmit(updateUserProfile);
    }
  };

  return (
    <div className="bg-slate-300 p-14 rounded-3xl border-2 border-s-white w-full max-w-4xl">
      <h2 className="text-3xl font-mono text-center mb-4 text-sky-950 rounded-full">{mode === 'register' ? 'Registration Form' : mode === 'edit' ? 'Edit Profile' : 'View Profile'}</h2>
      <form className=''>
        <div className="grid grid-cols-1">
          {mode === 'register' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={mode === 'view'}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={mode === 'view'}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={mode === 'view'}
              />
              
            </div>
            
          )}
          <hr className="border-1 border-slate-400 shadow shadow-white mr-8 ml-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <Option
              value={userType || ''}
              onChange={(e) => setUserType(e.target.value as UserType)}
              options={userTypes}
              placeholder="User Type"
              disabled={mode === 'view'}
            />
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={mode === 'view'}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={mode === 'view'}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={mode === 'view'}
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={mode === 'view'}
            />
            <DatePicker
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={setDateOfBirth}
              disabled={mode === 'view'}
            />
          </div>
        </div>
        <hr className="border-1 border-slate-400 shadow shadow-white mr-8 ml-8" />
        <div>
          {addresses.map((address, index) => (
            <AddressForm
              key={index}
              index={index}
              address={address}
              onChange={handleAddressChange}
              onRemove={addresses.length > 1 && mode !== 'view' ? removeAddress : undefined}
              addressTypes={addressTypes}
              disabled={mode === 'view'}
            />
          ))}
          {mode !== 'view' && (
            <div className="flex justify-end mr-9">
              <FiPlusCircle
                size={24}
                className="text-green-600 hover:text-green-950 cursor-pointer"
                onClick={addAddress}
              />
            </div>
          )}
        </div>
        {mode !== 'view' && (
          <div className="ml-8 mr-8">
            <Button className="mt-10 w-full" onClick={handleSubmit}>
              {mode === 'register' ? 'Register' : 'Save'}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserForm;
