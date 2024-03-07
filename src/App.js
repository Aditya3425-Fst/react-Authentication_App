import React from 'react'
import './App.css' 
import Signup from './components/Signup'
import Signin from './components/Signin'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
export default function App() {
  return (
    <div >
      <Navbar/>
     <Routes>
      <Route path='/home'element={<Home/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/'element={<Signup/>}/>
        <Route path='/signup' element={<Signup />} />
     </Routes>
    </div>

  )
}
