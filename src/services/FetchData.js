import axios from 'axios'

// eslint-disable-next-line consistent-return
export const getDiscoverMovies = async (options) => {
  try {
    const response = await axios.get('discover/movie', {
      params: {
        ...options,
      },
      baseURL: 'https://api.themoviedb.org/3/',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ5ZmM2M2RkMTdiZGI0YmEwZTk1NThlNjk4NGVhYSIsInN1YiI6IjY1M2JmNjNlNTY0ZWM3MDBjOGFiMjA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K7GKTWj1a1zKsZ777gDHarENXefsw8O9YoIaZT77v50',
      },
    })
    return response
  } catch (error) {
    console.error(error)
  }
}
