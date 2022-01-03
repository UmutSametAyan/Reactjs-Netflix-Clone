import React from 'react'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';



export default function Whoiswatching(props) {

    const handleAccountSelect = (selectName, selectImg) => {
        props.account({ name: selectName, image: selectImg });
        localStorage.setItem("AccountInfo", JSON.stringify({ name: selectName, image: selectImg }));
    }

    const addNewProfile = () => {
        props.newProfile(true);
    }
    return (
        <div className='who-watch-all'>
            <h2 className="who-watch-text">Kim İzliyor?</h2>
            <br/>
            <br/>

            <div className='who-watch'>
                {props.accounts.map(acc => {
                    return (
                        <div>
                            <div onClick={() => handleAccountSelect(acc.name, acc.picture)}> <img className='acc-pic'  alt="accounts" src={acc.picture}></img> </div>
                            <p class="who-text">{acc.name}</p>
                        </div>
                    )
                })}
                <div>
                    <div onClick={addNewProfile} className='add-profile'>
                        <AddCircleSharpIcon className="add-icon" />
                    </div>
                    <p class="who-text ptext">Profil Ekle</p>
                </div>
            </div>
        </div>
    )
}
