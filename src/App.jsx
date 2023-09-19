import { useState } from 'react'
import './App.css'
import {Routes,Route,BrowserRouter } from "react-router-dom";
import Login from "./pages/login"
import  SignUp from "./pages/signup"
import  Landing  from './pages/landing';
import SingleProject from './pages/SingleProject';
import SingleProjectDark from './pages/SingleProjectDark';
import  Dashboard  from './pages/dashboard';
import Leaderboard from './pages/leaderboard';
import CreateProject from './pages/CreateProject';
function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path='/login' element ={<Login/>}/>
        <Route exact path='/signup' element ={<SignUp/>}/>
        <Route exact path="/project/:id" element={<SingleProjectDark/>}/>
        <Route exact path='/campus/dashboard/:id' element ={<Dashboard/>}/>
        <Route exact path='/add/project/' element ={<CreateProject/>}/>
        <Route exact path="leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
