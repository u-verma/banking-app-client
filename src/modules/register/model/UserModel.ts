export interface Address {
    type: AddressType | '';
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
  
  export enum AddressType {
    HOME = "HOME",
    WORK = "WORK",
    OTHER = "OTHER"
  }
  
  export enum UserType {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    EMPLOYEE = "EMPLOYEE"
  }

  export interface User {
    id: string;
  }

  export interface UserProfile {
    firstName: string;
    lastName: string;
    userType: UserType | '';
    email: string;
    phone: string;
    dateOfBirth: string | null;
    addresses: Address[];
  }

  export interface UserIdentity {
    username: string | null;
    password: string | null;
    confirmPassword: string | null;
  }
  
  export interface RegisterUserRequest extends UserProfile, UserIdentity{}

  export interface RegisteredUserResponse extends User, UserProfile{}
  
  export interface UpdateUserProfile extends UserProfile {}