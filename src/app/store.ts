import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import clientReducer from '../feature/client/clientSlice'

const customizeMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export default configureStore({
    reducer: {
        client: clientReducer,
    },
    middleware: customizeMiddleware,
})