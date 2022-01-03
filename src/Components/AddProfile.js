import React from 'react'
import Smiles from '../smilesn.png'
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import { fontWeight } from '@mui/system';
export default function AddProfile() {
    const styles = {
        heading:{
            color:"white",
            fontSize:"3.8rem",
            fontWeight:500
        },
        text:{
            color:"#666666",
            fontSize:"1.3rem"
        },
     
        hr:{
           height:1,
           background:"#333333"
        },
        btns:{
            display:"flex",
            gap:"2rem",
            marginTop:"5%",
        },
        btn:{
            borderRadius:"0px",
            padding:"4px 30px",
            color:"black",
            background:"white",
            fontWeight:"bold",
            letterSpacing:"2px",
            textTransform:"none",
            fontSize:"1.1rem"
        },
        btnTwo:{
            borderColor:"#808080",
            color:"#808080",
            borderRadius:"0px",
            fontSize:"1.1rem",
            padding:"6px 35px",
            textTransform:"none",
            fontWeight:"bold"
        },
    
        chck:{
           width:"37px",
           height:"37px",
           color:"red",
           border:"none",
           outline:"none",
        },
        child:{
            color:"white",
            fontSize:"1.5rem",
            marginLeft:"-20px",
        },
        main:{
            display:"flex",
            flexWrap:"wrap",
            gap:"2rem",
            alignItems:"center",
            marginTop:"3%",
            marginBottom:"3%"
        },
        input:{
            width:"420px",
            background:"#666666",
            borderRadius:"0px",
            outline:"none",
            height:"4.7vh",
            color:"white"
        },
        enters3:{
            marginLeft:"-15px",
            marginTop:"5px"
        }
    }
    return (
        <div className='new-profile'>
            <h2 style={styles.heading}>Profil Ekle</h2>
            <br/>
            <p style={styles.text}>Netflix'i izleyen başka bir kişi için profil ekleyin.</p>
            <br/>
            <div style = {styles.hr}> </div>
            <div style = {styles.main}>
                <div>
            <img className='acc-pic-two' alt="accounts" src={Smiles}></img>
            </div>
            <div >
            <OutlinedInput
            style = {styles.input}
            placeholder =  {"Adı"}
          />
            </div>
            <div style = {styles.enters3}>
            <input style = {styles.chck} type = "checkbox" />
            </div>
            <p style = {styles.child}>Çocuk</p>
            </div>
            <div style = {styles.hr}></div>
            <div style = {styles.btns}>
            <Button style = {styles.btn} variant="contained">Devam Et</Button>
            <Button style = {styles.btnTwo} variant="outlined">İptal</Button>
            </div>
        </div>
    )
}
