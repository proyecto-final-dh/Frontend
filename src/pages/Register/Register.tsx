import { useAuthProvider, withKeycloakAuth } from '../../config';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { TextDetail, Title, Logo } from '../../components';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { APISaveUserDetailsRequest } from './contracts/user-details.contract';
import { createUserDetails, getUserDetailsById } from './services/register.service';
import { useNavigate } from 'react-router-dom';
import { getLocations } from './services/locations.service';
import { useQuery } from 'react-query';
import cn from 'classnames';

const Register = () => {
  const { keycloak } = useAuthProvider();
  const { data: locations, isLoading: isLoadingLocations, error: errorLocations } = useQuery('locations', getLocations);
  const navigate = useNavigate();

  const [isLoadingUserDetails, setIsLoadingUserDetails] = useState(true);

  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState<null | number>(null);

  const [submitHeight, setSubmitHeight] = useState('0px');
  const submitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitRef.current) {
      setSubmitHeight(`${submitRef.current.clientHeight}px`);
    }
  }, [submitRef]);

  useEffect(() => {
    if (!keycloak.tokenParsed?.sub) return;
    getUserDetailsById(keycloak.tokenParsed?.sub)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        setIsLoadingUserDetails(false);
        console.log({ error });
      });
  }, [keycloak]);

  useEffect(() => {
    if (errorLocations) console.log({ error: errorLocations });
  }, [errorLocations]);

  const disableSubmit = useMemo<boolean>(() => {
    return !phone || !location;
  }, [phone, location]);

  const onSubmit = async () => {
    if (!phone || !location || !keycloak.tokenParsed?.sub) return;
    const request: APISaveUserDetailsRequest = {
      userId: keycloak.tokenParsed.sub,
      cellphone: phone,
      locationId: location,
    };
    try {
      await createUserDetails(request);
      navigate('/');
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <main className='p-8 overflow-hidden lg:flex lg:h-screen lg:p-0 col-span-full'>
      {isLoadingUserDetails || isLoadingLocations || !locations?.length ? (
        <>Aca deberia ir un skeleton o spinner...</>
      ) : (
        <>
          <figure className='relative hidden lg:block g:max-h-screen lg:h-screen lg:overflow-auto lg:w-1/2'>
            <img
              src='https://s3-alpha-sig.figma.com/img/7e70/6adc/138cc549fa73b72f63821d5bc2c1aef5?Expires=1699228800&Signature=H7yl-CLoTC7Ix8ptTMn3KEPYR9Uj3DAgLMQ1PhZX54Dk025988T~vgryENrZD0qVms-d6hdUTxm2L-oAC308y28QFtFoe9GiBb2JMVHsU2z5jbnpeDOgLVNNirth-Yi4zcM6iQAIurDNQ7Y3kzaRGR1ky3y9bgqIvbBVL~RIF-PEFbaLBBmZTXjzNY~huUWf00Yv4dOs2V0h75sgliEogGXs3WYZqa0mpAjgAqZ4Slt3KYUdpmsmt5yJAxnd4pUV33p3gclXn0VKKAnbpnomPqHwONu7Q5Lm-W7B584h8UXX1yeiW0Ff~JsDoKzk9587g9gUt4Fa4NOoK5L3zLNDMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt='register-background'
              className='mx-auto lg:h-full'
            />
            <div className='absolute top-0 left-0 w-1/2 h-full -z-10 bg-primary'></div>
          </figure>
          <section className='lg:w-1/2 lg:px-8 lg:pt-4 lg:overflow-auto lg:pl-0 lg:pr-20'>
            <header className='flex justify-between w-full mb-4 lg:justify-end lg:w-full'>
              <div className='flex flex-col justify-between gap-4 lg:hidden'>
                <button className='cursor-pointer' onClick={window.history.back}>
                  <ChevronLeftIcon className='w-8 h-8 min-w-[32px] min-h-[32px]' />
                </button>
                <Title variant='h2' className='font-bold'>
                  Registro
                </Title>
              </div>
              <Title variant='h1' className='hidden w-full text-center font-regular lg:block'>
                Registro
              </Title>
              <Logo height={92} width={76} variant='blackH' />
            </header>

            <TextDetail size='xs' weight='bold' className='lg:hidden'>
              Completar los siguientes campos:
            </TextDetail>
            <form
              className='mt-4 lg:mt-0'
              style={{ marginBottom: submitHeight }}
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <section className='flex flex-col gap-6'>
                <>
                  <TextField
                    label='Teléfono'
                    variant='outlined'
                    type='text'
                    name='phone'
                    id='phone'
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                    className='w-full'
                    placeholder='Introduce aca tu teléfono'
                  />
                  <FormControl fullWidth>
                    <InputLabel id='location'>Ubicación</InputLabel>
                    <Select labelId='location' label='Ubicación' id='location' value={location} onChange={(e) => setLocation(Number(e.target.value))}>
                      {locations.map((l) => (
                        <MenuItem value={l.id} key={l.id}>
                          {l.city}, {l.state}, {l.country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </>
              </section>
              <section className='lg:relative flex flex-col items-center justify-center w-full gap-6 p-8 bg-[white]' ref={submitRef}>
                <button
                  className={cn('rounded-3xl bg-primary text-center py-3 mt-5 lg:mt-0 w-full', {
                    'opacity-40': disableSubmit,
                  })}
                  type='submit'
                  disabled={disableSubmit}
                >
                  <TextDetail size='s' weight='bold'>
                    Crear cuenta
                  </TextDetail>
                </button>
                <button
                  onClick={() => {
                    keycloak.login();
                  }}
                >
                  <TextDetail size='xs' weight='regular'>
                    ¿Ya tienes cuenta? <span className='font-bold'>Inicia sesión</span>
                  </TextDetail>
                </button>
              </section>
            </form>
          </section>
        </>
      )}
    </main>
  );
};

export default withKeycloakAuth(Register);
