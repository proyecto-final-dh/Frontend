import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MAINMENUROUTES } from './mainMenuPages';
import { Title } from '../../../../components';
import { useMediaQuery, useTheme } from '@mui/material';
import DrawerMainMenu from '../DrawerMainMenu';
import styles from './MainMenu.module.css';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {isMatch ? (
        <div className='flex items-center justify-between p-4 bg-primary-light rounded-3xl'>
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
          <List className={cn(styles['group-main-menu'])}>
            {MAINMENUROUTES.map((item, index) => (
              <ListItem key={index} disablePadding onClick={() => navigate(item.route)}>
                <ListItemButton className={cn(styles['item-main-menu'])}>
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
