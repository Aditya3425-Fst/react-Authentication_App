import React, { useState } from 'react'
import Styles from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
  const [data,setData] = useState({
    user:'',
    pass:'',
    num:'',
    email:''
  })
  const nav = useNavigate();
  function handleSumit(e){
    e.preventDefault();
    if(localStorage.getItem(`${data.email}`)===null){
      localStorage.setItem(`${data.email}`,JSON.stringify(data))
      alert('Details save Successfully');
      nav('/Home');
    }
    else{
      alert('A User with this email are already  Exist . Please SignIn')
    }
  }
  return (
      <div className={Styles.head}>
        <h1 className={Styles.heading}>SignUp Form</h1>
        <form onSubmit={handleSumit}>
          <label for="username" className={Styles.label}>UserName: </label>
          <input type="text" id="username" name="UserName" placeholder="UserName..." className={Styles.input} value={data.user} onChange={(e)=>setData({...data,user:e.target.value})}/><br></br>
         <label for="password" className={Styles.label}>Password:</label>
        <input type="text" id="password" name="Password" placeholder="Password..." className={Styles.input} value={data.pass} onChange={(e) => setData({ ...data, pass: e.target.value })} /><br></br>
        <label for="phone" className={Styles.label}>Phone NO:</label>
        <input type="text" id="phone" name="PhoneNo" placeholder="Phone No..." className={Styles.input} value={data.num} onChange={(e) => setData({ ...data, num: e.target.value })} /><br></br>
              
        <label for="email" className={Styles.label}>Email Id:</label>
        <input type="text" id="email" name="EmailNo" placeholder="Email Id..." className={Styles.input} data={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} /><br></br>  
               <button className={Styles.btn}>SignUp</button>
           </form>
           <p>Already User <Link to='/signin'>Login</Link></p>
    </div>
  )
}
