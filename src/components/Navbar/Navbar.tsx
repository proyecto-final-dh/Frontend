import { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import DrawerMenu from '../Drawer/DrawerMenu';
import { NAVBARROUTES } from './navbarPages';
import Logo from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../../config';
// import withKcContext from '../../hocs/withKcContext';
import { useDispatch } from 'react-redux';
import { resqpetModuleApi } from '../../store/apis/resqpet.api';

const Navbar = () => {
  const dispatch = useDispatch();
  const { keycloak } = useAuthProvider();
  const [value, setValue] = useState('');
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <AppBar sx={{ bgcolor: 'primary.light', width: '100%', position: 'relative' }}>
      <Toolbar>
        {isMatch ? (
          <>
            <button onClick={() => navigate('/')}>
              <Logo width={40} height={50} variant='blackV' />
            </button>
            <DrawerMenu />
          </>
        ) : (
          <>
            <button
              onClick={() => {
                navigate('/');
                setValue('');
              }}
            >
              <Logo width={50} height={60} variant='blackV' />
            </button>
            <Tabs
              sx={{ display: 'flex', flexDirection: 'column', minHeight: '36px', height: '36px', marginLeft: 'auto' }}
              indicatorColor='secondary'
              textColor='inherit'
              value={value}
              onChange={(_, index) => {
                const page = NAVBARROUTES[index];
                navigate(page.route);
                setValue(index);
              }}
            >
              {NAVBARROUTES.map((page, index) => {
                if (page.label === 'tu cuenta' && !keycloak.authenticated) {
                  return null;
                }
                return (
                  <Tab
                    key={index}
                    label={page.label}
                    sx={{
                      minHeight: '36px',
                      alignSelf: 'stretch',
                      height: '36px',
                      textTransform: 'capitalize',
                      fontWeight: '700',
                      color: 'inherit',
                    }}
                  />
                );
              })}
              <div className='w-px bg-black h-9' />
              {!keycloak.authenticated && (
                <div className='flex ml-3 gap-7'>
                  <button
                    onClick={() => keycloak.login()}
                    className='rounded-3xl border-2 border-orange-dark bg-[transparent] text-[16px] font-bold px-4 text-black'
                  >
                    Iniciar sesión
                  </button>
                  <button onClick={() => keycloak.register()} className='rounded-3xl bg-orange-dark text-[16px] font-bold px-4 text-white'>
                    Registro
                  </button>
                </div>
              )}
              {!!keycloak.authenticated && (
                <div className='flex items-center ml-3'>
                  <button
                    onClick={() => {
                      navigate('/');
                      dispatch(resqpetModuleApi.util.resetApiState());
                      keycloak.logout();
                    }}
                    className='rounded-3xl bg-orange-dark text-[16px] font-bold px-4 text-white'
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
