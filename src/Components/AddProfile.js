import React from 'react'
import Smiles from '../smilesn.png'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { fontFamily } from '@mui/system';
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
        main:{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:"3.5%",
            marginBottom:"3.5%"
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
        input:{
            background:"#808080",
            outline:"none",
            height:"5.5vh",
            border:"none",
            width:"58%"
        },
        chck:{
           width:"35px",
           height:"35px",
           color:"red",
           border:"none",
           outline:"none",
           background:"background: rgba(0, 0, 0, 0);"
        },
        child:{
            color:"white"
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
            <img className='acc-pic-two' width="22%" alt="accounts" src={Smiles}></img>
            <input placeholder='Adı' style = {styles.input} type = "text" />
            <input style = {styles.chck} type = "checkbox" />
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
