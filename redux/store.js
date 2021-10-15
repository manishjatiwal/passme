import { configureStore } from '@reduxjs/toolkit'
import inputSlice from './inputSlice'
import styleSlice from './styleSlice'

export const store = configureStore({
  reducer: {
    input: inputSlice,
    style: styleSlice
  }
})
