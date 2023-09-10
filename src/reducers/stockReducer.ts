import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StockInfo } from "../utils/types";


const defaultStock: StockInfo = {}

const stockSlice = createSlice({
    name: 'stock',
    initialState: defaultStock,
    reducers: {
        putStockInfo(stockInfo, action: PayloadAction<StockInfo>){
           stockInfo.from = action.payload.from;
           stockInfo.to = action.payload.to;
           stockInfo.source = action.payload.source;
           stockInfo.type = action.payload.type;
           stockInfo.max = action.payload.max;
           stockInfo.mean = action.payload.mean;
           stockInfo.median = action.payload.median;
           stockInfo.min = action.payload.min;
           stockInfo.std = action.payload.std;
        }
    }
})

export const {putStockInfo} = stockSlice.actions;
export default stockSlice.reducer;



