import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort_by: 'popularity.desc',
  certification: '',
  language: 'en-US',
  with_keywords: '',
  'vote_average.lte': 10,
  'vote_average.gte': 6,
  'with_runtime.gte': 120,
  'with_runtime.lte': 180,
  'release_date.gte': '',
  'release_date.lte': '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    CHANGE_SORT_VALUE: (state, action) => ({
      ...state,
      sort_by: action.payload,
    }),
    CHANGE_CERTIFICATION_VALUE: (state, action) => ({
      ...state,
      certification: action.payload,
    }),
    CHANGE_LANGUAGE_VALUE: (state, action) => ({
      ...state,
      language: action.payload,
    }),
    CHANGE_VOTE_AVERAGE_VALUE: (state, action) => ({
      ...state,
      'vote_average.lte': action.payload.max,
      'vote_average.gte': action.payload.min,
    }),
    CHANGE_RUNTIME_VALUE: (state, action) => ({
      ...state,
      'with_runtime.gte': action.payload.min,
      'with_runtime.lte': action.payload.max,
    }),
    CHANGE_RELEASE_DATE_VALUE: (state, action) => ({
      ...state,
      'release_date.gte': new Date(action.payload[0]),
      'release_date.lte': new Date(action.payload[1]),
    }),
    CHANGE_KEYWORD_VALUE: (state, action) => ({
      ...state,
      with_keywords: encodeURIComponent(action.payload),
    }),
  },
})

export const {
  CHANGE_SORT_VALUE,
  CHANGE_CERTIFICATION_VALUE,
  CHANGE_LANGUAGE_VALUE,
  CHANGE_VOTE_AVERAGE_VALUE,
  CHANGE_RUNTIME_VALUE,
  CHANGE_RELEASE_DATE_VALUE,
  CHANGE_KEYWORD_VALUE,
} = filterSlice.actions
export default filterSlice.reducer
