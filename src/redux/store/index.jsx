import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favReducer from "../reducers/favourite"
import jobReducer from "../reducers/jobs"

const rootReducer = combineReducers({
  favourite: favReducer,
  jobList: jobReducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export default store
