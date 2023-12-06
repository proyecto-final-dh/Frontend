import { resqpetAPI } from '../../../clients/resqpet-api.client';
import { APISaveUserDetailsRequest } from '../contracts/user-details.contract';

export const createUserDetails = async (request: APISaveUserDetailsRequest) => {
  const response = await resqpetAPI().post('/user-details', request);
  return response.data;
};

export const getUserDetailsById = async () => {
  const response = await resqpetAPI().get(`/users`);
  // const response = await resqpetAPI().get(`/user-details/user/${id}`);
  return response.data;
};
