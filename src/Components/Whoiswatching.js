import React from 'react'
import Smiles from '../smilesn.png'
import Samet from '../bens.jpg'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
const accounts = [
    {name:"Umut Samet",picture: "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41"},
    {name:"Fatma",picture: Smiles},
    {name:"Çocuk",picture: "https://occ-0-784-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT5ixFQbYisnc8BoIn1xc_zMKDXVUUZsRdfNhsya9b89L6TukHzcbTefYwHzK-81f0E1jrC-R9AK9KRRBwGCLxs6FtBY.png?r=8f0"},
];


export default function Whoiswatching(props) {
    const handleAccountSelect = (selectName,selectImg) => {
        props.account({name:selectName,image:selectImg});
    }
    return (
  <div className='who-watch-all'>
      <h2 className = "who-watch-text">Kim İzliyor?</h2>
      <div className='who-watch'>
          {accounts.map(acc => {
              return(
                <div>
                <div onClick={() => handleAccountSelect(acc.name,acc.picture)}> <img className='acc-pic'width = "160" alt = "accounts" src = {acc.picture}></img> </div> 
                <p class = "who-text">{acc.name}</p>     
                </div>
              )
          })}
             <div>
                <div className='add-profile'> 
                <AddCircleSharpIcon className = "add-icon"/>

                </div> 
                <p class = "who-text ptext">Profil Ekle</p>     
                </div>
      </div>
  </div>
    )
}
