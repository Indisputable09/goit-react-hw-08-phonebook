import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f51410ac59075124cad65c.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
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
      query: data => ({
        url: `/contacts/${data.id}`,
        method: 'PUT',
        body: data,
      }),
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
