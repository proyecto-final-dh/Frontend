import { Pet } from '../contracts/pet';

export const petData: Pet[] = [
  {
    id: 1,
    name: 'Buddy',
    status: 'adoptado',
    size: 'Mediano',
    gender: 'Macho',
    description: 'Buddy es un perro cariñoso y juguetón que adora correr por el parque.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 21,
      name: 'Mestizo',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 1,
      userId: 'b1c7d38f-6a92-412d-9e81',
      cellphone: '555-1111',
      location: {
        id: 1,
        country: 'Colombia',
        city: 'Bogota',
        state: 'BogotÃ¡',
      },
    },
  },
  {
    id: 2,
    name: 'Luna',
    status: 'adoptado',
    size: 'Pequeño',
    gender: 'Hembra',
    description: 'Luna es una gatita elegante y curiosa que le encanta explorar la casa.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 32,
      name: 'Angora turco',
      species: {
        id: 1,
        name: 'gato',
      },
    },
    userDetails: {
      id: 2,
      userId: 'd0e4f6a5-3c78-8421-9eaa',
      cellphone: '555-2222',
      location: {
        id: 2,
        country: 'Colombia',
        city: 'Timbio',
        state: 'Cauca',
      },
    },
  },
  {
    id: 3,
    name: 'Max',
    status: 'adoptado',
    size: 'Grande',
    gender: 'Macho',
    description: 'Max es un perro grande y amigable que siempre estÃ¡ listo para pasear.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 21,
      name: 'Mestizo',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 3,
      userId: 'f9e2d5c1-6b47-129d-8a8e',
      cellphone: '555-3333',
      location: {
        id: 3,
        country: 'Colombia',
        city: 'Medellin',
        state: 'Antioquia',
      },
    },
  },
  {
    id: 4,
    name: 'Molly',
    status: 'adoptado',
    size: 'Mediano',
    gender: 'Hembra',
    description: 'Molly es una perrita dulce y leal que adora estar en compañía de su familia.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 21,
      name: 'Mestizo',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 4,
      userId: '9c4e2f5a1-7b8c-3d2e-1f8a',
      cellphone: '555-4444',
      location: {
        id: 4,
        country: 'Colombia',
        city: 'Cali',
        state: 'Valle Del Cauca',
      },
    },
  },
  {
    id: 5,
    name: 'Rocky',
    status: 'adoptado',
    size: 'Pequeño',
    gender: 'Macho',
    description: 'Rocky es un perro pequeño pero valiente que protege a su familia en todo momento.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 15,
      name: 'Golden Retriever',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 5,
      userId: 'e1a3f2b5-4c7d-8e2d-9a8a',
      cellphone: '555-5555',
      location: {
        id: 5,
        country: 'Colombia',
        city: 'Barranquilla',
        state: 'AtlÃ¡ntico',
      },
    },
  },
  {
    id: 6,
    name: 'Bella',
    status: 'adoptado',
    size: 'Grande',
    gender: 'Hembra',
    description: 'Bella es una perrita grande y gentil que disfruta de largos paseos en el parque.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 18,
      name: 'Labrador Retriever',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 6,
      userId: '2f1d3a5e-6b8c4d2-1e9-8a9e',
      cellphone: '555-6666',
      location: {
        id: 6,
        country: 'Colombia',
        city: 'Cartagena',
        state: 'BolÃ­var',
      },
    },
  },
  {
    id: 7,
    name: 'Charlie',
    status: 'adoptado',
    size: 'Mediano',
    gender: 'Macho',
    description: 'Charlie es un perro amigable y enÃ©rgico que siempre estÃ¡ lleno de energÃ­a.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 14,
      name: 'Dogo Argentino',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 7,
      userId: 'a9e2f5d1-c7b8-1e2d-8a7a',
      cellphone: '555-7777',
      location: {
        id: 7,
        country: 'Colombia',
        city: 'Palermo',
        state: 'Huila',
      },
    },
  },
  {
    id: 8,
    name: 'Daisy',
    status: 'adoptado',
    size: 'Pequeño',
    gender: 'Hembra',
    description: 'Daisy es una perrita pequeña y traviesa que adora jugar con sus juguetes.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 3,
      name: 'Bichon Frise',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 8,
      userId: '5b1c7e9d2-4c3d8-2e1d-1a9a',
      cellphone: '555-8888',
      location: {
        id: 8,
        country: 'Colombia',
        city: 'Cucuta',
        state: 'Norte De Santander',
      },
    },
  },
  {
    id: 9,
    name: 'Cooper',
    status: 'adoptado',
    size: 'Grande',
    gender: 'Macho',
    description: 'Cooper es un perro grande y protector que siempre cuida de su familia.',
    image: [
      {
        id: 1,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511666372-62fc211f8377?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        alt: 'string',
        url: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    breed: {
      id: 21,
      name: 'Mestizo',
      species: {
        id: 2,
        name: 'perro',
      },
    },
    userDetails: {
      id: 9,
      userId: '1a2e3f5d7-6b8c-4d3e-2f1a',
      cellphone: '555-9999',
      location: {
        id: 9,
        country: 'Colombia',
        city: 'Soledad',
        state: 'AtlÃ¡ntico',
      },
    },
  },
];
