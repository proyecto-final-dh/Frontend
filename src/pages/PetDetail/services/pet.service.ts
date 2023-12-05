import { resqpetAPI } from '../../../clients/resqpet-api.client';
import { PetWithOwner } from '../../../contracts/pet';
import { APIPageableGetPetsByStatusResponse } from '../contracts/pets-by-status.contract';
import petsByStatusMapper from '../mappers/pets-by-status.mapper';

export const getPetById = async (id: string) => {
  const response = await resqpetAPI().get<TAPIResponse<PetWithOwner, object>>(`/pets/${id}`);
  return response.data.data;
};

export const getPetsByStatus = async ({ page = 0, size = 9, status }: { status: string; page?: number; size?: number }) => {
  const response = await resqpetAPI().get<APIPageableGetPetsByStatusResponse>(`/pets/status`, { params: { status, page, size } });
  return petsByStatusMapper.toFront(response.data);
};
