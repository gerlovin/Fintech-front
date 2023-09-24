//import React, { useState } from 'react'
import { useAppSelector } from '../utils/hooks';
import messageReducer from '../reducers/messageReducer';
import stockReducer from '../reducers/stockReducer';
//import dayjs from 'dayjs';

const Statistics = () => {
  // const [dateFrom, setDateFrom] = useState(dayjs());
  // const [dateTo, setDateTo] = useState(dayjs());
  // const [source, setSource] = useState('');
  // const [fullType, setType] = useState('');
  // const [max, setMax] = useState('');
  // const [mean, setMean] = useState('');
  // const [median, setMedian] = useState('');
  // const [min, setMin] = useState('');
  // const [std, setStd] = useState('');

  const message = useAppSelector<ReturnType<typeof messageReducer>>(state => state.message);
  const info = useAppSelector<ReturnType<typeof stockReducer>>(state => {
   return state.stockInfo
  
  });
  
  return (
    <div className='infoStock'>
      {!message &&
        <div>
          <p>From: {info.from}</p>
          <p>To: {info.to}</p>
          <p>Source: {info.source}</p>
          <p>Type: {info.type}</p>
          <p>Max: {info.max}</p>
          <p>Mean: {info.mean}</p>
          <p>Median: {info.median}</p>
          <p>Min: {info.min}</p>
          <p>Std: {info.std}</p>
        </div>}
        <p>{message}</p>
    </div>
  )
}

export default Statistics
