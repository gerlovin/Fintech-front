import { putMessage } from "../reducers/messageReducer"
import { putStockInfo } from "../reducers/stockReducer";
import { AppDispatch } from "../store/configureStore";
import { password, username } from "../utils/constants";
import { RequestBody } from "../utils/types";


export const fetchBetweenOne = (requestBody: RequestBody) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        try {
            const response = await fetch('http://localhost:8080/communication/index', {
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

