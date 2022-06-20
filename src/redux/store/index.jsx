import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favReducer from "../reducers/favourite"
import jobReducer from "../reducers/jobs"

import { persistStore, persistReducer } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"
import { encryptTransform } from "redux-persist-transform-encrypt"

const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SUPER_SECRET_KEY,
      onError: (error) => {
        console.log(error)
      },
    }),
  ],
}

const rootReducer = combineReducers({
  favourite: favReducer,
  jobList: jobReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)
