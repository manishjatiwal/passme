import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem } = inputSlice.actions

export default inputSlice.reducer
