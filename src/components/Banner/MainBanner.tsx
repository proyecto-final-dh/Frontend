import { Box } from '@mui/material';
import React from 'react';
import { FC } from 'react';

export interface BannerProps {
  images: string;
}

const MainBanner: FC<BannerProps> = ({ images }) => {
  return (
    <>
      <Box>
        <img src={images} width={1903} />
      </Box>
    </>
  );
};

export default MainBanner;
