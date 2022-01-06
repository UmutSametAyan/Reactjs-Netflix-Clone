import React from 'react'

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
    return (
        <div>
           <div className='profile-bar'>
                      <ul className='list-ul'>
                        {dataControl().map(accs => {
                          return (
                            <div style={{display:"flex",alignItems:"center",gap:"0.5rem",paddingLeft:"10px",paddingTop:"10px"}}>
                              <img alt = "account icons" src={accs.picture} width="17%" />
                              <li className='list-li'> {accs.name} </li>
                            </div>
                      
                          )
                        })}
                      </ul>
               <ul className='list-ul' style={{padding:"10px"}}>
                 <li className='list-li sec'>Profil Yönetimi</li>
                 <div className='hr'></div>
                 <li className='list-li sec'>Hesap</li>
                 <li className='list-li sec'>Yardım Merkezi</li>
                 <li className='list-li sec'>Netflix oturumunu kapat</li>
                </ul>
                       </div> 
        </div>
    )
}
