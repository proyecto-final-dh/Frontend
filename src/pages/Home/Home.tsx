import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      {/* layout con navbar y footer jesyn*/}
      {/* imagen principal junior */}
      {/* pasos para creacion de QR junior*/}
      <Box>
        <div>
          <Typography>
            <h2>Código QR de etiquetas para mascotas</h2>
          </Typography>
          <Typography>
            <p>
              Genera el código QR de tu mascota en tan solo tres sencillos pasos y asegura que, en caso de extravío, aquellos que encuentren a tu mascota puedan
              acceder rápidamente a tus datos de contacto para facilitar su retorno.
            </p>
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Typography>
              <h3>Registrate</h3>
            </Typography>
            <Typography>
              <p>Crea tu cuenta para acceder a las herramientas de generación de QR.</p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography>
              <h3>Carga sus datos</h3>
            </Typography>
            <Typography>
              <p>Completa la información de tu mascota.</p>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
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
      </Box>
      {/* banner info QR jess */}
      {/* carrousel con card de mascotas jess */}
    </div>
  );
};

export default Home;
