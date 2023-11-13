import { resqpetAPI } from '../clients/resqpet-api.client';
import { APIResponseUserDetails } from '../contracts/user-details.contract';

export const getUserDetailsByKcId = async (id: string) => {
  const response = await resqpetAPI().get<APIResponseUserDetails>(`/user-details/user/${id}`);
  return response.data;
};
