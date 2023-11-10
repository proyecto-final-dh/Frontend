export type APIGetPetResponse = {
  id: number;
  name: string;
  status: string;
  size: string;
  gender: string;
  description: string;
  breed: {
    id: number;
    name: string;
    species: {
      id: number;
      name: string;
    };
  };
  userDetails: {
    id: number;
    userId: string;
    cellphone: string;
    location: {
      id: number;
      country: string;
      city: string;
      state: string;
    };
  };
};
