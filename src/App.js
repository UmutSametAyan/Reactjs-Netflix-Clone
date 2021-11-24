import './App.css';
// import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Mylist from './Components/Mylist';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (

      <Router>
  <Navbar/>
<Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/mylist" element = {<Mylist/>}/>
  <Route path="*" element = {<ErrorPage/>}/>
</Routes>
</Router>
 
  );
}

export default App;
