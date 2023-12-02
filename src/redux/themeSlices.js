import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rightSideStatus: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    RIGHT_SIDE_TOGGLE: (state, action) => {
      console.log(action.type)
      console.log(state)
      return {
        ...state,
        rightSideStatus: !state.rightSideStatus,
      }
    },
  },
})

export const { RIGHT_SIDE_TOGGLE } = themeSlice.actions
export default themeSlice.reducer
