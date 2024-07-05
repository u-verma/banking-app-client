import React, { useEffect, useState } from 'react';
import { useAuth } from '../../auth/contexts/AuthContext';
import { getUserDetails, updateUserDetails, deleteUser } from '../../register/service/RegisterService';
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi';
import UserForm from './pages/UserForm';
import { RegisteredUserResponse, UpdateUserProfile } from '../../register/model/UserModel';

const Profile: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState<RegisteredUserResponse | null>(null);
  const [mode, setMode] = useState<'view' | 'edit' | 'list'>('list');
  const [selectedRegisteredUserResponse, setSelectedRegisteredUserResponse] = useState<RegisteredUserResponse | null>(null);

  useEffect(() => {
    if (currentUser?.id) {
      getUserDetails(currentUser.id).then(response => setUserData(response.data));
    }
  }, [currentUser]);

  const handleEdit = (userResponse: RegisteredUserResponse) => {
    setSelectedRegisteredUserResponse(userResponse);
    setMode('edit');
  };

  const handleView = (userResponse: RegisteredUserResponse) => {
    setSelectedRegisteredUserResponse(userResponse);
    setMode('view');
  };

  const handleSave = async (updatedUser: UpdateUserProfile) => {
    if (selectedRegisteredUserResponse?.id) {
      try {
        await updateUserDetails(selectedRegisteredUserResponse.id, updatedUser);
        setUserData({ ...selectedRegisteredUserResponse, ...updatedUser });
        setMode('list');
      } catch (error) {
        console.error('Error updating user details:', error);
      }
    }
  };

  const handleDelete = async (user: RegisteredUserResponse) => {
    if (user?.id) {
      await deleteUser(user.id);
      logout();
    }
  };

  const renderActions = (user: RegisteredUserResponse) => (
    <div className="flex space-x-6">
      <button className="flex items-center" onClick={() => handleView(user)}>
        <FiEye className=" text-blue-500"  size={20} />
      </button>
      <button className="flex items-center" onClick={() => handleEdit(user)}>
        <FiEdit className=" text-green-500" size={20} />
      </button>
      <button className="flex items-center" onClick={() => handleDelete(user)}>
        <FiTrash className="text-red-500" size={20}/>
      </button>
    </div>
  );

  return (
    <div className='flex flex-col fixed h-screen w-screen'>
      <div className="flex w-4/5 item-center justify-center h-5/6 overflow-scroll mt-3">
        {mode === "list" && userData ? (
          <div className="w-5/6">
            <table className="min-w-full bg-gray-300 border border-gray-300">
              <thead className=''>
                <tr className=''>
                  <th className="py-2 px-4 border-b text-left text-sky-900">ID</th>
                  <th className="py-2 px-4 border-b text-left text-sky-900">First Name</th>
                  <th className="py-2 px-4 border-b text-left text-sky-900">Last Name</th>
                  <th className="py-2 px-4 border-b text-left text-sky-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-slate-900">{userData.id}</td>
                  <td className="py-2 px-4 border-b text-slate-900">{userData.firstName}</td>
                  <td className="py-2 px-4 border-b text-slate-900">{userData.lastName}</td>
                  <td className="py-2 px-4 border-b">{renderActions(userData)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-scroll w-4/5">
            {selectedRegisteredUserResponse && (
              <UserForm
                userModel={selectedRegisteredUserResponse}
                mode={mode}
                onSubmit={mode === "edit" ? handleSave : () => setMode("list")}
              />
            )}
          </div>
        )}
      </div>
      <hr className='border-1 border-stone-900 shadow-blue-700 shadow-2xl mb-0'/>
      <div className="border-2 z-20 bg-stone-900 p-7 ">
      </div>
    </div>
  );
};

export default Profile;
