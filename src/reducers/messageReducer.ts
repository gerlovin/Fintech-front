import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultMessage = 'Please select a stock and a period';

const messageSlice = createSlice({
    name: 'message',
    initialState: defaultMessage,
    reducers: {
        putMessage(message, action: PayloadAction<string>){
            return action.payload
        }
    }
})

export const {putMessage} = messageSlice.actions;
export default messageSlice.reducer;

