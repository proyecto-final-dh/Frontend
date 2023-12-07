export interface Image {
  id: number;
  title: string;
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
  images: Image[];
  breed: Breed;
  userDetails: UserDetails;
}

export type PetWithOwner = {
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
