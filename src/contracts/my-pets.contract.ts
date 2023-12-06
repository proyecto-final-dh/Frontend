export type APIMyPetsResponse = {
  pet: {
    id: number;
    name: string;
    status: string;
    size: string;
    gender: string;
    description: string;
    age: number;
    breed: {
      id: number;
      name: string;
      species: {
        id: number;
        name: string;
      };
    };
    userDetails: unknown;
  };
  dateCreationPet: string;
  dateCreationStatus: string;
  images: {
    id: number;
    url: string;
    title: string;
  }[];
};
