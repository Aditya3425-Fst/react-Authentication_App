import React, { useState } from 'react'
import Styles from './Signin.module.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Signin() {
  const [data,setData] = useState({
    mail:'',
    pass:''
  });
  const navi = useNavigate();
  function handleSumit(e){
    e.preventDefault();
    if(localStorage.getItem(`${data.mail}`) === null){
      alert(`Email is not valid!!
       Please Signup!!`);
    } else{
      let obj = JSON.parse(localStorage.getItem(`${data.mail}`));
      if (data.mail == obj.mail && data.pass === obj.pass) {
        alert(`welcome ${obj.user}!!`);
        navi("/Home");
      } else {
        alert("Email or Password is not valid");
      }
    }
  }
  return (
    <div className={Styles.head}>
      <form onSubmit={handleSumit}>
        <h1 className={Styles.heading}>SignIn </h1>
              <label for="email" className={Styles.label}>Email Id:</label>
        <input type="text" id="email" name="Emailid" placeholder="Email Id..." className={Styles.input} value={data.mail} onChange={(e) => setData({ ...data, mail: e.target.value })} /><br></br>  
              <label for="password" className={Styles.label}>Password:</label>
        <input type="text" id="password" name="Password" placeholder="Password..." className={Styles.input} value={data.pass} onChange={(e) => {
          console.log(data.pass)
          setData({ ...data, pass: e.target.value })
        }} /><br></br>
              <button className={Styles.btn}>SignIn</button>
           
      </form>
      <p>Create a NewAccount  <Link to='/signup'>Signup</Link></p>
    </div>
  )
}
