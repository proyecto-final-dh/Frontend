import { combineReducers } from '@reduxjs/toolkit';
import { resqpetModuleApi } from './apis/resqpet.api';

const reducers = combineReducers({
  [resqpetModuleApi.reducerPath]: resqpetModuleApi.reducer,
});

export default reducers;
