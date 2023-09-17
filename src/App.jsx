import { useState } from 'react'
import './App.css'
import {Routes,Route,BrowserRouter } from "react-router-dom";
import Login from "./pages/login"
import SignUp from "./pages/signup"
import  Landing  from './pages/landing';
import  Dashboard  from './pages/dashboard';
function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path='/login' element ={<Login/>}/>
        <Route exact path='/signup' element ={<SignUp/>}/>
        <Route exact path='/campus/dashboard/:id' element ={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
