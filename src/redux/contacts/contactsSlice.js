import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
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
      // query: data => ({
      //   url: `/contacts/${data.id}`,
      //   method: 'PATCH',
      //   body: data,
      // }),
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

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://62f51410ac59075124cad65c.mockapi.io/api/v1/',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => 'contacts',
//       providesTags: ['Contact'],
//     }),
//     getContactById: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     addContact: builder.mutation({
//       query: data => ({
//         url: '/contacts',
//         method: 'POST',
//         body: data,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     updateContact: builder.mutation({
//       query: data => ({
//         url: `/contacts/${data.id}`,
//         method: 'PUT',
//         body: data,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });
// export const {
//   useGetContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
//   useGetContactByIdMutation,
//   useUpdateContactMutation,
// } = contactsApi;
