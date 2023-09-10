import { putMessage } from "../reducers/messageReducer"
import { putStockInfo } from "../reducers/stockReducer";
import { AppDispatch } from "../store/configureStore";
import { requestBody } from "../utils/types";




export const fetchGetData = (indexs: string, type: string, quantity: number, dateFrom: string, dateTo: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        try {
            const requestBody = {
                "indexs": indexs,
                "type": type,
                "quantity": quantity,
                "from": dateFrom,
                "to": dateTo
            }
            const response = await fetch('/finstats.herokuapp.com/communication/index', {
                method: 'POST',
                body: JSON.stringify(requestBody)
            });
            const data = await response.json();
            dispatch(putMessage(''))
            dispatch(putStockInfo(data));
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Fill in again'));
        }
    }
}

// const getData = async () => {
//         const requestBody = {
// "indexs": indexs,
//     "type": type,
//         "quantity": quantity,
//             "from": dateFrom,
//                 "to": dateTo
//         }
//         try {
//             const responce = await fetch('/finstats.herokuapp.com/communication/index', {
//                 method: 'POST',
//                 body: JSON.stringify(requestBody)
//             });

//             const data = await responce.json();
//             setDateFrom(data.from);
//             setDateTo(data.to);
//             setSource(data.source);
//             setType(data.fullType);
//             setMax(data.max);
//             setMean(data.mean);
//             setMedian(data.median);
//             setMin(data.min);
//             setStd(data.std);
//         } catch (e) {
//             console.log('Error');
//         }
