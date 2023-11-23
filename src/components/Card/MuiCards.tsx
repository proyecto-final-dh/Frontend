import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Pet } from '../../contracts/pet';
import PetButton from '../Botones/PetButton';
import { Link } from 'react-router-dom';

interface MultiActionAreaCardProps {
  pet: Pet;
}

const MultiActionAreaCard: React.FC<MultiActionAreaCardProps> = ({ pet }) => {
  return (
    <Card sx={{ bgcolor: '#D8A868', overflow: 'unset', margin: '0 15px', padding: '25px', borderRadius: '25px', maxWidth: '274px', flex: '1 1 0px' }}>
      <CardActionArea sx={{ textAlign: 'center' }}>
        <CardMedia component='img' image={pet.image?.[0].url} alt={pet.name} sx={{ borderRadius: '18px', maxHeight: '130px', height: '100%', width: '100%' }} />
        <CardContent sx={{ height: '100%' }}>
          <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 700 }}>
            {pet.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              '@media (max-width: 1024px)': {
                textAlign: 'justify',
              },
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
            }}
          >
            {pet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Link to={`/pet/${pet.id}`} style={{ textDecoration: 'none' }}>
          <PetButton label='Ver más' />
        </Link>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
