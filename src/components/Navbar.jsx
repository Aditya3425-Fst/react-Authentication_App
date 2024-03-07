import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className={Styles.Navbar}>
      <ul className={Styles.menu}>
        <li className={Styles.items}><Link to='/home' style={{color : "white"}}>Home</Link></li>
        <li className={Styles.items}><Link to='/signup' style={{ color: "white" }} >Signup</Link></li>
      </ul>
    </div>
  )
}
