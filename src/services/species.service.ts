import { resqpetAPI } from '../clients/resqpet-api.client';
import { APIGetSpecies } from '../contracts/species.contract';

export const getSpecies = async () => {
  const response = await resqpetAPI().get<APIGetSpecies>(`/species/`);
  return response.data;
};
