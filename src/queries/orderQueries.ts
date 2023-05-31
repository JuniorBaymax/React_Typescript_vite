import { useMutation } from '@tanstack/react-query';
import { getAllOrders } from '~/api/orderApi';

export function useOrders() {
  return useMutation((postId: any) => getAllOrders(postId));
}
