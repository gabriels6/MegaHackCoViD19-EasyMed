import React , { useState, useEffect}from 'react'
import './styles.css'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
   } from "react-router-dom";

import api from '../../services/api';

function MainPage(){

    const [ prescriptions, setPrescriptions ] = useState([]);
  
    useEffect(()=>{
      async function obterPrescricoes(){
         const response = await api.get('/obterPrescricoes');
  
         setPrescriptions(response.data);
  
      }
      obterPrescricoes();
    }, []);

    return(
        <div className = "Control">

<div className = "escolhaPaciente">

<b>Ache o seu Paciente</b>
<p></p>
<select id = "Pacientes">
{prescriptions.map(prescription =>(
<option key = {prescription._id} value = {prescription.NomeDoPaciente}>{prescription.NomeDoPaciente}</option>
))}
</select>

<div className = "infoPaciente">
<p></p>



</div>

</div>

<div className = "ListaPrescricoes">

<center>
 <span className = "Titulo">Histórico de prescrições</span>
</center>
<p/>
<div className = "Prescricoes">
{prescriptions.map(prescription =>(
<div key = {prescription._id} className = "Prescricao" id = "card">

<b>{prescription.NomeDoPaciente}</b>
<p/>
{prescription.NomeDoMedicamento}<p/>
{prescription.InstrucoesDeUso}
<p/>
<button>...</button>

</div>
))}

</div>
<center>
<a href = "">Ver Todas as Prescrições</a>
<p/>
</center>

<Router>
    <Link to = "/CadastroReceita"><button id = "NovaPrescricao">Nova Prescrição</button></Link>
</Router>


</div>


</div>
    )
}

export default MainPage;
