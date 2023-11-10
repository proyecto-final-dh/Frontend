import { resqpetAPI } from '../../../clients/resqpet-api.client';
import { Pet } from '../../../contracts/pet';

export const getPetById = async (id: string) => {
  const response = await resqpetAPI().get<Pet>(`/pets/${id}`);
  return response.data;
};

export const getPetsByStatus = async () => {
  const response = await resqpetAPI().get<Pet>(`/pets/status`);
  return response.data;
};
