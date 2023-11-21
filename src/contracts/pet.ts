export interface Image {
  id: number;
  alt: string;
  url: string;
}
interface Species {
  id: number;
  name: string;
}

interface Breed {
  id: number;
  name: string;
  species: Species;
}

interface Location {
  id: number;
  country: string;
  city: string;
  state: string;
}

interface UserDetails {
  id: number;
  userId: string;
  cellphone: string;
  location: Location;
}

export interface Pet {
  id: number;
  name: string;
  status: string;
  age: number;
  size: string;
  gender: string;
  description: string;
  image: Image[];
  breed: Breed;
  userDetails: UserDetails;
}
