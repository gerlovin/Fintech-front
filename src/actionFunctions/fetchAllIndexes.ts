import { putMessage } from "../reducers/messageReducer"
import { putStockInfo } from "../reducers/stockReducer";
import { AppDispatch } from "../store/configureStore";
import { password, username } from "../utils/constants";


export const fetchAllIndexes = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));

        try {
            const response = await fetch('https://finstats.herokuapp.com/index', {
                method: 'GET',
                headers: {
 //                   'Content-Type': 'application/json',
                    Authorization: `Basic ${window.btoa(username + ':' + password)}`
                    //                  Authorization: createToken!
                }

            });
            const data = await response.json();
            dispatch(putMessage(''))
            dispatch(putStockInfo(data));
            console.log(data);
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Error'));
        }
    }
}

