/* eslint-disable no-shadow */
import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/ApiCall'
import themeSlice from './themeSlices'

export const store = configureStore({
  reducer: {
    themeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(api.middleware),
})
