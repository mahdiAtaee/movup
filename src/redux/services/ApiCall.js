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
    getMovieGenres: builder.query({
      query: () => ({
        url: 'genre/movie/list',
      }),
    }),
    getPopularMovies: builder.query({
      query: (page) => ({
        url: 'movie/popular',
        params: {
          page,
        },
      }),
    }),
    getTopRatedMovies: builder.query({
      query: () => ({
        url: 'movie/top_rated',
      }),
    }),
    getNewTrailerMovies: builder.query({
      query: () => ({
        url: 'discover/movie',
        params: {
          sort_by: 'primary_release_date.desc',
          include_video: true,
          include_adult: 'false',
          page: 60,
        },
      }),
    }),
    getTrailerMovies: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}/videos`,
        params: {
          sort_by: 'primary_release_date.desc',
          include_video: true,
          include_adult: 'false',
        },
      }),
    }),
  }),
})

export const {
  useGetTopMoviesQuery,
  useGetMovieGenresQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetNewTrailerMoviesQuery,
  useGetTrailerMoviesQuery,
} = api
