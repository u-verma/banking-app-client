import axios from 'axios';
import { RegisterUserRequest, UpdateUserProfile } from '../model/UserModel';

const API_URL = 'http://localhost:8080/api/v1/user-profile';

export const registerUser = async (registerRequest: RegisterUserRequest) => {
  return axios.post(`${API_URL}/create`, registerRequest);
};

export const getUserDetails = async (userId: string) => {
  return axios.get(`${API_URL}/${userId}`);
};

export const updateUserDetails = async (userId: string, updateUserProfile: UpdateUserProfile) => {
  return axios.put(`${API_URL}/${userId}`, updateUserProfile);
};

export const deleteUser = async (userId: string) => {
  return axios.delete(`${API_URL}/${userId}`);
};
