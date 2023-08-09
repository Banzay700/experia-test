import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers'
import { api } from './api/api'

const rootReducer = combineReducers({
  user: userReducer,
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
