import './App.css';
import './index.css';
import './fonts.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './config';
import { Adoption, Home, Register } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from './components';

// TODO: Change Loader component
const loader = () => <div>Loading...</div>;

function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider loader={loader}>
      <QueryClientProvider client={queryClient}>
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

          <Container hasPadding={false}>
            <Routes>
              <Route
                path='/'
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path='/adoption'
                element={
                  <Layout>
                    {/* TODO: cambiar hardcodeo al implementar backend */}
                    <Adoption pages={10} />
                  </Layout>
                }
              />
              <Route path='/register' element={<Register />} />
            </Routes>
          </Container>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
