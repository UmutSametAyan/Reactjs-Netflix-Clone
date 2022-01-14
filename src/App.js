import './App.css';
import React, { useState,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Smiles from './smilesn.png'


const Navbar = React.lazy(() => import('./Components/Navbar'));
const Home = React.lazy(() => import('./Components/Home'));
const Mylist = React.lazy(() => import('./Components/Mylist'));
const ErrorPage = React.lazy(() => import('./Components/ErrorPage'));
const Watchagain = React.lazy(() => import('./Components/Watchagain'));
const Series = React.lazy(() => import('./Components/Series'));
const Films = React.lazy(() => import('./Components/Films'));
const Newpopular = React.lazy(() => import('./Components/Newpopular'));
const Whoiswatching = React.lazy(() => import('./Components/Whoiswatching'));

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
<Suspense fallback = {<p style = {{fontSize:"70px",color:"white"}}>Loading..</p>}>
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
</Suspense>
 
    </Router>

  );
}

export default App;
