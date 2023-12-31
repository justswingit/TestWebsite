import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    <Router>
     <Navbar /> 
     <Routes>
      <Route path='/' exact />
      <Redirect to='/'/>
     </Routes>
    </Router>    
    </>
  );
}

export default App;
