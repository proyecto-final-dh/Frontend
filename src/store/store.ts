import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import { resqpetModuleApi } from './apis/resqpet.api';

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

const persistConfig = {
  key: 'requisitions-module',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middleware: any = [thunk];

if (!isProd && !isTest) {
  middleware.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  devTools: !isProd,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(resqpetModuleApi.middleware, ...middleware),
});

export const persistor = persistStore(store);

export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
