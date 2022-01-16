import React, { useState } from 'react'
import Smiles from '../smilesn.png'
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
export default function AddProfile(props) {
    const [acc, setAcc] = useState("");
    const [isDisable, setIsDisable] = useState(false);

    const handleBack = () => {
        props.newProfiles(false);
    }

    const handleNewAccount = (newName, newPhoto) => {
        if (acc.length > 0) {
            props.accounts.push({ name: newName, picture: newPhoto });
            localStorage.setItem("allAccounts", JSON.stringify(props.accounts));
            props.newProfiles(false);
        }
        else {
            setIsDisable(true);
        }
    }

    const handleChange = (e) => {
        setAcc(e.target.value);
    }

    const styles = {
        heading: {
            color: "white",
            fontSize: "3.8rem",
            fontWeight: 500
        },
        text: {
            color: "#666666",
            fontSize: "1.3rem"
        },

        hr: {
            height: 1,
            background: "#333333",
            width: "100%"
        },
        btns: {
            display: "flex",
            gap: "1.2rem",
            marginTop: "5%",
        },
        btn: {
            borderRadius: "0px",
            padding: "4px 30px",
            color: "black",
            background: "white",
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "none",
            fontSize: "1.1rem"
        },
        btnTwo: {
            borderColor: "#808080",
            color: "#808080",
            borderRadius: "0px",
            fontSize: "1.1rem",
            padding: "6px 30px",
            textTransform: "none",
            letterSpacing: "2px"
        },

        chck: {
            width: "30px",
            height: "30px",
            border: "none",
            outline: "none",
        },
        chck2: {
            width: "30px",
            height: "30px",
            border: "none",
            outline: "none",
            marginTop:"-25px"
        },
        child: {
            color: "white",
            fontSize: "1.3rem",
            marginLeft: "-25px",
        },
        child2: {
            color: "white",
            fontSize: "1.3rem",
            marginLeft: "-25px",
            marginTop:"-2.5%"
        },
        main: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            gap: "2rem",
            alignItems: "center",
            marginTop: "4%",
            marginBottom: "4%"
        },
        input: {
            width: "360px",
            background: "#666666",
            borderRadius: "0px",
            outline: "none",
            height: "5.5vh",
            marginLeft: "-10px",
            color: "white"
        },
        enters3: {
            marginLeft: "-15px",
            marginTop: "5px"
        },
        please: {
            color: "red",
            marginLeft: "-2.5%",
            marginTop: "2%"
        }
    }
    return (
        <div className='new-profile'>
            <div className='new-profile-md'>
                <div>
                    <h2 style={styles.heading}>Profil Ekle</h2>
                    <br />
                    <p style={styles.text}>Netflix'i izleyen başka bir kişi için profil ekleyin.</p>
                    <br />
                    <div style={styles.hr}> </div>
                </div>
                <div className='style-main' style={styles.main}>
                    <div>
                        <img className='acc-pic-two' alt="accounts" src={Smiles} />
                    </div>
                    <div >
                        <OutlinedInput
                            onChange={handleChange}
                            className="inpts"
                            style={styles.input}
                            placeholder={"Adı"}
                        />
                        {isDisable ? <div style={styles.please}> Lütfen bir ad girin </div> : null}

                    </div>
                    <div style={styles.enters3}>
                        <input style={!isDisable ? styles.chck : styles.chck2} type="checkbox" />
                    </div>
          
                    <p style = {!isDisable ? styles.child : styles.child2}>Çocuk</p>
                </div>
                <div style={styles.hr}></div>
                <div className='style-btn' style={styles.btns}>
                    <Button onClick={() => handleNewAccount(acc, Smiles)} style={styles.btn} variant="contained">Devam Et</Button>
                    <Button onClick={handleBack} style={styles.btnTwo} variant="outlined">İptal</Button>
                </div>
            </div>
        </div>
    )
}
