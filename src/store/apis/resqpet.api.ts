import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';
import { APIResponseUserDetails, APIUserDetailsResponse } from '../../contracts/user-details.contract';
import { APIGetPetsForAdoptionQueryParams, APIPageableGetPetsResponse, TPageableGetPetsResponse } from '../../contracts/pets';
import petsMapper from '../../mappers/pets.mapper';

export const resqpetModuleApi = createApi({
  reducerPath: 'resqpetModuleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_RESQPET_URL,
    prepareHeaders: (headers) => {
      headers.set('token', '');
      return headers;
    },
  }),
  tagTypes: ['getPets', 'getUserDetailsById'],
  keepUnusedDataFor: 3600,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
  },
  endpoints: (build) => ({
    getPets: build.query<TPageableGetPetsResponse, { queryParams: APIGetPetsForAdoptionQueryParams }>({
      query: ({ queryParams }) => ({
        url: `/pets/filter`,
        params: queryParams,
      }),
      transformResponse: (response: APIPageableGetPetsResponse) => {
        return petsMapper.toFront(response);
      },
      providesTags: ['getPets'],
    }),
    getUserDetailsById: build.query<APIUserDetailsResponse, { userId: string }>({
      query: ({ userId }) => ({
        url: `/user-details/user/${userId}`,
      }),
      transformResponse: (response: APIResponseUserDetails) => {
        return response.data;
      },
      providesTags: ['getUserDetailsById'],
    }),
  }),
});

export const { useLazyGetUserDetailsByIdQuery, useLazyGetPetsQuery } = resqpetModuleApi;
