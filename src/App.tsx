import './App.css';
import './index.css';
import './fonts.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './config';
import { Home, Register, PetDetail, Adoption, QrGenerator, GiveAdoption } from './pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container, Loader, TourBadge } from './components';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { StylesObj, TourProvider } from '@reactour/tour';
import ScrollToTop from './components/ScrollToTop';
import { qrGeneratorSteps } from './pages/QrGenerator/lib/tour.steps';
import YourAccount from './pages/YourAccount';
import QrDetail from './pages/QrDetail';

function App() {
  const queryClient = new QueryClient();

  const loader = () => <Loader opacity={0} />;

  const disableBody = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableBody = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <AuthProvider loader={loader}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <TourProvider
              showDots={false}
              steps={qrGeneratorSteps}
              afterOpen={disableBody}
              beforeClose={enableBody}
              components={{ Badge: TourBadge as React.ComponentType<{ styles?: StylesObj }> }}
            >
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
                    <Route
                      path='/qr/:id'
                      element={
                        <Layout>
                          <QrDetail />
                        </Layout>
                      }
                    />
                    <Route
                      path='/give-for-adoption'
                      element={
                        <Layout>
                          <GiveAdoption />
                        </Layout>
                      }
                    />
                    <Route
                      path='/your-account'
                      element={
                        <Layout>
                          <YourAccount />
                        </Layout>
                      }
                    />
                  </Routes>
                </Container>
              </div>
            </TourProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
