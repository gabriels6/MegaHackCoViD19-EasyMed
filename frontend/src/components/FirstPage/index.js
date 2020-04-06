import React , { useState, useEffect}from 'react';
import './styles.css';

function FirstPage(){

    return(
        <div id = "Control">
        


            <div className = "Apresentacao">
            <center>Faça uma prescrição <br/>
            e agilize seu trabalho!
            <p/>

            <button id = "NovaPrescricao">Nova Prescrição</button>
            <p/>

            <img src = {require('./Tutorial.png')}/>


            </center>
            </div>
        </div>
    )
}


export default FirstPage;