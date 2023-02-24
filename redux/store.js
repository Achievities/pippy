import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './features/auth/login'

export default configureStore({
  reducer: {
    increment: counterReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
