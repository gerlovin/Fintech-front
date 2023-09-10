import { TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Test = () => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DatePicker label="Basic date picker" />

            </LocalizationProvider>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    )
}

export default Test
