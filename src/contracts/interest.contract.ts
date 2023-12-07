export type APIInterestResponse = {
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
    location: {
      id: number;
      country: string;
      city: string;
      state: string;
    };
    images: {
      id: number;
      url: string;
      title: string;
    }[];
  };
  owner_information: {
    userId: string;
    userDetailsId: number;
    name: string;
    lastname: string;
    email: string;
    cellphone: string;
    location: {
      id: number;
      country: string;
      city: string;
      state: string;
    };
  };
};

export type APIResponseInterest = TAPIResponse<APIInterestResponse[], unknown>;
