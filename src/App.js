import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Mylist from './Components/Mylist';
import ErrorPage from './Components/ErrorPage';
import Watchagain from './Components/Watchagain';
import Series from './Components/Series';
import Films from './Components/Films';
import Newpopular from './Components/Newpopular';
import Whoiswatching from './Components/Whoiswatching';
import Smiles from './smilesn.png'

function App() {

  const isLocalStorage = () => {
    const AccountInfo = JSON.parse(localStorage.getItem('AccountInfo'));
    if (AccountInfo) {
      return AccountInfo
    }
    else {
      return [];
    }
  }

  const [account, setAccount] = useState(isLocalStorage());

  const accounts = [
    { name: "Umut Samet", picture: "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41" },
    { name: "Fatma Sandal", picture: Smiles },
    { name: "Çocuk", picture: "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT5ixFQbYisnc8BoIn1xc_zMKDXVUUZsRdfNhsya9b89L6TukHzcbTefYwHzK-81f0E1jrC-R9AK9KRRBwGCLxs6FtBY.png?r=8f0" },
  ];
  
  return (

    <Router>

      <Navbar accounts={accounts} account={account} />
      <Routes>
        <Route path="/" element={account.length !== 0 ? <Home /> : <Whoiswatching accounts={accounts} account={acc => setAccount(acc)} />} />
        <Route path="/mylist" element={<Mylist />} />
        <Route path="/watchagain" element={<Watchagain />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/Newpopular" element={<Newpopular />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

  );
}

export default App;
