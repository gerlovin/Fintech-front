import { useState } from 'react';
import dayjs from 'dayjs';
import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppDispatch } from '../utils/hooks';
import { fetchBetweenOne } from '../actionFunctions/fetchBetweenOne';
import { fetchAllIndexes } from '../actionFunctions/fetchAllIndexes'
import Analytics from './Analytics';


const Form = () => {
    const [requestBody, setRequestBody] = useState({
        indexs: ['SNP500'],
        type: 'days',
        quantity: 5,
        from: dayjs('2019-04-13'),
        to: dayjs('2019-04-13')
    });
    // const [indexs, setIndexs] = useState('SNP500');
    // const [quantity, setQuantity] = useState(5);
    // const [type, setType] = useState('days');
    // const [dateFrom, setDateFrom] = useState(dayjs('2018-04-13'));
    // const [dateTo, setDateTo] = useState(dayjs('2019-04-13'));
    const dispatch = useAppDispatch();

    const handleClickBetweenOne = () => {
        dispatch(fetchBetweenOne(requestBody.indexs, requestBody.quantity, requestBody.type, requestBody.dateFrom.format('YYYY-MM-DD'), requestBody.dateTo.format('YYYY-MM-DD')));
        setRequestBody({
            indexs: [''],
        type: '',
        quantity: 0,
        from: dayjs('2019-04-13'),
        to: dayjs('2019-04-13')
        })
        // setIndexs('');
        // setQuantity(0);
        // setType('');
        // setDateFrom(dayjs());
        // setDateTo(dayjs());
    }

    const handleClickAllIndexes = () => {
        dispatch(fetchAllIndexes());
    }

    const handleClickIncomeApyAllDate = () => {
        dispatch(fetchIncomeApyAllDate(indexs, quantity, type, dateFrom.format('YYYY-MM-DD'), dateTo.format('YYYY-MM-DD')));
        
        setRequestBody({
            indexs: [''],
        type: '',
        quantity: 0,
        from: dayjs('2019-04-13'),
        to: dayjs('2019-04-13')
        })// setIndexs('');
        // setQuantity(0);
        // setType('');
        // setDateFrom(dayjs());
        // setDateTo(dayjs());
    }

    return (
        <div className='form'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextField
                    id="indexs"
                    label="Indexs"
                    value={requestBody.indexs}
                    onChange={(e) => {
                        setIndexs(e.target.value);
                    }}
                />
                <TextField
                    id="quantity"
                    label="Quantity"
                    value={requestBody.quantity}
                    onChange={(e) => {
                        setQuantity(+e.target.value);
                    }}
                />
                <TextField
                    id="type"
                    label="Type"
                    value={requestBody.type}
                    onChange={(e) => {
                        setRequestBody(requestBody => ({ requestBody.type = e.target.value }));
                    }}
                />
                <DatePicker
                    label="DateFrom"
                    value={requestBody.dateFrom}
                    onChange={(newValue) => setDateFrom(newValue!)}
                />
                <DatePicker
                    label="DateTo"
                    value={requestBody.dateTo}
                    onChange={(newValue) => setDateTo(newValue!)}
                />
                <Button variant="contained" onClick={handleClickBetweenOne}>Period between For One Company</Button>
                <Button variant="contained" onClick={handleClickAllIndexes}>Get all indexes</Button>
                <Button variant="contained" onClick={handleClickIncomeApyAllDate}>Calc Income with Apy All Date</Button>
                <div>
                    <Analytics />
                </div>
            </LocalizationProvider>
        </div>
    )
}

export default Form