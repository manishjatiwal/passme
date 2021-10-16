import { createSlice } from '@reduxjs/toolkit'
import { iconStyles, vesselStyles } from 'helpers/style-calculator'
const initialState = {
  list: {},
  uuidList: [],
  iconStyles: {},
  vesselStyles: {}
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.uuidList.push(action.payload.id)
      state.list[action.payload.id] = action.payload.element
      state.iconStyles[action.payload.id] = iconStyles(action.payload.element)
      state.vesselStyles[action.payload.id] = vesselStyles(
        action.payload.element
      )
    },
    updateStyle: state => {
      Object.keys(state.list).map(uuid => {
        state.iconStyles[uuid] = iconStyles(state.list[uuid])
        state.vesselStyles[uuid] = vesselStyles(state.list[uuid])
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, updateStyle } = inputSlice.actions

export default inputSlice.reducer
