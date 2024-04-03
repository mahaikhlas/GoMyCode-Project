import React from 'react'
import Navbar from './component/Navbar/Navbar'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Bachelor from './Pages/Bachelor/Bachelor'
import Home from './component/Home/Home'
import Master from './Pages/Master/Master'
import Eng from './Pages/Eng/Eng'
import Form from './Pages/Form/Form'




const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Home/>} ></Route>
      <Route path='/Bachelor' element ={<Bachelor/>} ></Route>
      <Route path='/master' element ={<Master/>} ></Route>
      <Route path='/eng' element ={<Eng/>}></Route>
      <Route path='/form' element={<Form />} ></Route>
      
    </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
