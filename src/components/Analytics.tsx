import React, { useEffect, useState } from 'react'
//import style from '../styles/contacts.module.css'
import { useAppSelector } from '../utils/hooks';
import messageReducer, { putMessage } from '../reducers/messageReducer';
//import { password, username } from '../utils/constants';
import { AppDispatch } from '../store/configureStore';
import { RequestBody } from '../utils/types';

const Analytics = ({requestBody}: {requestBody: RequestBody}) => {
  // const Analytics = ({requestBody, ...props}: {requestBody: RequestBody}) => {
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

    //  const async fetchIncomeApyAllDate = () => {
    async function fetchIncomeApyAllDate() {
      //   return async (dispatch: AppDispatch) => {
      //     dispatch(putMessage('Pending...'));
      //         const indexArray = [indices];
      try {
        // const requestBody: RequestBody = {
        //     "indices": indexArray,
        //     "type": type,
        //     "quantity": quantity,
        //     "from": from,
        //     "to": to
        // }
        const response = await fetch('http://localhost:8080/communication/index/apy_all', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            //  Authorization: `Basic ${window.btoa(username + ':' + password)}`
            //                  Authorization: createToken!
          },
          body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
          throw new Error(`An error has occured: ${response.status}`);
        }
        const data = await response.json();
        //      dispatch(putMessage(''));
        //              dispatch(putStockInfo(data));
        console.log(data);
        setIncomeApyAllDate({
          source: data.source,
          historyFrom: data.historyFrom,
          historyTo: data.historyTo,
          type: data.type,
          from: data.from,
          to: data.to,
          purchaseAmount: data.purchaseAmount,
          saleAmount: data.saleAmount,
          income: data.income,
          apy: data.apy
        })
      } catch (e) {
        console.log(e);
        //      dispatch(putMessage('Fill in again'));

      }
    }
    fetchIncomeApyAllDate();

  }, []);

  return (
    <div>
      {/* <section className={style.page__header}> */}
      {/* <div className={style.page_container}> */}
      <div className='infoStock'>
        {!message &&
          <div>
            <p>Source: {incomeApyAllDate.source}</p>
            <p>HistoryFrom: {incomeApyAllDate.historyFrom}</p>
            <p>HistoryTo: {incomeApyAllDate.historyTo}</p>
            <p>Type: {incomeApyAllDate.type}</p>
            <p>From: {incomeApyAllDate.from}</p>
            <p>To: {incomeApyAllDate.to}</p>
            <p>PurchaseAmount: {incomeApyAllDate.purchaseAmount}</p>
            <p>SaleAmount: {incomeApyAllDate.saleAmount}</p>
            <p>Income: {incomeApyAllDate.income}</p>
            <p>Apy: {incomeApyAllDate.apy}</p>
          </div>}
        <p>{message}</p>
      </div>
      {/* </div> */}
      {/* </section> */}
    </div>

  )
}

export default Analytics
