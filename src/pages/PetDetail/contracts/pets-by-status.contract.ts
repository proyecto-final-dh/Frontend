import { APIPagination } from '../../../@types/api-pagination';
import { Pet } from '../../../contracts/pet';

export type APIGetPetsByStatusResponse = Pet;

export type APIPageableGetPetsByStatusResponse = APIPagination<APIGetPetsByStatusResponse>;

export type TPageableGetPetsByStatusResponse = TPagination<Pet>;
