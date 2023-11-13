export type APIUserDetailsResponse = {
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

export type APIResponseUserDetails = TAPIResponse<APIUserDetailsResponse, unknown>;
