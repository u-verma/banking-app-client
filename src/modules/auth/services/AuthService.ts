import { UserIdentity } from '../../register/model/UserModel';

export const login = async (username: string, password: string): Promise<UserIdentity> => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: '1', username, passowrd: 'password', confirmPassword: 'password' });
    }, 1000);
  });
};
