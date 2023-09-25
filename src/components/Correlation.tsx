import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { Autocomplete, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import allIndexesReducer from '../reducers/allIndexesReducer';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppDispatch } from '../store/configureStore';
import messageReducer, { putMessage } from '../reducers/messageReducer';
import { fetchAllIndices } from '../actionFunctions/fetchAllIndices';

const Correlation = () => {
    const [requestBody, setRequestBody] = useState({
        indices: ["GOLD", "AGRI"],
        from: dayjs("2023-05-05"),
        to: dayjs("2023-05-22")
    });
    const [response, setResponse] = useState(0);
    const dispatch = useAppDispatch();

    const allIndexes = useAppSelector<ReturnType<typeof allIndexesReducer>>(state => state.allIndexesInfo);
    const message = useAppSelector<ReturnType<typeof messageReducer>>(state => state.message);
    const parseData = () => {
        return {
            ...requestBody,
            from: requestBody.from.format('YYYY-MM-DD'),
            to: requestBody.to.format('YYYY-MM-DD')
        };

    }
    const handleClickCorrelation = () => {
        return async (dispatch: AppDispatch) => {
            dispatch(putMessage('Pending...'));
            try {
                dispatch(fetchAllIndices());
                const response = await fetch('http://localhost:8080/communication/index/correlation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(parseData()),
                });
                if (!response.ok) {
                    throw new Error(`An error has occured: ${response.status}`);
                }
                const data = await response.json();
                dispatch(putMessage(''));
                setResponse(data);
            }
            catch (e) {
                console.log(e);
                dispatch(putMessage('Error'));
            }
        }
    }

    // const handleClickCorrelation = () => {
    //     dispatch(fetchAllIndices());
    //     const apiUrl = 'http://localhost:8080/communication/index/correlation';
    //     fetch(apiUrl, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(parseData()),
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => setResponse(data))
    // }

    return (
        <div>
            <div className='form' >
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={allIndexes}
                    sx={{ width: 300 }}
                    //                defaultValue={[allIndexes[6]]}
                    renderInput={(allIndexes) => (
                        <TextField
                            {...allIndexes}
                            variant="standard"
                            label="Indices"
                            placeholder="Indices"
                        />
                    )}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker
                        label="DateFrom"
                        value={requestBody.from}
                        onChange={(newValue) => {
                            setRequestBody(setRequestBody => ({
                                ...setRequestBody,
                                from: newValue!
                            }));
                        }}
                    />
                    <DatePicker
                        label="DateTo"
                        value={requestBody.to}
                        onChange={(newValue) => {
                            setRequestBody(setRequestBody => ({
                                ...setRequestBody,
                                to: newValue!
                            }));
                        }}
                    />
                </LocalizationProvider>
                <Button variant="contained" onClick={handleClickCorrelation}>Correlation</Button>
            </div>
            {!message && <p>Correlation: {response}</p>}
            <p>{message}</p>

        </div>
    )
}

export default Correlation
