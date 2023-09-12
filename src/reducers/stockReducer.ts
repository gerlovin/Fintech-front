import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StockInfo } from "../utils/types";


const defaultStock: StockInfo = {
    "from": '',
    "to": '',
    "source": '',
    "type": '',
    "max": 0,
    "mean": 0,
    "median": 0,
    "min": 0,
    "std": 0
}

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



