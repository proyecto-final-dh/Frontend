import { resqpetAPI } from '../clients/resqpet-api.client';
import { APIGetBreeds } from '../contracts/breeds.contract';

export const getBreeds = async () => {
  const response = await resqpetAPI().get<APIGetBreeds>(`/breeds/`);
  return response.data;
};
