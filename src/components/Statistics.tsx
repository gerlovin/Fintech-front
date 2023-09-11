import React, { useState } from 'react'
import { useAppSelector } from '../utils/hooks';
import messageReducer from '../reducers/messageReducer';
import stockReducer from '../reducers/stockReducer';
import dayjs from 'dayjs';

const Statistics = () => {
  const [dateFrom, setDateFrom] = useState(dayjs());
  const [dateTo, setDateTo] = useState(dayjs());
  const [source, setSource] = useState('');
  const [fullType, setType] = useState('');
  const [max, setMax] = useState('');
  const [mean, setMean] = useState('');
  const [median, setMedian] = useState('');
  const [min, setMin] = useState('');
  const [std, setStd] = useState('');

  const message = useAppSelector<ReturnType<typeof messageReducer>>(state => state.message);
  const info = useAppSelector<ReturnType<typeof stockReducer>>(state => state.stockInfo)
  return (
    <div className='infoStock'>
      {!message &&
        <div>
          <p>From: +{dateFrom}</p>
          <p>To: +{dateTo}</p>
          <p>Source: +{source}</p>
          <p>Type: +{fullType}</p>
          <p>Max: +{max}</p>
          <p>Mean: +{mean}</p>
          <p>Median: +{median}</p>
          <p>Min: +{min}</p>
          <p>Std: +{std}</p>
        </div>}
    </div>
  )
}

export default Statistics
