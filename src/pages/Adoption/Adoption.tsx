import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { MainBanner, Pagination } from '../../components';
import imgBanner from '../../assets/banner-adopti.png';
import { useEffect, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { getLocations } from '../Register/services/locations.service';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';
import { Card } from '../../components/Card';
import useBreakpoint from '../../hooks/use-breakpoint';
import { getPetsByStatus } from '../PetDetail/services/pet.service';
import images from './lib/data';
import withKeycloakAuth from '../../config/withKeycloakAuth';
import { useNavigate } from 'react-router-dom';

const Adoption = () => {
  const navigate = useNavigate();
  const EN_ADOPCION = 'EN_ADOPCION';

  const [currentPage, setCurrentPage] = useState(1);

  const { data: pets } = useQuery(['pet', currentPage], () => getPetsByStatus({ status: EN_ADOPCION, page: currentPage - 1 }));
  const { data: locations, isLoading: isLoadingLocations, error: errorLocations } = useQuery('locations', getLocations);
  const { data: species, isLoading: isLoadingSpacies, error: errorSpacies } = useQuery('species', getSpecies);
  const { data: breeds, isLoading: isLoadingBreeds, error: errorBreeds } = useQuery('breeds', getBreeds);

  const [location, setLocation] = useState<null | number>(null);
  const [specie, setSpecie] = useState<null | number>(null);
  const [breed, setBreed] = useState<null | number>(null);

  useEffect(() => {
    if (errorLocations) console.log({ error: errorLocations });
    if (errorSpacies) console.log({ error: errorSpacies });
    if (errorBreeds) console.log({ error: errorBreeds });
  }, [errorLocations, errorSpacies, errorBreeds]);

  const { isLg } = useBreakpoint('lg');

  const maxPagesToShow = useMemo(() => {
    if (isLg) {
      return 5;
    }
    return 4;
  }, [currentPage, isLg]);

  return (
    <div className='col-span-full'>
      {isLoadingLocations || !locations?.length || isLoadingSpacies || !species?.length || isLoadingBreeds || !breeds?.length ? (
        <>Aca deberia ir un skeleton o spinner...</>
      ) : (
        <div className='pb-8'>
          <MainBanner images={imgBanner} />
          <div className='grid grid-rows-none gap-4 p-4 py-8 md:grid-cols-4 lg:grid-cols-4 lg:px-10 md:px-10'>
            <FormControl fullWidth>
              <InputLabel id='location'>Ubicación</InputLabel>
              <Select labelId='location' id='location' value={location} label='Ubicación' onChange={(e) => setLocation(Number(e.target.value))}>
                {locations.map((l) => (
                  <MenuItem value={l.id} key={l.id}>
                    {l.city}, {l.state}, {l.country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='specie'>Especie</InputLabel>
              <Select labelId='specie' id='specie' value={specie} label='Especie' onChange={(e) => setSpecie(Number(e.target.value))}>
                {species.map((s) => (
                  <MenuItem value={s.id} key={s.id}>
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='breed'>Raza</InputLabel>
              <Select labelId='breed' id='breed' value={breed} label='Raza' onChange={(e) => setBreed(Number(e.target.value))}>
                {breeds.map((b) => (
                  <MenuItem value={b.id} key={b.id}>
                    {b.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <button className='w-full py-3 text-center rounded-full bg-primary lg:mt-0'>Buscar</button>
          </div>
          {pets && (
            <section className='flex flex-col gap-8'>
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
              <section className='flex flex-wrap justify-center px-10 gap-7'>
                {pets.content.map((pet, index) => (
                  <Card
                    key={pet.id}
                    variant={isLg ? 'm' : 's'}
                    id={pet.id.toString()}
                    img={images[index]}
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
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default withKeycloakAuth(Adoption);
