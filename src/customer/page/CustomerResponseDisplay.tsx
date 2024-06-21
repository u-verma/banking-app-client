import React from 'react';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { CustomerResponse } from '../models/CustomerResponse';

interface CustomerResponseDisplayProps {
    response: CustomerResponse;
    onEdit: () => void;
    onDelete: () => void;
    onView: () => void;
}

const CustomerResponseDisplay: React.FC<CustomerResponseDisplayProps> = ({ response, onEdit, onDelete, onView }) => {
    return (
      <div className="mx-auto border border-gray-300 rounded p-10 bg-gray-100">
            <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">Customer</h2>
                <table className="w-3/4 bg-gray-200 mx-auto">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left">ID</th>
                            <th className="py-2 px-4 border-b text-left">First Name</th>
                            <th className="py-2 px-4 border-b text-left">Last Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">{response.id}</td>
                            <td className="py-2 px-4 border-b">{response.firstName}</td>
                            <td className="py-2 px-4 border-b">{response.lastName}</td>
                            <td className="py-2 px-4 border-b">{response.email}</td>
                            <td className="py-2 px-4 border-b flex flex-col md:flex-row items-start md:items-center">
                                <button className="text-blue-500 mr-2 mb-2 md:mb-0" onClick={onView}><FiEye /></button>
                                <button className="text-green-500 mr-2 mb-2 md:mb-0" onClick={onEdit}><FiEdit /></button>
                                <button className="text-red-500" onClick={onDelete}><FiTrash2 /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerResponseDisplay;
