import axios from 'axios';
import { CustomerRequest } from '../models/CustomerRequest';

const API_URL = 'http://localhost:8080/api/v1/customer';

export const registerCustomer = async (customer: CustomerRequest) => {
  try {
    console.log("Sending request to backend with data:", customer);
    const response = await axios.post(`${API_URL}/register`, customer);
    console.log("Response from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in API request:", error);
    throw error;
  }
};
