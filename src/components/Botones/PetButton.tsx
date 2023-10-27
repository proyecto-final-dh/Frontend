import React from 'react';
import { Button } from '@mui/material';

export type ButtonProps = {
  label: string;
  //onClick: (e?: React.MouseEvent<HTMLElement>) => void;
};

const PetButton = ({ label }: ButtonProps): JSX.Element => {
  return (
    <Button
      variant='contained'
      /* onClick={onClick} */
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: '30px',
        textTransform: 'capitalize',
        fontWeight: '700',
        '&:hover': { backgroundColor: '#FFFFFF' },
        width: '150px',
        '@media (max-width: 768px)': {
          width: '100%',
        },
      }}
    >
      {label}
    </Button>
  );
};

export default PetButton;
