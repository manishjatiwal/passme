import { createSlice } from '@reduxjs/toolkit'
import passwordGenerator from 'helpers/password-generator'

const initialState = {
  password: '',
  styledPassword: '',
  showPassword: false
}

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    generatePassword: state => {
      const [password, styledPassword] = passwordGenerator()
      state.password = password
      state.styledPassword = styledPassword
    },
    setShowPassword: (state, action) => {
      state.showPassword =
        action.payload !== undefined ? action.payload : !state.showPassword
    }
  }
})

// Action creators are generated for each case reducer function
export const { generatePassword, setShowPassword } = passwordSlice.actions

export default passwordSlice.reducer
