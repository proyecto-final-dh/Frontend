import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <head>
        <title>ResQpet</title>
        <meta
          name='description'
          content='ResQPet ayuda a los dueños de mascotas a mantener a sus queridas mascotas seguras y permite adoptar o dar en adopción a mascotas necesitadas.'
        />
        <meta
          name='keywords'
          content='codigo QR, mascotas, cuidado de perros, adopción de gatos, adopción de perros, dar en adopción, veterinario, consejos para mascotas'
        />
      </head>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
