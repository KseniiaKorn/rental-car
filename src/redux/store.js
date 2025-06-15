import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistReducer,
    persistStore,
} from "redux-persist";
import carsReducer from "./slice";
import filtersReducer from './filters/slice';
import storage from 'redux-persist/lib/storage';

const filtersConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['selected'],
};

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        filters: persistReducer(filtersConfig, filtersReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);