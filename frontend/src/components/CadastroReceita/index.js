import React , { useState, useEffect}from 'react'
import './styles.css'
import { BrowserRouter as Router,
    Switch,
    Route,
    Link
   } from "react-router-dom";

import api from '../../services/api';

function CadastroReceita(){

    const [Paciente, setPaciente] = useState('')

    useEffect(()=>{
        const select = document.getElementById("Pacientes");
        setPaciente(select.value);

        
    },[]);

   async function handleCreatePrescription(){
        const IDReceita = document.getElementById("IDReceita").value;
        const CRMdoMedico = document.getElementById("CRMdoMedico").value;
        const NomeDoMedico = document.getElementById("NomeDoMedico").value;
        const NomeDoMedicamento = document.getElementById("NomeDoMedicamento").value;
        const RazaoDaPrescricao = document.getElementById("RazaoDaPrescricao").value;
        const InstrucoesDeUso = document.getElementById("InstrucoesDeUso").value;
        const RestricaoDeUso = document.getElementById("RestricaoDeUso").value;
        const RestricaoDeTempo = document.getElementById("RestricaoDeTempo").value;
        const EmailDoPaciente = document.getElementById("EmailDoPaciente").value;
        const WhatsappDoPaciente = document.getElementById("WhatsappDoPaciente").value;
        const LinkDaReceita = document.getElementById("LinkDaReceita").value;

        const response = await api.post('/criarPrescricao', {
            IDReceita,
            CRMdoMedico,
            NomeDoMedico,
            NomeDoMedicamento,
            RazaoDaPrescricao,
            InstrucoesDeUso,
            RestricaoDeUso,
            RestricaoDeTempo,
            EmailDoPaciente,
            WhatsappDoPaciente,
            LinkDaReceita
        });
        
      }

    return(
        <div className = "ControlCadastroReceita">
        <div className = "escolhaPaciente">

<b>Ache o seu Paciente</b>
<p></p>
<select onChange = {()=>{const select = document.getElementById("Pacientes"); setPaciente(select.value);
 const HiddenNomeDoPaciente = document.getElementById("NomeDoPaciente"); HiddenNomeDoPaciente.value = Paciente }}name = "NomeDoPaciente" id = "Pacientes">
<option value = "paciente1">Paciente1</option>
<option value = "paciente2">Paciente2</option>
</select>

<div className = "infoPaciente">
<p/>



</div>

</div>

<div className = "CadastroReceita">
<form onSubmit={handleCreatePrescription}>
<input type = "hidden" value = "3" id = "IDReceita" />
<input type = "hidden"  value = "32354" id = "CRMdoMedico"/><br/>
<input type = "hidden" value = "Medico 2" id = "NomeDoMedico"/><br/>
<input type = "hidden" value = {Paciente} id = "NomeDoPaciente" /><br/>
Nome do Medicamento:<br/>
<input type = "text" id = "NomeDoMedicamento"/><br/>
Razão da Prescrição:<br/>
<textarea id = "RazaoDaPrescricao"  ></textarea><br/>
Instruções de Uso:<br/>
<textarea id = "InstrucoesDeUso"  ></textarea><br/>
Restrição de Uso:<br/>
<input type = "number" id  ="RestricaoDeUso"/><br/>
Restrição de Tempo:<br/>
<input type = "Date" id = "RestricaoDeTempo"/><br/>
Email do Paciente:<br/>
<input type = "text" id = "EmailDoPaciente"/><br/>
Whatsapp do Paciente:<br/>
<input type = "text" id = "WhatsappDoPaciente"/><br/>
<input type = "hidden" value = "www.Receita.com/r/x23et4" id = "LinkDaReceita"/><br/>
<p></p>
<input type = "submit" value = "Assinar e Enviar"/>
</form>

</div>
</div>
    )
}

export default CadastroReceita;