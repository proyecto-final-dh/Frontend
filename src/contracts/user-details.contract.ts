export type APIUserDetailsResponse = {
  userDetailsId: number;
  name: string;
  lastname: string;
  email: string;
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
