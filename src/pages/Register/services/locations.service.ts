import { resqpetAPI } from '../../../clients/resqpet-api.client';
import { APIGetLocations } from '../contracts/locations.contract';

export const getLocations = async () => {
  const response = await resqpetAPI().get<APIGetLocations>(`/locations`);
  return response.data;
};
