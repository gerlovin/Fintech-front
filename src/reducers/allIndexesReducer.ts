import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const defaltAllIndexes: string[] = [];

const allIndxesSlice = createSlice({
    name: 'allIndexes',
    initialState: defaltAllIndexes,
    reducers: {
        putAllIndexes(allIndexesInfo, action: PayloadAction<string[]>){
            allIndexesInfo = action.payload;
        }
    }
})

export const {putAllIndexes} = allIndxesSlice.actions;
export default allIndxesSlice.reducer;