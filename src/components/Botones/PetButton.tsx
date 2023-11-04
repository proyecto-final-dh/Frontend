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
        padding: '10px 30px',
      }}
    >
      {label}
    </Button>
  );
};

export default PetButton;
