import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';
import { APIResponseUserDetails, APIUserDetailsResponse } from '../../contracts/user-details.contract';
import { APIGetPetsWithFiltersQueryParams, APIPageableGetPetsResponse, TPageableGetPetsResponse } from '../../contracts/pets';
import petsMapper from '../../mappers/pets.mapper';
import { Pet } from '../../contracts/pet';

export const resqpetModuleApi = createApi({
  reducerPath: 'resqpetModuleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_RESQPET_URL,
    prepareHeaders: (headers) => {
      headers.set('token', '');
      return headers;
    },
  }),
  tagTypes: ['getPets', 'getUserDetailsById', 'getPetRecommendations'],
  keepUnusedDataFor: 3600,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
  },
  endpoints: (build) => ({
    getPets: build.query<TPageableGetPetsResponse, { queryParams: APIGetPetsWithFiltersQueryParams }>({
      query: ({ queryParams }) => ({
        url: `/pets/filter`,
        params: queryParams,
      }),
      transformResponse: (response: APIPageableGetPetsResponse) => {
        return petsMapper.toFront(response);
      },
      providesTags: ['getPets'],
    }),
    getPetRecommendations: build.query<Pet[], { petId: string; limit: string }>({
      query: ({ petId, limit }) => ({
        url: `/pets/recommendation/${petId}?limit=${limit}`,
      }),
      transformResponse: (response: Pet[]) => {
        return response;
      },
      providesTags: ['getPetRecommendations'],
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

export const { useLazyGetUserDetailsByIdQuery, useLazyGetPetsQuery, useLazyGetPetRecommendationsQuery } = resqpetModuleApi;
