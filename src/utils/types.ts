export interface StockInfo {
        from?: string | number,
        to?: string | number,
        source?: string,
        type?: string,
        max?: number,
        mean?: number,
        median?: number,
        min?: number,
        std?: number
    }

export interface requestBody  {
        indexs?: string,
        type: string,
        quantity: number,
        from: string,
        to: string
    }
