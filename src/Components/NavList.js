import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function NavList(props) {

const dataControl = () => {
  const allAccounts = JSON.parse(localStorage.getItem('allAccounts'));
  if(allAccounts){
    return allAccounts.filter(currentAcc => currentAcc.name !== props.account.name);;
  }
  else {
   return props.accounts.filter(currentAcc => currentAcc.name !== props.account.name);
  }
}

const removeAccount = () => {
  localStorage.removeItem("AccountInfo");
  window.location.reload();
}
const changeAccount = (newName,newImg) => {
  localStorage.setItem("AccountInfo",JSON.stringify({name:newName,image:newImg}));
  window.location.reload();
}
    return (
        <div>
           <div className='profile-bar'>
                      <ul className='list-ul'>
                        <div className='ll'><KeyboardArrowUpIcon style = {{fontSize:"25px"}} /> </div>
                        {dataControl().map(accs => {
                          return (
                            <div style={{display:"flex",alignItems:"center",gap:"0.5rem",paddingLeft:"10px",paddingTop:"10px"}}>
                              <img alt = "account icons" src={accs.picture} width="17%" />
                              <li onClick = {() => changeAccount(accs.name,accs.picture)} className='list-li'> {accs.name} </li>
                            </div>
                      
                          )
                        })}
                      </ul>
               <ul className='list-ul' style={{padding:"10px"}}>
                 <li onClick={removeAccount} className='list-li sec'>Profil Yönetimi</li>
                 <div className='hr'></div>
                 <li className='list-li sec'>Hesap</li>
                 <li className='list-li sec'>Yardım Merkezi</li>
                 <li className='list-li sec'>Netflix oturumunu kapat</li>
                </ul>
                       </div> 
        </div>
    )
}
