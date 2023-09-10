import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../reducers/messageReducer";
import stockReducer from "../reducers/stockReducer";

export const store = configureStore({
    reducer: {
        stockInfo: stockReducer,
        message: messageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;