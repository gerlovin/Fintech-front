import { putMessage } from "../reducers/messageReducer";
import { AppDispatch } from "../store/configureStore";
import { RequestBody } from "../utils/types";

export const fetchBetweenOne = (indexs: string, quantity: number, type: string, from: string, to: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        const indexArray = [indexs];
        try {
            const requestBody: RequestBody = {
                "indexs": indexArray,
                "type": type,
                "quantity": quantity,
                "from": from,
                "to": to
            }
            const response = await fetch('https://finstats.herokuapp.com/communication/index/apy_all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${window.btoa(username + ':' + password)}`
                    //                  Authorization: createToken!
                },
                body: JSON.stringify(requestBody),
            });
            const data = await response.json();
            dispatch(putMessage(''));
            dispatch(putStockInfo(data));
            console.log(data);
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Fill in again'));
        }
    }
}
