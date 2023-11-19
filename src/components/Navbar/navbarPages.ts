import { IconCat, IconPaw, IconQrcode, IconUserCircle, TablerIconsProps } from '@tabler/icons-react';

export const NAVBARROUTES: { label: string; route: string; icon: (props: TablerIconsProps) => JSX.Element }[] = [
  { label: 'Crear QR', route: '/create-qr', icon: IconQrcode },
  { label: 'adoptar', route: '/adoption', icon: IconCat },
  { label: 'dar en adopción', route: '/give-for-adoption', icon: IconPaw },
  { label: 'tu cuenta', route: '/your-account', icon: IconUserCircle },
];
