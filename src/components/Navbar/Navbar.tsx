import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import DrawerMenu from '../Drawer/DrawerMenu';
import { NAVBARROUTES } from './navbarPages';
import Logo from '../Logo/Logo';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <AppBar sx={{ bgcolor: 'primary.light' }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Logo width={40} height={50} variant='blackV' />
            <DrawerMenu />
          </>
        ) : (
          <>
            <Logo width={50} height={60} variant='blackV' />
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
              {NAVBARROUTES.map((page, index) => (
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
              ))}
            </Tabs>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
