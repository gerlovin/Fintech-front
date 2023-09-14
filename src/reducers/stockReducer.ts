import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { StockInfo } from "../utils/types";


const defaultStock: StockInfo = {
    // "from": '',
    // "to": '',
    // "source": '',
    // "type": '',
    // "max": 0,
    // "mean": 0,
    // "median": 0,
    // "min": 0,
    // "std": 0
}

const stockSlice = createSlice({
    name: 'stock',
    initialState: defaultStock,
    reducers: {
        putStockInfo(stockInfo, action: PayloadAction<StockInfo[]>){
           stockInfo.from = action.payload[0].from;
           stockInfo.to = action.payload[0].to;
           stockInfo.source = action.payload[0].source;
           stockInfo.source = action.payload[0].source;
           stockInfo.type = action.payload[0].type;
           stockInfo.max = action.payload[0].max;
           stockInfo.mean = action.payload[0].mean;
           stockInfo.median = action.payload[0].median;
           stockInfo.min = action.payload[0].min;
           stockInfo.std = action.payload[0].std;
        }
        
    }
})

export const {putStockInfo} = stockSlice.actions;
export default stockSlice.reducer;



