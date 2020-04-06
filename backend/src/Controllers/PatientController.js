const PatientModel = require('../Models/PatientModel')

module.exports = {
    async ReceberPacientesCriados(request,response){
        const Patients = await PatientModel.find();

    return response.json(Patients);
    },

    async EncontrarPaciente(request, response){
        const { NomeDoPaciente } = request.body;

        const Patient = await PatientModel.findOne({NomeDoPaciente});

        return response.json(Patient);

    },

    async CadastrarPacientes(request, response){

        const { NomeDoPaciente, RG, CPF, DataRegistroPaciente, DataUltimaConsulta, Diagnostico, Telefone, Email} = request.body

        const Patient = await PatientModel.create({
            NomeDoPaciente,
            RG,
            CPF,
            DataRegistroPaciente,
            DataUltimaConsulta,
            Diagnostico,
            Telefone,
            Email  
        });
        return response.json(Patient);
    },
    

}