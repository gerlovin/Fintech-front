import React from 'react'
import style from '../styles/contacts.module.css'
import Form from './Form'

const Analytics = () => {
  return (
    <div>
     <section className={style.page__header}>
        <div className={style.page_container}>
          <h1 className={style.page__title}>Contacts</h1>
        </div>
      </section>
      <Form />
    </div>
    
  )
}

export default Analytics
