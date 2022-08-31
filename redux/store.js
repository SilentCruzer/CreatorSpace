import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './features/profileSlice'

export default configureStore({
  reducer: {
    profile: profileReducer
  },
})