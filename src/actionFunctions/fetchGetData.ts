import { putMessage } from "../reducers/messageReducer"
import { putStockInfo } from "../reducers/stockReducer";
import { AppDispatch } from "../store/configureStore";
import { password, username } from "../utils/constants";
//import { createToken } from "../utils/constants";
import { RequestBody } from "../utils/types";

export const fetchGetData = (indexs: string, quantity: number, type: string, from: string, to: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        try {
            const requestBody: RequestBody = {
                "indexs": indexs,
                "type": type,
                "quantity": quantity,
                "from": from,
                "to": to
            }
           
            const response = await fetch('/finstats.herokuapp.com/communication/index', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json',
                     Authorization: `Basic ${window.btoa(username + ':' + password)}`
  //                  Authorization: createToken!
                }
                
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

