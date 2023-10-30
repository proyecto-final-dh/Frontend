import { resqpetAPI } from '../../../clients/resqpet-api.client';
import { kc } from '../../../config';
import { APISaveUserDetailsRequest } from '../contracts/user-details.contract';

export const createUserDetails = async (request: APISaveUserDetailsRequest) => {
  const token = kc.token;
  if (!token) throw new Error('No token found');
  const response = await resqpetAPI(token).post('/user-details', request);
  return response.data;
};

export const getUserDetailsById = async (id: string) => {
  const token = kc.token;
  if (!token) throw new Error('No token found');
  const response = await resqpetAPI(token).get(`/user-details/${id}`);
  return response.data;
};
