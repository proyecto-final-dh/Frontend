import { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAVBARROUTES } from '../Navbar/navbarPages';
import Icon from '@mui/material/Icon';
import { useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../../config';

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
                <ListItemIcon>
                  <Icon color='primary'>
                    <ItemIcon />
                  </Icon>
                  <ListItemText>{label}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
            <div className='w-full px-4'>
              <div className='w-full h-px bg-black' />
            </div>
            {!keycloak.authenticated && (
              <div>
                <ListItemButton onClick={() => keycloak.login()}>
                  <ListItemIcon>
                    <ListItemText>Iniciar sesión</ListItemText>
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={() => keycloak.register()}>
                  <ListItemIcon>
                    <ListItemText>Registro</ListItemText>
                  </ListItemIcon>
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
                <ListItemIcon>
                  <ListItemText>Cerrar Sesión</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            )}
          </List>
        </Box>
      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: 'black' }} />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
