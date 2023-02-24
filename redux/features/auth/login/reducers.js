import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = counterReducer.actions
