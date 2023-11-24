import { APIPagination } from '../@types/api-pagination';
import { PetSizesTypes } from '../constants/pet-sizes.constants';
import { PetStatusesTypes } from '../constants/pet-statuses.constants';
import { Pet } from './pet';

export type APIGetPetsResponse = Pet;

export type APIPageableGetPetsResponse = APIPagination<APIGetPetsResponse>;

export type TPageableGetPetsResponse = TPagination<Pet>;

export type APIGetPetsWithFiltersQueryParams = {
  location?: number;
  species?: number;
  breed_id?: number;
  pet_size?: PetSizesTypes;
  status?: PetStatusesTypes;
  page?: number;
  size?: number;
};
