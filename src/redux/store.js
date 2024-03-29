/* eslint-disable no-shadow */
import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/ApiCall'
import themeSlice from './themeSlices'
import FilterSlice from './FilterSlice'
import accountSlice from './accountSlice'

export const store = configureStore({
  reducer: {
    accountSlice,
    themeSlice,
    FilterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(api.middleware),
})
