import { Box, Button, Typography, Container } from '@mui/material';
import markStepOne from '../../../../assets/mark-step-one.png';
import markStepTwo from '../../../../assets/mark-step-two.png';
import markStepThree from '../../../../assets/mark-step-three.png';
import styles from './qrsteps.module.css';
import { TextDetail } from '../../../../components';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const markSteps = [
  {
    id: 'mark-1',
    image: markStepOne,
    title: 'Registrate',
    description: 'Crea tu cuenta para acceder a las herramientas de generación de QR.',
  },
  {
    id: 'mark-2',
    image: markStepTwo,
    title: 'Carga sus datos',
    description: 'Completa la información de tu mascota.',
  },
  {
    id: 'mark-3',
    image: markStepThree,
    title: 'Generación de QR',
    description: 'Creación de un código QR único con toda su información',
  },
];

const QrSteps = () => {
  return (
    <Box>
      <Container sx={{ padding: '45px 24px', direction: 'flex', justifyContent: 'center' }}>
        <div className='flex flex-col gap-5'>
          <Typography sx={{ textAlign: 'center' }}>
            <h2 className='text-[28px] font-bold'>Código QR de etiquetas para mascotas</h2>
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            <p className='font-bold'>
              &quot;Genera el código QR de tu mascota en tan solo tres sencillos pasos y asegura que, en caso de extravío, aquellos que encuentren a tu mascota
              puedan acceder rápidamente a tus datos de contacto para facilitar su retorno.&quot;
            </p>
          </Typography>
        </div>
        <section className='flex flex-col items-center justify-center gap-10 mt-5 lg:flex-row lg:justify-around'>
          {markSteps.map((step) => (
            <article key={step.id} className='flex flex-col gap-5 max-w-[228px] w-full'>
              <img src={step.image} />
              <Typography sx={{ textAlign: 'center' }}>
                <h3 className='font-bold text-h3'>{step.title}</h3>
              </Typography>
              <TextDetail size='xs' weight='bold' className='text-center'>
                {step.description}
              </TextDetail>
            </article>
          ))}
        </section>
        <div className={cn(styles.btnActions, 'mt-5')}>
          <Link to='/qr/create'>
            <Button variant='contained' color='primary' sx={{ borderRadius: '30px', fontWeight: 700, padding: '10px 15px' }}>
              Comenzar
            </Button>
          </Link>
        </div>
      </Container>
    </Box>
  );
};

export default QrSteps;
