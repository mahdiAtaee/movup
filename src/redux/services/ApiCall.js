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
      query: (page = 1) => ({
        url: 'discover/movie',
        params: {
          page,
        },
      }),
    }),
    getMovieGenres: builder.query({
      query: () => ({
        url: 'genre/movie/list',
      }),
    }),
    getPopularMovies: builder.query({
      query: ({ page, language }) => ({
        url: 'movie/popular',
        params: {
          page,
          language,
        },
      }),
    }),
    getTopRatedMovies: builder.query({
      query: ({ page = 1, language = 'en-us' }) => ({
        url: 'movie/top_rated',
        params: {
          page,
          language,
        },
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
    getMoviesDetail: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}`,
      }),
    }),
    getMovieCredits: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}/credits`,
      }),
    }),
    getMovieImages: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}/images`,
      }),
    }),
    getMovieReviews: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}/reviews`,
      }),
    }),
    getMovieSimilar: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}/similar`,
      }),
    }),
    getMovieRecommendations: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}/recommendations`,
      }),
    }),
    getMovieVideos: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}/videos`,
      }),
    }),
    getTrendMovies: builder.query({
      query: (timeWindow) => ({
        url: `trending/all/${timeWindow}`,
      }),
    }),
    getLanguagesSupport: builder.query({
      query: () => ({
        url: 'configuration/languages',
      }),
    }),
    getDiscoverMovies: builder.query({
      query: (options) => ({
        url: 'discover/movie',
        params: {
          ...options,
        },
      }),
    }),
    getUpCommingMovies: builder.query({
      query: ({ page, language }) => ({
        url: 'movie/upcoming',
        params: {
          page,
          language,
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
  useGetMoviesDetailQuery,
  useGetMovieCreditsQuery,
  useGetMovieImagesQuery,
  useGetMovieReviewsQuery,
  useGetMovieSimilarQuery,
  useGetMovieRecommendationsQuery,
  useGetMovieVideosQuery,
  useGetTrendMoviesQuery,
  useGetLanguagesSupportQuery,
  useGetDiscoverMoviesQuery,
  useGetUpCommingMoviesQuery,
} = api
