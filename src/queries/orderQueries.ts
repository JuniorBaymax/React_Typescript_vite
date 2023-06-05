import { useMutation, useQuery } from '@tanstack/react-query';
import { getAllOrders, getOrderDetails } from '~/api/orderApi';
import { orderDetailsType } from '~/types/orderTypes';

const useOrdersQuery = (payload: any) => {
  return useQuery(['orders', payload], () => getAllOrders(payload));
};

export const useOrderDetailsQuery = (payload: orderDetailsType) => {
  return useQuery(['orderItem', payload], () => getOrderDetails(payload));
};

export default useOrdersQuery;
