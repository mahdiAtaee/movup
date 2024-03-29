/* eslint-disable consistent-return */
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

// eslint-disable-next-line consistent-return
export const createRequestToken = async () => {
  try {
    const response = await axios.get('authentication/token/new', {
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

// eslint-disable-next-line consistent-return
export const createNewSession = async (requestToken) => {
  console.log('requested')
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=3c49fc63dd17bdb4ba0e9558e6984eaa&request_token=${requestToken}`,
    )
    return response
  } catch (error) {
    console.error(error)
  }
}

// eslint-disable-next-line consistent-return
export const getAccountDetails = async (sessionID) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=3c49fc63dd17bdb4ba0e9558e6984eaa&session_id=${sessionID}`,
    )
    return response
  } catch (error) {
    console.error(error)
  }
}

export const addMovieToPlayList = async (accountId, sessionID, movieId) => {
  try {
    const response = await axios.post(
      `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=3c49fc63dd17bdb4ba0e9558e6984eaa&session_id=${sessionID}`,
      {
        data: {
          media_type: 'movie',
          media_id: movieId,
          watchlist: true,
        },
      },
    )
    return response
  } catch (error) {
    console.error(error)
  }
}

export const getWatchList = async (accountId, sessionID) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/account/${accountId}/lists?api_key=3c49fc63dd17bdb4ba0e9558e6984eaa&session_id=${sessionID}`,
    )
    return response
  } catch (error) {
    console.error(error)
  }
}
