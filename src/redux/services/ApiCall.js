import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json')
      headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ5ZmM2M2RkMTdiZGI0YmEwZTk1NThlNjk4NGVhYSIsInN1YiI6IjY1M2JmNjNlNTY0ZWM3MDBjOGFiMjA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K7GKTWj1a1zKsZ777gDHarENXefsw8O9YoIaZT77v50',
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopMovies: builder.query({
      query: () => ({
        url: 'discover/movie',
        // params: {
        //   locale: 'en-US',
        //   pageSize: '50',
        //   startFrom: '20',
        // },
      }),
    }),
  }),
})

export const { useGetTopMoviesQuery } = api
