import React, { useState } from 'react'
import style from '../styles/contacts.module.css'
import { useAppSelector } from '../utils/hooks';
import messageReducer from '../reducers/messageReducer';

const Analytics = () => {
  const message = useAppSelector<ReturnType<typeof messageReducer>>(state => state.message);
  const [incomeApyAllDate, setIncomeApyAllDate] = useState({
    source: '',
    historyFrom: '',
    historyTo: '',
    type: '',
    from: '',
    to: '',
    purchaseAmount: 0,
    saleAmount: 0,
    income: 0,
    apy: 0

  });

  useEffect(() => {

    const fetchBetweenOne = (indexs: string, quantity: number, type: string, from: string, to: string) => {
      return async (dispatch: AppDispatch) => {
          dispatch(putMessage('Pending...'));
          const indexArray = [indexs];
          try {
              const requestBody: RequestBody = {
                  "indexs": indexArray,
                  "type": type,
                  "quantity": quantity,
                  "from": from,
                  "to": to
              }
              const response = await fetch('https://finstats.herokuapp.com/communication/index/apy_all', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Basic ${window.btoa(username + ':' + password)}`
                      //                  Authorization: createToken!
                  },
                  body: JSON.stringify(requestBody),
              });
              const data = await response.json();
              dispatch(putMessage(''));
              dispatch(putStockInfo(data));
              console.log(data);
          } catch (e) {
              console.log(e);
              dispatch(putMessage('Fill in again'));
          }
      }
  }
  

    return () => {
      effect
    };
  }, [input]);








  return (
    <div>
      {/* <section className={style.page__header}> */}
        {/* <div className={style.page_container}> */}
          <div className='Analytics'>
            {!message &&
              <div>
                <p>Source: {incomeApyAllDate.source}</p>
                <p>To: {incomeApyAllDate.historyFrom}</p>
                <p>Source: {incomeApyAllDate.historyTo}</p>
                <p>Type: {incomeApyAllDate.type}</p>
                <p>Max: {incomeApyAllDate.from}</p>
                <p>Mean: {incomeApyAllDate.to}</p>
                <p>Median: {incomeApyAllDate.purchaseAmount}</p>
                <p>Min: {incomeApyAllDate.saleAmount}</p>
                <p>Std: {incomeApyAllDate.income}</p>
                <p>Std: {incomeApyAllDate.apy}</p>
              </div>}
            <p>{message}</p>
          </div>
        {/* </div> */}
      {/* </section> */}
    </div>

  )
}

export default Analytics
