import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState();
    console.log('~ token', token);

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'user',
  baseQuery,
  tagTypes: ['User'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: fields => {
        console.log('Fields ', fields);
        return {
          url: '/users/signup',
          method: 'POST',
          body: fields,
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});
export const { useAddUserMutation } = authApi;
