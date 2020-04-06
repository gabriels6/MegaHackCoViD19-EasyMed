import React , { useState, useEffect}from 'react'
import './styles.css'
import api from '../../services/api';


function PesquisaPaciente(){

    const [ patient, setPatient ] = useState([]);

    useEffect(()=>{
      async function obterPacientes(){
         const response = await api.get('/obterPacientes');
  
         setPatient(response.data);
  
      }
      
      obterPacientes();
    }, []);

    async function alterarPaciente(){
        const newPatientName = document.getElementById('Pacientes').value;

        const response = await api.post('/encontrarPaciente',{NomeDoPaciente:newPatientName})
        const NomePaciente = document.getElementById('NomeDoPaciente');
        const RGPaciente = document.getElementById('RGDoPaciente')
        const CPFPaciente = document.getElementById('CPFDoPaciente')
        const DataRegistro = document.getElementById('DataDeRegistro')
        const DataDaUltimaConsulta = document.getElementById('DataUltimaConsulta')
        const DiagnosticoMedico = document.getElementById('Diagnostico')
        const TelefonePaciente = document.getElementById('Telefone')
        const EmailPaciente = document.getElementById('Email')

        const newPatient = response.data

        NomePaciente.innerHTML = newPatient.NomeDoPaciente;
        RGPaciente.innerHTML = "RG: "+newPatient.RG;
        CPFPaciente.innerHTML = "CPF: "+newPatient.CPF;
        DataRegistro.innerHTML = "Registrado em: " + newPatient.DataRegistroPaciente;
        DataDaUltimaConsulta.innerHTML = "Última consulta em: "+newPatient.DataUltimaConsulta;
        DiagnosticoMedico.innerHTML = newPatient.Diagnostico;
        TelefonePaciente.innerHTML = "Telefone: "+ newPatient.Telefone;
        EmailPaciente.innerHTML = "E-mail: " + newPatient.Email;

    }

   

    return(
        <div className = "Control">

                <div className = "escolhaPaciente">

                <b>Ache o seu Paciente</b>
                <p></p>
                   
                        <select onChange = {alterarPaciente} id = "Pacientes">
                        {patient.map(patient =>(
                        <option key = {patient._id} value = {patient.NomeDoPaciente}>{patient.NomeDoPaciente}</option>
                        ))}
                        </select>
                        
                        <p/>
                <span id = "NomeDoPaciente"></span>
                        <p/><span id = "RGDoPaciente"></span>
                        <br/><span id = "CPFDoPaciente"></span>
                        <p/><span id = "DataDeRegistro"></span>
                        <br/><span id = "DataUltimaConsulta"></span>
                        <br/><span id = "Diagnostico"></span>
                        <p/><span id = "Telefone"></span>
                        <br/><span id = "Email"></span>
                        
                        
                </div>
            <div className = "AdNovaPrescricao">
                <center>
                    <span className = "TituloPrescricao">Faça uma prescrição e<br/>
                    agilize seu trabalho!</span>
                    <p/>
                    <button id = "NovaPrescricao">Nova Prescrição</button>
                </center>
            </div>
</div>

    )
}

export default PesquisaPaciente;