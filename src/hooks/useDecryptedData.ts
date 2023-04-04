import { decryptData } from '~/utils/encrypt';

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

export const useDecryptedData = (): DecryptedData => {
  const encryptedLocalStorageData = localStorage.getItem('Ukqt');
  const decryptUserEmail = localStorage.getItem('query');

  // eslint-disable-next-line no-undef
  const salt = `${process.env.SALT}`;

  const decryptedUserData = encryptedLocalStorageData
    ? decryptData(encryptedLocalStorageData, salt)
    : null;
  const decrypt_user_email = decryptUserEmail ? decryptData(decryptUserEmail, salt) : null;

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
