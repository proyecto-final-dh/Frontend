import React from 'react';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import markStepOne from '../../../../assets/mark-step-one.png';
import markStepTwo from '../../../../assets/mark-step-two.png';
import markStepThree from '../../../../assets/mark-step-three.png';

const QrSteps = () => {
  return (
    <>
      <Box>
        <Container sx={{ padding: '45px 120px !important' }}>
          <div>
            <Typography>
              <h2>Código QR de etiquetas para mascotas</h2>
            </Typography>
            <Typography>
              <p>
                Genera el código QR de tu mascota en tan solo tres sencillos pasos y asegura que, en caso de extravío, aquellos que encuentren a tu mascota
                puedan acceder rápidamente a tus datos de contacto para facilitar su retorno.
              </p>
            </Typography>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <img src={markStepOne} />
              <Typography>
                <h3>Registrate</h3>
              </Typography>
              <Typography>
                <p>Crea tu cuenta para acceder a las herramientas de generación de QR.</p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <img src={markStepTwo} />
              <Typography>
                <h3>Carga sus datos</h3>
              </Typography>
              <Typography>
                <p>Completa la información de tu mascota.</p>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <img src={markStepThree} />
              <Typography>
                <h3>Generación de QR</h3>
              </Typography>
              <Typography>
                <p>Creación de un código QR único con toda su información</p>
              </Typography>
            </Grid>
          </Grid>
          <div>
            <Button variant='contained' color='primary' sx={{ borderRadius: '30px' }}>
              Comenzar
            </Button>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default QrSteps;
