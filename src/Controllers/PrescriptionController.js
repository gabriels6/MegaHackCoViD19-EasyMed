const Prescription = require('../Models/PrescriptionModel')

const axios = require('axios')


module.exports = {

    async receberReceitasCriadas(request,response){
        const Prescriptions = await Prescription.find();

    return response.json(Prescriptions);
    },

    async construirReceita(request,response){

        const { IDReceita, CRMdoMedico, NomeDoMedico, NomeDoPaciente, NomeDoMedicamento,RazaoDaPrescricao, InstrucoesDeUso, RestricaoDeUso, RestricaoDeTempo, EmailDoPaciente, WhatsappDoPaciente, LinkDaReceita } = request.body;

        const prescription = await Prescription.create({
            IDReceita,
            CRMdoMedico,
            NomeDoMedico,
            NomeDoPaciente,
            NomeDoMedicamento,
            RazaoDaPrescricao,
            InstrucoesDeUso,
            RestricaoDeUso,
            RestricaoDeTempo,
            EmailDoPaciente,
            WhatsappDoPaciente,
            LinkDaReceita
        });

        console.log(request.body)
        return response.json(prescription)
    }

}