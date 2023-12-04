import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MAINMENUROUTES } from './mainMenuPages';
import { Title } from '../../../../components';
import { useMediaQuery, useTheme } from '@mui/material';
import DrawerMainMenu from '../DrawerMainMenu';

const MainMenu = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {isMatch ? (
        <div className='bg-primary-light rounded-3xl p-4 flex justify-between items-center'>
          <Title variant='h3' className='font-bold'>
            Tu cuenta
          </Title>
          <DrawerMainMenu />
        </div>
      ) : (
        <div className='bg-primary-light rounded-3xl'>
          <div className='flex justify-center py-2'>
            <Title variant='h3' className='font-bold'>
              Tu cuenta
            </Title>
          </div>
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
      )}
    </>
  );
};

export default MainMenu;
