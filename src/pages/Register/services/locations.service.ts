import { resqpetAPI } from '../../../clients/resqpet-api.client';
import { kc } from '../../../config';
import { APIGetLocations } from '../contracts/locations.contract';

export const getLocations = async () => {
  const token = kc.token;
  if (!token) throw new Error('No token found');
  const response = await resqpetAPI(token).get<APIGetLocations>(`/locations`);
  return response.data;
};
