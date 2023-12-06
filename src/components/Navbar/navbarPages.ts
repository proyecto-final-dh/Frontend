import { IconCat, IconPaw, IconQrcode, IconUserCircle, TablerIconsProps, IconReportAnalytics } from '@tabler/icons-react';

export const NAVBARROUTES: { label: string; route: string; icon: (props: TablerIconsProps) => JSX.Element }[] = [
  { label: 'Crear QR', route: '/qr/create', icon: IconQrcode },
  { label: 'Adoptar', route: '/adoption', icon: IconCat },
  { label: 'Dar en adopción', route: '/give-for-adoption', icon: IconPaw },
  { label: 'Reportes', route: '/reports', icon: IconReportAnalytics },
  { label: 'Tu cuenta', route: '/profile', icon: IconUserCircle },
];
