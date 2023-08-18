import React from 'react'
import Home from './Home'
import Statistics from './Statistics'
import Analytics from './Analytics'
import Contacts from './Contacts'
//import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div>
            <h1>StockStat</h1>
            <Home />
            <Statistics />
            <Analytics />
            <Contacts />
            <p>oll@investing.com</p>
            <p>+972 53 111111</p>
            </div>
            

        </header>

// {/* <header>
// <div>
//   <h1><span className='redFont'>Stock</span>Stat</h1>
// </div>
// <ul className='headerNavs'>
//   <li>
//     <Link className='navItem' to="/">Home</Link>
//   </li>
//   <li>
//     <Link className='navItem' to="/about">Statistics</Link>
//   </li>
//   <li>
//     <Link className='navItem' to="/ip">Analytics</Link>
//   </li>
//   <li>
//     <Link className='navItem' to="/ip">Contacts</Link>
//   </li>
// </ul>
// <div>+972 53 111111</div>
// </header> */}



//         <header className="header">
//     <nav className="navbar fixed-top">
//         <div className="header__container">
//         <span className="logo">
//             Stock<span className="logo__part--them-light">Stat</span></span
//         >
//             <ul className="navigation__list">
//                 <li className="navigation__item">
//                     <a className="navigation__link link" href="./index.html">Home</a></li>
//                 <li className="navigation__item">
//                     <a className="navigation__link link" href="./statistics.html">Statistics</a></li>
//                 <li className="navigation__item">
//                     <a className="navigation__link link" href="./analytics.html">Analytics</a></li>
//                 <li className="navigation__item">
//                     <a className="navigation__link link" href="./contacts.html">Contacts</a></li>
//             </ul>
//             <ul className="header__contact">
//                 <li>oll@investing.com</li>
//                 <li>+972 53 111111</li>
//             </ul>
//         </div>
//     </nav>
// </header>
    )
 
}

export default Header
