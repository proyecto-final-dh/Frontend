import { useState } from 'react';
import { Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { NAVBARROUTES } from '../Navbar/navbarPages';
import { useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../../config';
import { IconLogin2, IconLogout2, IconMenu2, IconUserPlus } from '@tabler/icons-react';

const DrawerMenu = () => {
  const { keycloak } = useAuthProvider();
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 200, bgcolor: 'primary.light' }}>
          <List>
            {NAVBARROUTES.map(({ label, icon: ItemIcon, route }, index) => (
              <ListItemButton
                key={index}
                onClick={() => {
                  navigate(route);
                  setOpenDrawer(false);
                }}
              >
                <div className='flex items-center gap-2'>
                  <ItemIcon className='text-orange-dark' />
                  <ListItemText>{label}</ListItemText>
                </div>
              </ListItemButton>
            ))}
            <div className='w-full px-4'>
              <div className='w-full h-px bg-black' />
            </div>
            {!keycloak.authenticated && (
              <div>
                <ListItemButton onClick={() => keycloak.login()}>
                  <div className='flex items-center gap-2'>
                    <IconLogin2 className='text-orange-dark' />
                    <ListItemText>Iniciar sesión</ListItemText>
                  </div>
                </ListItemButton>
                <ListItemButton onClick={() => keycloak.register()}>
                  <div className='flex items-center gap-2'>
                    <IconUserPlus className='text-orange-dark' />
                    <ListItemText>Registro</ListItemText>
                  </div>
                </ListItemButton>
              </div>
            )}
            {!!keycloak.authenticated && (
              <ListItemButton
                onClick={() => {
                  navigate('/');
                  keycloak.logout();
                }}
              >
                <div className='flex items-center gap-2'>
                  <IconLogout2 className='text-orange-dark' />
                  <ListItemText>Cerrar Sesión</ListItemText>
                </div>
              </ListItemButton>
            )}
          </List>
        </Box>
      </Drawer>
      <IconMenu2 className='ml-auto text-orange-dark' onClick={() => setOpenDrawer(!openDrawer)} />
    </>
  );
};

export default DrawerMenu;
