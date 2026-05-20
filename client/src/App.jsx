import React from 'react'
import './App.css'
import Login from './components/Login'
import CreateAcc from './components/CreateAcc'
import Frontpage from './components/Frontpage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>  
      <Routes>
        <Route path='/' element={<Frontpage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<CreateAcc/>}/>
      </Routes>
    </>

  )
}

export default App
