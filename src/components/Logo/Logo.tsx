import { FC } from 'react';
import { Box } from '@mui/material';
import blackH from '../../assets/logo_black_H.png';
import blackV from '../../assets/logo_black_V.png';
import whiteH from '../../assets/logo_white_H.svg';
import whiteV from '../../assets/logo_white_V.png';

export interface LogoProps {
  width: number;
  height: number;
  variant: 'blackV' | 'whiteV' | 'blackH' | 'whiteH';
}

const Logo: FC<LogoProps> = ({ variant, width, height }) => {
  const logo = { blackV, whiteV, blackH, whiteH }[variant];
  return (
    <Box sx={{ padding: '10px' }}>
      <img src={logo} alt='logo resqpet' width={width} height={height} />
    </Box>
  );
};

export default Logo;
