import { decryptData } from '~/utils/encrypt';

// Define the interface `DecryptedData` to specify the shape of the decrypted data object
interface DecryptedData {
  userId: number | undefined;
  userName: string | undefined;
  roleId: number | undefined;
  roleName: string | undefined;
  userEmail: string | undefined;
  decrypt_user_email: string | null;
  authToken: string | undefined;
  department_id: number | undefined;
  refreshToken: string | undefined;
}

// Define a custom hook `useDecryptedData` that returns the decrypted data
export const useDecryptedData = (): DecryptedData => {
  const encryptedLocalStorageData = localStorage.getItem('Ukqt'); // Retrieve the encrypted data from localStorage
  const decryptUserEmail = localStorage.getItem('query'); // Retrieve the encrypted user email from localStorage

  // Get the salt value from the environment variables
  // eslint-disable-next-line no-undef
  const salt = `${process.env.SALT}`;

  // Decrypt the encryptedLocalStorageData using the decryptData function
  const decryptedUserData = encryptedLocalStorageData
    ? decryptData(encryptedLocalStorageData, salt)
    : null;

  // Decrypt the decryptUserEmail using the decryptData function
  const decrypt_user_email = decryptUserEmail ? decryptData(decryptUserEmail, salt) : null;

  // Return the decrypted data as an object
  return {
    userId: decryptedUserData?.user_id || decryptedUserData?.userId,
    userName: decryptedUserData?.user_name || decryptedUserData?.userName,
    roleId: decryptedUserData?.role_id || decryptedUserData?.roleId,
    roleName: decryptedUserData?.role_name || decryptedUserData?.roleName,
    userEmail: decryptedUserData?.user_email || decryptedUserData?.userEmail,
    decrypt_user_email,
    authToken: decryptedUserData?.accessToken || decryptedUserData?.authToken,
    department_id: decryptedUserData?.department_id,
    refreshToken: decryptedUserData?.refreshToken || decryptedUserData?.refreshToken,
  };
};
