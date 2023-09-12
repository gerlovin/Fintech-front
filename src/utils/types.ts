export interface StockInfo {
        from?: string,
        to?: string,
        source?: string,
        type?: string,
        max?: number,
        mean?: number,
        median?: number,
        min?: number,
        std?: number
    }

export interface RequestBody  {
        indexs?: string[],
        type: string,
        quantity: number,
        from: string,
        to: string
    }
