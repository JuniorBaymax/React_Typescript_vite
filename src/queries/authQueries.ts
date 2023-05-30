import { useMutation } from '@tanstack/react-query';
import { LoginCredentials, login, sendOtp } from '~/api/authApi';

export function useLogin() {
  return useMutation((credential: LoginCredentials) => login(credential));
}

export function useSendOtpMutation() {
  return useMutation((email: string) => sendOtp(email));
}
