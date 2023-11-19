import './App.css';
import './index.css';
import './fonts.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './config';
import { Home, Register, PetDetail, Adoption } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, Loader } from './components';

function App() {
  const queryClient = new QueryClient();

  const loader = () => <Loader opacity={0} />;

  return (
    <AuthProvider loader={loader}>
      <QueryClientProvider client={queryClient}>
        <div className='App bg-orange-light'>
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
                    <Adoption />
                  </Layout>
                }
              />
              <Route path='/register' element={<Register />} />
              <Route
                path='/pet/:id'
                element={
                  <Layout>
                    <PetDetail />
                  </Layout>
                }
              />
            </Routes>
          </Container>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
