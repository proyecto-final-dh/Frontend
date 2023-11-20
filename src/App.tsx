import './App.css';
import './index.css';
import './fonts.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './config';
import { Home, Register, PetDetail, Adoption, QrGenerator } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, Loader } from './components';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const queryClient = new QueryClient();

  const loader = () => <Loader opacity={0} />;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                  <Route
                    path='/qr/create'
                    element={
                      <Layout>
                        <QrGenerator />
                      </Layout>
                    }
                  />
                </Routes>
              </Container>
            </div>
          </QueryClientProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
