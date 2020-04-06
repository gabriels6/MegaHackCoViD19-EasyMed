/* Entidade Do Medico */

const mongoose = require('mongoose')
/* Dados do Medico*/

const PrescriptionSchema = new mongoose.Schema({
   IDReceita: Number,
   CRMdoMedico: Number,
   NomeDoMedico: String,
   NomeDoPaciente: String,
   NomeDoMedicamento: String,
   RazaoDaPrescricao: String,
   InstrucoesDeUso: String,
   RestricaoDeUso: Number,
   RestricaoDeTempo: String,
   /* AssinaturaDigital: AssinaturaDigital */
   EmailDoPaciente: String,
   WhatsappDoPaciente: String,
   LinkDaReceita: String
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);