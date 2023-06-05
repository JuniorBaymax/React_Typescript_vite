import type { AxiosResponse } from 'axios';
import { apiClient } from './apiClient';
import { orderDetailsResponse, orderDetailsType } from '~/types/orderTypes';

// 1;
// 50;
// 1;
// 30;
// 8;
// OPEN;
// 30;
// [];

export async function getAllOrders(payload: any): Promise<any> {
  const form = new FormData();
  // const { page, ticketType, createdBy, pageSize } = payload;
  form.append('pageNumber', payload.page);
  form.append('dataCount', payload.pageSize);
  form.append('active', payload.active);
  form.append('user_id', payload.user_id);
  form.append('user_role', payload.user_role);
  form.append('ticket_type', payload.ticket_type);
  form.append('createdBy', payload.createdBy);
  form.append('filterParams', JSON.stringify(payload.filterParams));
  const response: AxiosResponse<any> = await apiClient.post('ticket/getAllTickets', form);
  return response.data;
}

export async function getOrderDetails(params: orderDetailsType): Promise<orderDetailsResponse> {
  const response: AxiosResponse<orderDetailsResponse> = await apiClient.get(
    `ticket/get/${params.ticketID}/${params.SCREENTYPE}`
  );
  return response.data;
}
