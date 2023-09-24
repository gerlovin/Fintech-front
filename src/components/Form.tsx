import { useState } from 'react';
import dayjs from 'dayjs';
import { Autocomplete, Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { fetchBetweenOne } from '../actionFunctions/fetchBetweenOne';
import { fetchAllIndices } from '../actionFunctions/fetchAllIndices'
import allIndexesReducer from '../reducers/allIndexesReducer';
import Analytics from './Analytics';
import { RequestBody } from '../utils/types';


const Form = () => {
    const [state, setState] = useState({
        indices: ['GOLD'],
        type: 'days',
        quantity: 5,
        from: dayjs('2015-04-13'),
        to: dayjs('2019-04-13')
    });
    const [showAnalitics, setShowAnalitics] = useState(false);

    const dispatch = useAppDispatch();

    const allIndexes = useAppSelector<ReturnType<typeof allIndexesReducer>>(state => state.allIndexesInfo);

    const parseData = (): RequestBody => {
        return {
            ...state,
            from: state.from.format('YYYY-MM-DD'),
            to: state.to.format('YYYY-MM-DD')
        };

    }
    const handleClickBetweenOne = () => {
        dispatch(fetchBetweenOne(parseData()));
        // setRequestBody({
        //     indices: [''],
        //     type: '',
        //     quantity: 0,
        //     from: dayjs('2015-04-13'),
        // to: dayjs('2019-04-13')
        //   })


    }

    const handleClickAllIndices = () => {
        dispatch(fetchAllIndices());


    }

    const handleClickIncomeApyAllDate = () => {
        setShowAnalitics(true);

        //      dispatch(fetchIncomeApyAllDate(indices, quantity, type, from.format('YYYY-MM-DD'), to.format('YYYY-MM-DD')));

        // setRequestBody({
        //     indices: [''],
        //     type: '',
        //     quantity: 0,
        //     from: dayjs('2019-04-13'),
        //     to: dayjs('2019-04-13')
        // })

    }

    return (
        <div className='form'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={allIndexes}
                    sx={{ width: 300 }}
                    renderInput={(allIndexes) => <TextField {...allIndexes} label="Indices" />}
                />

                <TextField
                    id="indices"
                    label="Indices"
                    value={state.indices}
                    onChange={(e) => {
                        setState(prevState => ({
                            ...prevState,
                            indices: [e.target.value]
                        }));
                    }}
                />
                <TextField
                    id="quantity"
                    label="Quantity"
                    value={state.quantity}
                    onChange={(e) => {
                        setState(prevState => ({
                            ...prevState,
                            quantity: +e.target.value
                        }));
                    }}
                />
                <TextField
                    id="type"
                    label="Type"
                    value={state.type}
                    onChange={(e) => {
                        setState(prevState => ({
                            ...prevState,
                            type: e.target.value
                        }));
                    }}
                />
                <DatePicker
                    label="DateFrom"
                    value={state.from}
                    onChange={(newValue) => {
                        setState(prevState => ({
                            ...prevState,
                            from: newValue!
                        }));
                    }}
                />
                <DatePicker
                    label="DateTo"
                    value={state.to}
                    onChange={(newValue) => {
                        setState(prevState => ({
                            ...prevState,
                            to: newValue!
                        }));
                    }}

                />
                <Button variant="contained" onClick={handleClickBetweenOne}>Period between For One Company</Button>
                <Button variant="contained" onClick={handleClickAllIndices}>Get all indices</Button>
                

            </LocalizationProvider>
            <Button variant="contained" onClick={handleClickIncomeApyAllDate}>Calc Income with Apy All Date</Button>
            <div>
                {showAnalitics && <Analytics requestBody={parseData()} />}
            </div>
        </div>
    )
}

export default Form