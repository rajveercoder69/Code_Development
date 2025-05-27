import './App.css';
import React from 'react';
import Navbar from './Component/navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Component/home';
import About from './Component/about';
import NoteState from './notecontext/noteState';
import Login from './Component/Login';
import Signup from './Component/Signup';
import CostEstimate from './Component/CostEstimate';


function App() {
  return (
   <>
   <NoteState>
   <Router>
   <Navbar/>
   <div className="container">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/CostEstimate' element={<CostEstimate/>}/>
    </Routes>
    </div>
   </Router>
   </NoteState>
  </>
  );
}

export default App;
