export type APIGetBreeds = {
  id: number;
  name: string;
  species: Species;
}[];

export type Species = {
  id: number;
  name: string;
};
