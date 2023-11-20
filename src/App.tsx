import './App.css';
import './index.css';
import './fonts.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './config';
import { Home, Register, PetDetail, Adoption } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from './components';
import ScrollToTop from './components/ScrollToTop';

// TODO: Change Loader component
const loader = () => <div className='flex items-center justify-center w-screen h-screen bg-white'>Loading...</div>;

function App() {
  const queryClient = new QueryClient();
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
            <ScrollToTop />
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
