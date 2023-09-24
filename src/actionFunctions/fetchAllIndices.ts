import { putAllIndexes } from "../reducers/allIndexesReducer";
import { putMessage } from "../reducers/messageReducer"
import { AppDispatch } from "../store/configureStore";
import { password, username } from "../utils/constants";


export const fetchAllIndices = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));

        try {
            const response = await fetch('http://localhost:8080/communication/index', {
                method: 'GET',
                headers: {
 //                   'Content-Type': 'application/json',
                    Authorization: `Basic ${window.btoa(username + ':' + password)}`
                    //                  Authorization: createToken!
                }

            });
            const data = await response.json();
            dispatch(putMessage(''))
            dispatch(putAllIndexes(data));
            
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Error'));
        }
    }
}

