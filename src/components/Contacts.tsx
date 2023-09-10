import React from 'react'
import style from '../styles/contacts.module.css'



const Contacts = () => {
  return (
    <div>
      <section className={style.page__header}>
        <div className={style.page_container}>
          <h1 className={style.page__title}>Contacts</h1>
        </div>
      </section>
      <section className='contacts'>
        <h5 className={style.correlation__subtitle}>Our Location and Contact Information</h5>
        <h3 className={style.correlation__title}>Let Us Help You with Your Questions and Concerns</h3>
        <p className={style.correlation__text}>You can reach us by phone, email, or through our online contact form. Our team is
          committed to providing exceptional customer service and will respond to your inquiries promptly. Don't hesitate
          to contact us - we are here to help you!</p>
        <div className={style.contacts__container}>
          <ul>
            <li className={style.contact_item}>
              <img src='./email.jpg' alt='email' />
              <h4 className={style.item__title}>oll@investing.com</h4>
              <h6 className={style.item__subtitle}>Online 24 hours</h6>
            </li>
            <li className={style.contact_item}>
              <img src='../images/support.jpg' alt='support' />
              <h4 className={style.item__title}>+972 53 111111</h4>
              <h6 className={style.item__subtitle}>Support 24/7</h6>
            </li>
            <li className={style.contact_item}>
              <img src='../images/address.jpg' alt='address' />
              <h4 className={style.item__title}>Prof. Menakhem Plaut St 10, Rehovot</h4>
              <h6 className={style.item__subtitle}>Sun - Fr: 8.00 - 18.00</h6>
            </li>
          </ul>
        </div>
      </section>
      <div className={style.map}></div>
    </div>
  )
}

export default Contacts
