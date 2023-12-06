import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';
import { APIUserDetailsResponse } from '../../contracts/user-details.contract';
import { APIGetPetsResponse, APIGetPetsWithFiltersQueryParams, APIPageableGetPetsResponse, TPageableGetPetsResponse } from '../../contracts/pets';
import petsMapper from '../../mappers/pets.mapper';
import { Pet, PetWithOwner } from '../../contracts/pet';
import { kc } from '../../config';
import { APISpeciesReportResponse, APIStatusReportResponse } from '../../contracts/reports.contract';

export const resqpetModuleApi = createApi({
  reducerPath: 'resqpetModuleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_RESQPET_URL,
    prepareHeaders: (headers) => {
      if (kc.token) {
        headers.set('Authorization', `Bearer ${kc.token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['getPets', 'getUserDetailsById', 'getPetRecommendations', 'getStatusReport', 'getSpeciesReport'],
  keepUnusedDataFor: 3600,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
  },
  endpoints: (build) => ({
    getPetById: build.query<PetWithOwner, { id: string }>({
      query: ({ id }) => ({
        url: `/pets/${id}`,
      }),
      transformResponse: (response: TAPIResponse<PetWithOwner, object>) => {
        console.log({ response });
        return response.data;
      },
    }),
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
      query: () => ({
        url: `/users`,
      }),
      transformResponse: (response: APIUserDetailsResponse) => {
        return response;
      },
      providesTags: ['getUserDetailsById'],
    }),
    createPet: build.mutation<Pet, { form: FormData }>({
      query: ({ form }) => ({
        url: `/pets/own-with-images`,
        method: 'POST',
        body: form,
      }),
      transformResponse: (response: TAPIResponse<APIGetPetsResponse, string[]>) => {
        return response.data;
      },
    }),
    getStatusReport: build.query<APIStatusReportResponse, { startDate: string; endDate: string }>({
      query: ({ startDate, endDate }) => ({
        url: `/history/reports/status?startDate=${startDate}&endDate=${endDate}`,
      }),
      transformResponse: (response: APIStatusReportResponse) => {
        return response;
      },
      providesTags: ['getStatusReport'],
    }),
    getSpeciesReport: build.query<APISpeciesReportResponse, { startDate: string; endDate: string }>({
      query: ({ startDate, endDate }) => ({
        url: `/history/species/status?startDate=${startDate}&endDate=${endDate}`,
      }),
      transformResponse: (response: APISpeciesReportResponse) => {
        return response;
      },
      providesTags: ['getSpeciesReport'],
    }),
  }),
});

export const {
  useLazyGetUserDetailsByIdQuery,
  useLazyGetPetsQuery,
  useLazyGetPetRecommendationsQuery,
  useCreatePetMutation,
  useGetPetByIdQuery,
  useLazyGetSpeciesReportQuery,
  useLazyGetStatusReportQuery,
} = resqpetModuleApi;
