export type APISaveUserDetailsRequest = {
  id: string;
  cellphone: string;
  location_id: number;
};
export type APISaveUserDetailsResponse = TAPIResponse<APISaveUserDetailsRequest[], { [x: string]: string }>;
