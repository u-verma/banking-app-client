export interface Address {
    type: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
  
  export interface CustomerRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    addresses: Address[];
    createdAt?: number;
  }