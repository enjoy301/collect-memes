import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tiktokAPI = createApi({
  reducerPath: 'tiktokAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.tiktok.com/',
  }),
  endpoints: (builder) => ({
    getThumbnail: builder.query({
      query: (u) => ({ url: `oembed?url=${encodeURIComponent(u)}` }),
      transformResponse: (response) => {
        return response.thumbnail_url;
      },
    }),
  }),
});

export const { useLazyGetThumbnailQuery } = tiktokAPI;
