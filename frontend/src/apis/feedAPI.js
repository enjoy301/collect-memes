import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const feedAPI = createApi({
  reducerPath: 'feedAPI',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://urban-space-xylophone-974466766vqf979g-8000.app.github.dev/',
  }),
  endpoints: (builder) => ({
    getFeeds: builder.query({
      query: () => '/feeds/me',
    }),
    addFeed: builder.mutation({
      query: (body) => ({
        url: '/feed',
        method: 'POST',
        body,
      }),
    }),
    likeFeed: builder.mutation({
      query: ({ id, isLike }) => ({
        url: `/feed/${id}/like?is_like=${isLike}`,
        method: 'PUT',
      }),
    }),
  }),
});

export const { useGetFeedsQuery, useAddFeedMutation, useLikeFeedMutation } =
  feedAPI;
