import { useState } from 'react';
import dayjs from 'dayjs';
import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppDispatch } from '../utils/hooks';
import { fetchGetData } from '../actionFunctions/fetchGetData';


const Form = () => {
    const [indexs, setIndexs] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [type, setType] = useState('');
    const [dateFrom, setDateFrom] = useState(dayjs());
    const [dateTo, setDateTo] = useState(dayjs());
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(fetchGetData(indexs, quantity, type, dateFrom.format('YYYY-MM-DD'), dateTo.format('YYYY-MM-DD')));
        setIndexs('');
        setQuantity(0);
        setType('');
        setDateFrom(dayjs());
        setDateTo(dayjs());
        // console.log('indexs: ', indexs);
        // console.log('quantity: ', quantity);
        // console.log('type: ', type);
        // console.log('dateFrom: ', dateFrom.format('YYYY-MM-DD'));
        // console.log('dateTo: ', dateTo.format('YYYY-MM-DD'));
    }
    return (
        <div className='form'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextField
                    id="indexs"
                    label="Indexs"
                    value={indexs}
                    onChange={(e) => {
                        setIndexs(e.target.value);
                    }}
                />
                <TextField
                    id="quantity"
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => {
                        setQuantity(+e.target.value);
                    }}
                />
                <TextField
                    id="type"
                    label="Type"
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                />
                <DatePicker
                    label="DateFrom"
                    value={dateFrom}
                    onChange={(newValue) => setDateFrom(newValue!)}
                />
                <DatePicker
                    label="DateTo"
                    value={dateTo}
                    onChange={(newValue) => setDateTo(newValue!)}
                />
                <Button variant="contained" onClick={handleClick}>Get</Button>
            </LocalizationProvider>
        </div>
    )
}

export default Form