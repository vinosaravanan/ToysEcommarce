import { configureStore} from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/AuthSlice";

import {combineReducers} from 'redux'
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

import storage from "redux-persist/lib/storage";

// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key:'root',
    storage
}

const rootReducer = combineReducers({
    Auth:persistReducer(persistConfig, AuthReducer)
}) 

// const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer:rootReducer,

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),

})

export const persistor = persistStore(store)


// export default store;
