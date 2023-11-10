import { resqpetAPI } from '../../../clients/resqpet-api.client';
import { APIGetPetResponse } from '../contracts/pet.contract';

export const getPetById = async (id: string) => {
  const response = await resqpetAPI().get<APIGetPetResponse>(`/pets/${id}`);
  return response.data;
};
