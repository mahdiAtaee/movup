import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rightSideStatus: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    RIGHT_SIDE_TOGGLE: (state, action) => ({
      ...state,
      rightSideStatus: !state.rightSideStatus,
    }),
  },
})

export const { RIGHT_SIDE_TOGGLE } = themeSlice.actions
export default themeSlice.reducer
