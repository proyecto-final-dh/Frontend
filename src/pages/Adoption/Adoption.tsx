import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Loader, MainBanner, Pagination, Title } from '../../components';
import { useEffect, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getLocations } from '../Register/services/locations.service';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import imgBanner from '../../assets/banner-adopti.png';
import useBreakpoint from '../../hooks/use-breakpoint';
import { useLazyGetPetsQuery } from '../../store/apis/resqpet.api';
import { EN_ADOPCION, PetStatusesTypes } from '../../constants/pet-statuses.constants';
import { PetSizesTypes, SIZES } from '../../constants/pet-sizes.constants';
import { IconPawOff } from '@tabler/icons-react';
import { withKeycloakAuth } from '../../config';

const Adoption: React.FC = () => {
  const [getPets, { isFetching: isFetchingPets, isLoading: isLoadingPets, data: pets, isError: isPetsError }] = useLazyGetPetsQuery();

  const { isLg } = useBreakpoint('lg');

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const { data: locations, isLoading: isLoadingLocations, error: errorLocations } = useQuery('locations', getLocations);
  const { data: species, isLoading: isLoadingSpacies, error: errorSpacies } = useQuery('species', getSpecies);
  const { data: breeds, isLoading: isLoadingBreeds, error: errorBreeds } = useQuery('breeds', getBreeds);

  const [location, setLocation] = useState<null | number>(null);
  const [specie, setSpecie] = useState<number | undefined>(undefined);
  const [breed, setBreed] = useState<null | number>(null);
  const [size, setSize] = useState<null | PetSizesTypes>(null);

  const maxPagesToShow = useMemo(() => {
    if (isLg) {
      return 5;
    }
    return 4;
  }, [currentPage, isLg]);

  useEffect(() => {
    if (errorLocations) console.log({ error: errorLocations });
    if (errorSpacies) console.log({ error: errorSpacies });
    if (errorBreeds) console.log({ error: errorBreeds });
    if (isPetsError) console.log({ error: isPetsError });
  }, [errorLocations, errorSpacies, errorBreeds, isPetsError]);

  useEffect(() => {
    const filters = {
      status: EN_ADOPCION as PetStatusesTypes,
      ...(location ? { location } : {}),
      ...(species ? { species: specie } : {}),
      ...(breed ? { breed_id: breed } : {}),
      ...(size ? { pet_size: size } : {}),
      page: currentPage - 1,
    };
    getPets({ queryParams: filters });
  }, [location, specie, breed, size, currentPage]);

  const isLoading = isLoadingLocations || isLoadingSpacies || isLoadingBreeds || isLoadingPets || isFetchingPets;

  const onReset = () => {
    setLocation(null);
    setSpecie(undefined);
    setBreed(null);
    setSize(null);
    setCurrentPage(1);
  };

  return (
    <div className='col-span-full'>
      {isLoading ? (
        <Loader opacity={60} />
      ) : (
        <div className='pb-8'>
          <MainBanner images={imgBanner} />
          <div className='grid grid-rows-none gap-4 p-4 py-8 md:grid-cols-4 lg:grid-cols-4 lg:px-10 md:px-10'>
            <FormControl fullWidth>
              <InputLabel id='location'>Ubicación</InputLabel>
              <Select labelId='location' id='location' value={location} label='Ubicación' onChange={(e) => setLocation(Number(e.target.value))}>
                {locations?.map((l) => (
                  <MenuItem value={l.id} key={l.id}>
                    {l.city}, {l.state}, {l.country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='specie'>Especie</InputLabel>
              <Select labelId='specie' id='specie' value={specie} label='Especie' onChange={(e) => setSpecie(Number(e.target.value))}>
                {species?.map((s) => (
                  <MenuItem value={s.id} key={s.id}>
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='breed'>Raza</InputLabel>
              <Select labelId='breed' id='breed' value={breed} label='Raza' onChange={(e) => setBreed(Number(e.target.value))}>
                {breeds?.map((b) => (
                  <MenuItem value={b.id} key={b.id}>
                    {b.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='size'>Tamaño</InputLabel>
              <Select labelId='size' id='size' value={size} label='Raza' onChange={(e) => setSize(e.target.value as PetSizesTypes)}>
                {SIZES?.map((s) => (
                  <MenuItem value={s} key={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className='flex justify-center w-full gap-4'>
            <button className='w-full py-3 text-center border rounded-full lg:mt-0 max-w-[200px] cursor-pointer' onClick={onReset}>
              Reestablecer
            </button>
          </div>
          {!pets?.content.length && (
            <div className='flex flex-col items-center justify-between gap-8 mt-6'>
              <IconPawOff className='w-20 h-20' />
              <Title variant='h1'>No tenemos mascotas, prueba otro filtro. 🐱🐶🐴</Title>
            </div>
          )}
          {!!pets?.content.length && (
            <div className='flex flex-col gap-8 mt-6'>
              <section className='flex flex-wrap justify-center px-10 gap-7'>
                {pets.content.map((pet) => (
                  <Card
                    key={pet.id}
                    variant={isLg ? 'm' : 's'}
                    id={pet.id.toString()}
                    img={pet.images[0].url}
                    title={pet.name}
                    description={pet.description}
                    buttonLabel='Ver más'
                    onClick={() => navigate(`/pet/${pet.id}`)}
                  />
                ))}
              </section>
              <div className='flex justify-center w-full'>
                <Pagination
                  pages={pets.pageable.totalPages}
                  maxPagesToShow={maxPagesToShow}
                  currentPage={currentPage}
                  onPageChange={(page) => {
                    if (page >= 1 && page <= pets.pageable.totalPages) setCurrentPage(page);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default withKeycloakAuth(Adoption);
