import { configureStore } from '@reduxjs/toolkit'
import inputSlice from './inputSlice'
import passwordSlice from './passwordSlice'

export const store = configureStore({
  reducer: {
    input: inputSlice,
    password: passwordSlice
  }
})
