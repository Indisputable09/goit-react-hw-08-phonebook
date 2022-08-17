import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    // getUser: builder.query({
    //   query: () => '/users/current',
    //   providesTags: ['User'],
    // }),
    // getContactById: builder.mutation({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
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
    // deleteContact: builder.mutation({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
    // updateContact: builder.mutation({
    //   query: data => ({
    //     url: `/contacts/${data.id}`,
    //     method: 'PUT',
    //     body: data,
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
  }),
});
export const {
  // useGetUserQuery,
  useAddUserMutation,
  // useAddContactMutation,
  // useDeleteContactMutation,
  // useGetContactByIdMutation,
  // useUpdateContactMutation,
} = authApi;
