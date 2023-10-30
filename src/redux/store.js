/* eslint-disable no-shadow */
import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/ApiCall'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
