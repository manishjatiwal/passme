import { createSlice } from '@reduxjs/toolkit'
import { iconStyles, vesselStyles } from 'helpers/style-calculator'
const initialState = {
  uuidList: [],
  iconStyles: {},
  vesselStyles: {},
  vesselVisiblity: {}
}

const getElement = uuid => {
  return document.querySelector(`input[data-passme-identifier="${uuid}"]`)
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { uuid } = action.payload
      state.uuidList.push(uuid)
      const element = getElement(uuid)
      state.iconStyles[uuid] = iconStyles(element)
      state.vesselStyles[uuid] = vesselStyles(element)
    },
    removeUnmountedItem: state => {
      const newUuidList = []
      state.uuidList.map(uuid => {
        const element = getElement(uuid)
        if (element) {
          newUuidList.push(uuid)
        }
      })
      state.uuidList = newUuidList
    },
    updateStyle: state => {
      state.uuidList.map(uuid => {
        const element = getElement(uuid)
        if (element) {
          state.iconStyles[uuid] = iconStyles(element)
          state.vesselStyles[uuid] = vesselStyles(element)
        }
      })
    },
    setVesselVisiblity: (state, action) => {
      const { uuid, visible } = action.payload
      state.vesselVisiblity[uuid] = visible
    },
    autofillGeneratedPassword: (state, action) => {
      const { uuid, password } = action.payload
      const element = getElement(uuid)
      element.value = password
      element.dispatchEvent(new Event('change', { bubbles: true }))
      state.vesselVisiblity[uuid] = false
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeUnmountedItem,
  updateStyle,
  setVesselVisiblity,
  autofillGeneratedPassword
} = inputSlice.actions

export default inputSlice.reducer
