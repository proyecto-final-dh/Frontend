import AddCircleIcon from '@mui/icons-material/AddCircle';
import PetsIcon from '@mui/icons-material/Pets';
import HouseIcon from '@mui/icons-material/House';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export const NAVBARROUTES: { label: string; route: string; icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> }[] = [
  { label: 'crear QR', route: '/crear-QR', icon: AddCircleIcon },
  { label: 'adoptar', route: '/adoptar', icon: PetsIcon },
  { label: 'dar en adopción', route: '/dar-adopcion', icon: HouseIcon },
  { label: 'tu cuenta', route: '/tu-cuenta', icon: AccountCircleIcon },
];
