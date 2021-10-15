import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: {},
  uuidList: []
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.uuidList.push(action.payload.id)
      state.list[action.payload.id] = action.payload.element
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem } = inputSlice.actions

export default inputSlice.reducer
