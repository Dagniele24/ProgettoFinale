import { configureStore, combineReducers } from '@reduxjs/toolkit'
import jobReducer from '../reducers/job'

const bigReducer = combineReducers({
  job: jobReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
