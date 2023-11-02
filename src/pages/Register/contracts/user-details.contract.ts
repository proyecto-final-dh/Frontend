export type APISaveUserDetailsRequest = {
  id?: string;
  userId: string;
  cellphone: string;
  locationId: number;
};
export type APISaveUserDetailsResponse = TAPIResponse<APISaveUserDetailsRequest[], { [x: string]: string }>;
