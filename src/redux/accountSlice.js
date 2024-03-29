import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionID: '',
  account_id: '',
}

const themeSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    SAVE_SESSION: (state, action) => ({
      ...state,
      session: action.payload,
    }),
    SAVE_ACCOUNT_ID: (state, action) => ({
      ...state,
      account_id: action.payload,
    }),
  },
})

export const { SAVE_SESSION, SAVE_ACCOUNT_ID } = themeSlice.actions
export default themeSlice.reducer
