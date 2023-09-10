import { useState } from 'react';
//import { fetchGetData } from '../actionFunctions/fetchGetData';
//import { useAppDispatch } from '../utils/hooks';
//import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import { Button, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const Form = () => {
    const [indexs, setIndexs] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('');
    const [dateFrom, setDateFrom] = useState(dayjs());
    const [dateTo, setDateTo] = useState(dayjs());

 const getData = () => {
    console.log('indexs: ', indexs);
    console.log('quantity: ', quantity);
    console.log('type: ', type);
    console.log('dateFrom: ', dateFrom.format('YYYY-MM-DD'));
    console.log('dateTo: ', dateTo.format('YYYY-MM-DD'));
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
                    setQuantity(e.target.value);
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
            <Button variant="contained" onClick={getData}>Get</Button>
        </LocalizationProvider>
    </div>
)
            }          
























//     const [indexs, setIndexs] = useState('');
//     const [type, setType] = useState('');
//     const [quantity, setQuantity] = useState(0);
//     const [dateFrom, setDateFrom] = useState(0);
//     const [dateTo, setDateTo] = useState(0);

//   const dispatch = useAppDispatch()

//     const handleClick = () => {
//           dispatch(fetchGetData(indexs, type, quantity, dateFrom, dateTo));

//     }



//     return (
//         <div>
//            <label>Indexs:
//                 <input
//                     type={'text'}
//                     onChange={e => setIndexs(e.target.value.trim())}
//                     value={indexs}
//                 />
//             </label>
//             <label>Type:
//                 <input
//                     type={'text'}
//                     onChange={e => setType(e.target.value.trim())}
//                     value={type}
//                 />
//             </label>
//             <label>Quantity:
//                 <input
//                     type={'text'}
//                     onChange={e => setQuantity(+e.target.value.trim())}
//                     value={quantity}
//                 />
//             </label>
//             <label>DateFrom:
//                 <input
//                     type={'date'}
//                     onChange={e => setDateFrom(+e.target.value.trim())}
//                     value={dateFrom}
//                 />
//             </label>
//             <label>DateTo:
//                 <input
//                     type={'date'}
//                     onChange={e => setDateTo(+e.target.value.trim())}
//                     value={dateTo}
//                 />
//             </label>
//             <button onClick={handleClick}>CALCULATE</button>
//         </div>


// //        <DateField label="Basic date field" />
//     )


export default Form