import './App.css';
// import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Mylist from './Components/Mylist';
import ErrorPage from './Components/ErrorPage';
import Watchagain from './Components/Watchagain';
import Series from './Components/Series';
import Films from './Components/Films';
import Newpopular from './Components/Newpopular';
function App() {
  return (

      <Router>
  <Navbar/>
<Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/mylist" element = {<Mylist/>}/>
  <Route path= "/watchagain" element = {<Watchagain/>}/>
  <Route path= "/Series" element = {<Series/>}/>
  <Route path= "/Films" element = {<Films/>}/>
  <Route path= "/Newpopular" element = {<Newpopular/>}/>
  <Route path="*" element = {<ErrorPage/>}/>
</Routes>
</Router>
 
  );
}

export default App;
