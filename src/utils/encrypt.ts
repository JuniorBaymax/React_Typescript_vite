import CryptoJS from 'crypto-js';

// function to encrypt data using AES algorithm
export const encryptData = (data: any, salt: any) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();

// function to decrypt data using AES algorithm
export const decryptData = (ciphertext: string, salt: string) => {
  // decrypt the ciphertext using AES algorithm and the provided salt
  const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
  try {
    // parse the decrypted data as a UTF-8 encoded JSON string
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    // if there was an error parsing the data, return null
    return null;
  }
};
