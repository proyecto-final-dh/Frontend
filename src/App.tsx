import './App.css';
import './index.css';
import './fonts.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './config';
import { Home, Register, PetDetail, Adoption, QrGenerator, GiveAdoption } from './pages';
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
    <AuthProvider loader={loader}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <div className='App bg-orange-light'>
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
                    path='/give-for-adoption'
                    element={
                      <Layout>
                        <GiveAdoption />
                      </Layout>
                    }
                  />
                </Routes>
              </Container>
            </div>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
