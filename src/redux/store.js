/* eslint-disable no-shadow */
import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/playerSlice'
import { api } from './services/ApiCall'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
