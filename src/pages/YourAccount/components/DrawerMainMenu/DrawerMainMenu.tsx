import Drawer from '@mui/material/Drawer';
import { MAINMENUROUTES } from '../MainMenu/mainMenuPages';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconMenuDeep } from '@tabler/icons-react';
import { useState } from 'react';

const DrawerMainMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer anchor='top' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className='bg-primary-light'>
          <List>
            {MAINMENUROUTES.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton className='hover:bg-primary !important'>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <IconMenuDeep className='ml-auto text-black' onClick={() => setOpenDrawer(!openDrawer)} />
    </>
  );
};

export default DrawerMainMenu;
