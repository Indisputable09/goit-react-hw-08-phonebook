import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery,
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    getContactById: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: ({ name, number, id }) => {
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: { name, number },
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdMutation,
  useUpdateContactMutation,
} = contactsApi;
