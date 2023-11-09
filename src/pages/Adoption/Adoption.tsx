import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { MainBanner } from '../../components';
import imgBanner from '../../assets/banner-adopti.png';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getLocations } from '../Register/services/locations.service';
import { getSpecies } from '../../services/species.service';
import { getBreeds } from '../../services/breeds.service';

type AdoptionProps = {
  pages: number;
};

const Adoption = ({ pages }: AdoptionProps) => {
  console.log({ pages });
  const { data: locations, isLoading: isLoadingLocations, error: errorLocations } = useQuery('locations', getLocations);
  const { data: species, isLoading: isLoadingSpacies, error: errorSpacies } = useQuery('species', getSpecies);
  const { data: breeds, isLoading: isLoadingBreeds, error: errorBreeds } = useQuery('breeds', getBreeds);

  const [location, setLocation] = useState<null | number>(null);
  const [specie, setSpecie] = useState<null | number>(null);
  const [breed, setBreed] = useState<null | number>(null);
  /* const [size] = useState(''); */

  useEffect(() => {
    if (errorLocations) console.log({ error: errorLocations });
    if (errorSpacies) console.log({ error: errorSpacies });
    if (errorBreeds) console.log({ error: errorBreeds });
  }, [errorLocations, errorSpacies, errorBreeds]);

  return (
    <div className='col-span-full'>
      {isLoadingLocations || !locations?.length || isLoadingSpacies || !species?.length || isLoadingBreeds || !breeds?.length ? (
        <>Aca deberia ir un skeleton o spinner...</>
      ) : (
        <div>
          {/* Junior section */}
          <MainBanner images={imgBanner} />
          <div className='p-4 grid grid-rows-none gap-4 md:grid-cols-4 lg:grid-cols-4'>
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
            {/*             <FormControl fullWidth>
              <InputLabel id='label-select-size'>Tamaño</InputLabel>
              <Select labelId='label-select-size' id='input-select-size' value={size} label='Ubicación'>
                <MenuItem value={1}>Pequeño</MenuItem>
                <MenuItem value={2}>Mediano</MenuItem>
                <MenuItem value={2}>Grande</MenuItem>
              </Select>
            </FormControl> */}
            <button className='rounded-3xl bg-primary text-center py-3 lg:mt-0 w-full'>Buscar</button>
          </div>
          {/* End Junior Section */}

          {/* Felipe section */}
          {/* End Felipe Section */}
        </div>
      )}
    </div>
  );
};

export default Adoption;
