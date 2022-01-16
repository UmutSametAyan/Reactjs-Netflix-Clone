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

    const dataControl = () => {
        const allAccounts = JSON.parse(localStorage.getItem('allAccounts'));
        if (allAccounts) {
            return allAccounts;
        }
        else {
            return props.accounts;
        }
    }
    return (
        <div className='who-watch-all'>
            <h2 className="who-watch-text">Kim İzliyor?</h2>
            <br />
            <br />

            <div className='who-watch'>
                {dataControl().map(acc => {
                    return (
                        <div>
                            <div className='main-divs' style={{ backgroundImage: `url("${acc.picture}")` }} onClick={() => handleAccountSelect(acc.name, acc.picture)}>
                            </div>
                            <p class="who-text">{acc.name}</p>
                        </div>
                    )
                })}
                {/* <div>
                    <div onClick={addNewProfile} className='add-profile'>
                        <AddCircleSharpIcon className="add-icon" />
                    </div>
                    <p class="who-text ptext">Profil Ekle</p>
                </div>
            </div>
            <div class = "profile-manager">
                <h2>Profil Yönetimi</h2>
            </div> */}
                <div onClick={addNewProfile} className='main-divs add-div'>
                     <div> <AddCircleSharpIcon className="add-icon" /></div>   
                     <p class="who-text ptext">Profil Ekle</p>
                </div>
            </div>
            <div class = "profile-manager">
                <h2>Profil Yönetimi</h2>
            </div>
        </div>
    )
}
