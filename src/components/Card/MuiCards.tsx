import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Pet } from '../../contracts/pet';
import PetButton from '../Botones/PetButton';
//import { PetButton } from '../Botones/PetButton';

interface MultiActionAreaCardProps {
  pet: Pet;
}

const MultiActionAreaCard: React.FC<MultiActionAreaCardProps> = ({ pet }) => {
  /*  const handleAdopt = () => {}; */
  return (
    <Card sx={{ bgcolor: '#D8A868', height: '100%', margin: '0 15px', padding: '25px', borderRadius: '25px', maxWidth: '324px' }}>
      <CardActionArea sx={{ textAlign: 'center' }}>
        <CardMedia component='img' height='300' width='250' image={pet.image} alt={pet.name} sx={{ borderRadius: '18px' }} />
        <CardContent sx={{ height: '100%' }}>
          <Typography gutterBottom variant='h5' component='div'>
            {pet.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}
          >
            {pet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <PetButton label={'Adoptar'} />
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
