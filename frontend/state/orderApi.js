import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/' }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({
    getOrderHistory: builder.query({
      query: () => 'history',
      providesTags: ['Orders']
    }),
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: 'order',
        method: 'POST',
        body: newOrder,
      }),
      invalidatesTags: [{ type: 'Orders' }],
    }),
  }),
});

export const { useGetOrderHistoryQuery, useCreateOrderMutation } = orderApi;
