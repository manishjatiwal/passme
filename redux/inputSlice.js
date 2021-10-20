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
    updateStyle: state => {
      state.uuidList.map(uuid => {
        const element = getElement(uuid)
        state.iconStyles[uuid] = iconStyles(element)
        state.vesselStyles[uuid] = vesselStyles(element)
      })
    },
    toogleVesselVisiblity: (state, action) => {
      state.vesselVisiblity[action.payload] =
        !state.vesselVisiblity[action.payload]
    },
    autofillGeneratedPassword: (state, action) => {
      const { uuid, password } = action.payload
      const element = getElement(uuid)
      element.value = password
      element.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addItem,
  updateStyle,
  toogleVesselVisiblity,
  autofillGeneratedPassword
} = inputSlice.actions

export default inputSlice.reducer
