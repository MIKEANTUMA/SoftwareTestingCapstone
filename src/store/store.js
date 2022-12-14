import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import { loadstate } from './local'

const persistedState = loadstate();
export default configureStore({
  reducer: {
    user: userReducer,
    persistedState,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})