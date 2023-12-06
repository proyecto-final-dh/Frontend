export type APIInterestResponse = {
  pet_id: number;
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
  interested: boolean;
};

export type APIResponseInterest = TAPIResponse<APIInterestResponse[], unknown>;
